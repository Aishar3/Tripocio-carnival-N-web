/**
 * Strips near-white pixels from the TripOcio logo and saves a true transparent PNG.
 * Run once: node scripts/remove-logo-bg.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'

const INPUT = 'public/images/tripocio-logo-original.png'
const OUTPUT = 'public/images/tripocio-logo.png'

// Download the original uploaded logo from the blob URL
const BLOB_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2016%2C%202026%2C%2005_48_40%20PM-a4Z1r7IKsjiALjEMPe84xvSZxDJcQm.png'

async function run() {
  // Fetch original logo
  console.log('Fetching original logo...')
  const res = await fetch(BLOB_URL)
  const buffer = Buffer.from(await res.arrayBuffer())
  writeFileSync(INPUT, buffer)
  console.log('Saved original to', INPUT)

  // Read raw pixels
  const { data, info } = await sharp(buffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  console.log(`Image: ${width}x${height}, ${channels} channels`)

  // Flood-fill from all four edges to mark background white pixels
  // Then make them transparent
  const pixels = new Uint8ClampedArray(data)
  const visited = new Uint8Array(width * height)

  const THRESHOLD = 240 // pixels with R,G,B all >= this are "white background"

  function isWhite(idx) {
    return pixels[idx] >= THRESHOLD && pixels[idx + 1] >= THRESHOLD && pixels[idx + 2] >= THRESHOLD
  }

  function pixelIndex(x, y) {
    return (y * width + x) * channels
  }

  // BFS flood fill from edges
  const queue = []
  for (let x = 0; x < width; x++) {
    if (isWhite(pixelIndex(x, 0))) queue.push(x + 0 * width)
    if (isWhite(pixelIndex(x, height - 1))) queue.push(x + (height - 1) * width)
  }
  for (let y = 0; y < height; y++) {
    if (isWhite(pixelIndex(0, y))) queue.push(0 + y * width)
    if (isWhite(pixelIndex(width - 1, y))) queue.push((width - 1) + y * width)
  }

  let qi = 0
  while (qi < queue.length) {
    const node = queue[qi++]
    if (visited[node]) continue
    visited[node] = 1
    const x = node % width
    const y = Math.floor(node / width)
    const idx = pixelIndex(x, y)
    if (!isWhite(idx)) continue
    // Make transparent
    pixels[idx + 3] = 0
    // Neighbours
    if (x > 0) queue.push(node - 1)
    if (x < width - 1) queue.push(node + 1)
    if (y > 0) queue.push(node - width)
    if (y < height - 1) queue.push(node + width)
  }

  // Write result
  await sharp(Buffer.from(pixels.buffer), {
    raw: { width, height, channels },
  })
    .png()
    .toFile(OUTPUT)

  console.log('Transparent logo saved to', OUTPUT)
}

run().catch(console.error)
