export type Tour = {
  id: string
  slug: string
  title: string
  destination: string
  country: string
  duration: string
  price: number
  priceLabel: string
  category: 'india' | 'international' | 'pilgrimage' | 'honeymoon' | 'adventure'
  rating: number
  reviewCount: number
  image: string
  tags: string[]
  highlights: string[]
  itinerary: { day: number; title: string; description: string }[]
  inclusions: string[]
  exclusions: string[]
  description: string
  featured: boolean
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'golden-triangle-rajasthan',
    title: 'Royal Rajasthan & Golden Triangle',
    destination: 'Rajasthan',
    country: 'India',
    duration: '7 Nights / 8 Days',
    price: 24999,
    priceLabel: '₹24,999',
    category: 'india',
    rating: 4.8,
    reviewCount: 312,
    image: '/images/tour-rajasthan.png',
    tags: ['Heritage', 'Culture', 'Photography'],
    featured: true,
    description:
      'Explore the majestic forts, vibrant bazaars, and royal palaces of Rajasthan on this unforgettable 8-day journey through India\'s desert kingdom.',
    highlights: [
      'Explore Mehrangarh Fort, Jodhpur',
      'Camel safari in Sam Sand Dunes',
      'Heritage walk in Jaisalmer',
      'Visit Amber Fort, Jaipur',
      'Traditional Rajasthani dinner under the stars',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', description: 'Welcome to the Pink City. Check into your heritage hotel and enjoy a welcome dinner.' },
      { day: 2, title: 'Jaipur Exploration', description: 'Visit Amber Fort, Hawa Mahal, City Palace and Jantar Mantar observatory.' },
      { day: 3, title: 'Jaipur to Jodhpur', description: 'Drive through the Aravalli hills to the Blue City. Evening walk in the old city.' },
      { day: 4, title: 'Jodhpur Sightseeing', description: 'Mehrangarh Fort, Jaswant Thada memorial and the bustling Clock Tower market.' },
      { day: 5, title: 'Jodhpur to Jaisalmer', description: 'Travel to the Golden City through the Thar Desert landscape.' },
      { day: 6, title: 'Jaisalmer Fort & Dunes', description: 'Explore the living fort, Patwon ki Haveli, and evening camel safari at Sam Dunes.' },
      { day: 7, title: 'Jaisalmer to Udaipur', description: 'Drive to the City of Lakes, check into a lake-view hotel.' },
      { day: 8, title: 'Departure', description: 'Morning boat ride on Lake Pichola, then transfer to airport/railway station.' },
    ],
    inclusions: [
      'Accommodation in 3-star/4-star hotels',
      'Daily breakfast & dinner',
      'AC vehicle for all transfers',
      'Camel safari at Sam Dunes',
      'All monument entry fees',
      'Dedicated English-speaking guide',
    ],
    exclusions: [
      'Airfare / train tickets',
      'Personal expenses',
      'Lunch',
      'Travel insurance',
      'Tips and gratuities',
    ],
  },
  {
    id: '2',
    slug: 'kerala-backwaters-spice',
    title: 'Kerala Backwaters & Spice Trails',
    destination: 'Kerala',
    country: 'India',
    duration: '5 Nights / 6 Days',
    price: 18999,
    priceLabel: '₹18,999',
    category: 'india',
    rating: 4.9,
    reviewCount: 248,
    image: '/images/tour-kerala.png',
    tags: ['Nature', 'Wellness', 'Backwaters'],
    featured: true,
    description:
      'Drift through emerald backwaters on a traditional houseboat, sip spiced tea on misty hill stations, and rejuvenate with authentic Ayurvedic therapies.',
    highlights: [
      'Houseboat cruise on Alleppey backwaters',
      'Tea plantation walk in Munnar',
      'Kathakali dance performance',
      'Ayurvedic massage experience',
      'Spice garden tour in Thekkady',
    ],
    itinerary: [
      { day: 1, title: 'Arrive Kochi', description: 'Explore Fort Kochi, Chinese fishing nets, Dutch Palace and St. Francis Church.' },
      { day: 2, title: 'Kochi to Munnar', description: 'Drive through the Western Ghats to the high-altitude tea plantations.' },
      { day: 3, title: 'Munnar to Thekkady', description: 'Tea estate walk and spice plantation tour. Evening wildlife safari in Periyar National Park.' },
      { day: 4, title: 'Thekkady to Alleppey', description: 'Drive to backwater country. Board your private houseboat for an overnight cruise.' },
      { day: 5, title: 'Alleppey to Kovalam', description: 'Morning on the houseboat, then travel to the crescent beach of Kovalam.' },
      { day: 6, title: 'Departure', description: 'Morning Ayurvedic session, then transfer to Thiruvananthapuram airport.' },
    ],
    inclusions: [
      'Houseboat stay (AC, meals included)',
      '3-star/4-star hotels',
      'Daily breakfast',
      'All transfers in AC vehicle',
      'Spice garden guided tour',
      'Ayurvedic consultation & massage',
    ],
    exclusions: [
      'Airfare',
      'Lunch & dinner on land',
      'Personal expenses',
      'Travel insurance',
    ],
  },
  {
    id: '3',
    slug: 'dubai-luxury-escape',
    title: 'Dubai Luxury City Escape',
    destination: 'Dubai',
    country: 'UAE',
    duration: '4 Nights / 5 Days',
    price: 44999,
    priceLabel: '₹44,999',
    category: 'international',
    rating: 4.7,
    reviewCount: 189,
    image: '/images/tour-dubai.png',
    tags: ['Luxury', 'City', 'Shopping'],
    featured: true,
    description:
      'Experience the dazzling skyline, world-class shopping, desert adventures, and iconic landmarks of Dubai in this carefully crafted 5-day luxury escape.',
    highlights: [
      'Burj Khalifa At the Top (Level 124)',
      'Desert Safari with BBQ dinner',
      'Dhow Cruise Dinner, Dubai Creek',
      'Dubai Mall & Gold Souk shopping',
      'Palm Jumeirah Monorail',
    ],
    itinerary: [
      { day: 1, title: 'Arrival & City Introduction', description: 'Airport pickup, hotel check-in. Evening Dubai Mall visit and Burj Khalifa fountain show.' },
      { day: 2, title: 'Modern Dubai', description: 'Burj Khalifa At the Top, Dubai Frame, JBR beach walk.' },
      { day: 3, title: 'Desert Adventure', description: 'Morning free. Afternoon desert safari with dune bashing, camel ride, henna painting & BBQ dinner.' },
      { day: 4, title: 'Heritage & Shopping', description: 'Dubai Creek, Gold Souk, Spice Souk, Dhow Cruise dinner at night.' },
      { day: 5, title: 'Departure', description: 'Morning free for shopping. Transfer to airport.' },
    ],
    inclusions: [
      '4-star hotel accommodation',
      'Daily breakfast',
      'All transfers in AC vehicle',
      'Burj Khalifa entry (Level 124)',
      'Desert Safari with BBQ dinner',
      'Dhow Cruise Dinner',
      'Visa assistance',
    ],
    exclusions: [
      'International airfare',
      'Lunch & dinner (except mentioned)',
      'Personal shopping',
      'Travel insurance',
    ],
  },
  {
    id: '4',
    slug: 'char-dham-yatra',
    title: 'Char Dham Yatra — Divine Journey',
    destination: 'Uttarakhand',
    country: 'India',
    duration: '11 Nights / 12 Days',
    price: 32999,
    priceLabel: '₹32,999',
    category: 'pilgrimage',
    rating: 4.9,
    reviewCount: 427,
    image: '/images/tour-kedarnath.png',
    tags: ['Spiritual', 'Pilgrimage', 'Himalaya'],
    featured: true,
    description:
      'Embark on the most sacred pilgrimage circuit of India — Yamunotri, Gangotri, Kedarnath, and Badrinath — with comfortable stays and a dedicated priest guide.',
    highlights: [
      'Darshan at Yamunotri temple',
      'Holy dip at Gangotri',
      'Kedarnath helicopter option available',
      'Badrinath Aarti at dawn',
      'Rishikesh & Haridwar extension',
    ],
    itinerary: [
      { day: 1, title: 'Haridwar Arrival', description: 'Arrive Haridwar. Attend the spectacular Ganga Aarti at Har Ki Pauri.' },
      { day: 2, title: 'Haridwar to Barkot', description: 'Drive to Barkot through scenic mountain roads. Night halt.' },
      { day: 3, title: 'Yamunotri Dham', description: 'Trek to Yamunotri temple, cook prasad in natural hot springs. Return to Barkot.' },
      { day: 4, title: 'Barkot to Uttarkashi', description: 'Drive to Uttarkashi via Dharali. Visit Vishwanath temple.' },
      { day: 5, title: 'Gangotri Dham', description: 'Visit Gangotri, the origin of River Ganga. Holy dip in Bhagirathi.' },
      { day: 6, title: 'Uttarkashi to Guptkashi', description: 'Drive through beautiful Himalayan terrain.' },
      { day: 7, title: 'Kedarnath Dham', description: 'Trek (or helicopter) to Kedarnath. Evening aarti at the ancient Jyotirlinga.' },
      { day: 8, title: 'Kedarnath to Badrinath', description: 'Drive via Joshimath. Check-in to Badrinath.' },
      { day: 9, title: 'Badrinath Dham', description: 'Early morning Abhishek puja. Visit Mana village, the last Indian village.' },
      { day: 10, title: 'Badrinath to Rishikesh', description: 'Long drive back. Enjoy evening rafting on the Ganga.' },
      { day: 11, title: 'Rishikesh Exploration', description: 'Laxman Jhula, Ram Jhula, Beatles Ashram, yoga class.' },
      { day: 12, title: 'Departure', description: 'Transfer to Haridwar/Dehradun for onward journey.' },
    ],
    inclusions: [
      'All accommodation (guesthouses & hotels)',
      'Daily breakfast & dinner',
      'AC vehicle for plains, non-AC for hills',
      'Dedicated priest for rituals',
      'All temple entry fees',
      'Ponies at Kedarnath (if needed)',
    ],
    exclusions: [
      'Helicopter charges (optional)',
      'Airfare / train tickets',
      'Personal expenses',
      'Lunch',
      'Travel insurance',
    ],
  },
  {
    id: '5',
    slug: 'bali-honeymoon-delight',
    title: 'Bali Honeymoon Delight',
    destination: 'Bali',
    country: 'Indonesia',
    duration: '6 Nights / 7 Days',
    price: 54999,
    priceLabel: '₹54,999',
    category: 'honeymoon',
    rating: 4.8,
    reviewCount: 163,
    image: '/images/tour-bali.png',
    tags: ['Honeymoon', 'Beach', 'Romance'],
    featured: true,
    description:
      'Celebrate your love in paradise — rice terrace walks, private pool villas, candlelit beach dinners, and temple sunsets make Bali the perfect honeymoon destination.',
    highlights: [
      'Private pool villa stay',
      'Tegallalang rice terrace sunrise trek',
      'Couples spa at Ubud',
      'Candlelit beach dinner Seminyak',
      'Tanah Lot sunset viewing',
    ],
    itinerary: [
      { day: 1, title: 'Arrive Bali', description: 'Airport pickup, rose petal welcome at your private villa. Evening sunset at Kuta beach.' },
      { day: 2, title: 'Ubud Romance', description: 'Visit Tegallalang rice terraces, Ubud art market, Tirta Empul holy spring temple.' },
      { day: 3, title: 'Spa & Sacred Temples', description: 'Morning couples spa. Afternoon visit Besakih Mother Temple and Kintamani volcano viewpoint.' },
      { day: 4, title: 'Nusa Penida Island', description: 'Full-day speedboat trip to Nusa Penida. Kelingking cliff, Crystal Bay snorkeling.' },
      { day: 5, title: 'Seminyak Beach Day', description: 'Relax on Seminyak beach. Evening sunset cocktails at Tanah Lot.' },
      { day: 6, title: 'Cooking & Culture', description: 'Balinese cooking class. Evening traditional Kecak fire dance performance.' },
      { day: 7, title: 'Departure', description: 'Morning free. Transfer to Ngurah Rai International Airport.' },
    ],
    inclusions: [
      'Private pool villa (5 nights) + resort (1 night)',
      'Daily breakfast',
      'Candlelit beach dinner',
      'Couples spa session',
      'All airport and activity transfers',
      'Speedboat to Nusa Penida',
    ],
    exclusions: [
      'International airfare',
      'Bali visa on arrival (self-pay)',
      'Lunch & dinner (except mentioned)',
      'Personal expenses',
      'Travel insurance',
    ],
  },
  {
    id: '6',
    slug: 'manali-adventure-expedition',
    title: 'Manali Adventure Expedition',
    destination: 'Manali',
    country: 'India',
    duration: '5 Nights / 6 Days',
    price: 15999,
    priceLabel: '₹15,999',
    category: 'adventure',
    rating: 4.6,
    reviewCount: 201,
    image: '/images/tour-manali.png',
    tags: ['Adventure', 'Snow', 'Mountains'],
    featured: false,
    description:
      'Feel the rush of the Himalayan wilderness — from white-water rafting on the Beas to snow trekking on Rohtang Pass in this action-packed adventure escape.',
    highlights: [
      'Snow activities at Solang Valley',
      'Rohtang Pass excursion',
      'River rafting on Beas',
      'Hadimba Temple forest walk',
      'Paragliding (optional)',
    ],
    itinerary: [
      { day: 1, title: 'Arrive Manali', description: 'Arrive Manali, check-in. Evening walk at Mall Road and local market.' },
      { day: 2, title: 'Solang Valley', description: 'Snow activities — skiing, snowmobile, zorbing at Solang Valley. Evening bonfire.' },
      { day: 3, title: 'Rohtang Pass', description: 'Early morning drive to Rohtang Pass (seasonal). Snow trek and photography.' },
      { day: 4, title: 'River Rafting', description: 'Morning rafting on Beas River. Afternoon visit to Hadimba Temple.' },
      { day: 5, title: 'Old Manali & Naggar', description: 'Explore old Manali village, Manu Temple, and the medieval Naggar Castle.' },
      { day: 6, title: 'Departure', description: 'Transfer to Manali bus stand or airport Bhuntar.' },
    ],
    inclusions: [
      '3-star hotel accommodation',
      'Daily breakfast & dinner',
      'All transfers in AC vehicle',
      'Snow activity charges',
      'River rafting (Grade III)',
      'Bonfire on Day 1',
    ],
    exclusions: [
      'Bus/flight to Manali',
      'Paragliding (optional extra)',
      'Lunch',
      'Personal expenses',
      'Travel insurance',
    ],
  },
  {
    id: '7',
    slug: 'goa-beach-fiesta',
    title: 'Goa Beach Fiesta',
    destination: 'Goa',
    country: 'India',
    duration: '4 Nights / 5 Days',
    price: 12999,
    priceLabel: '₹12,999',
    category: 'india',
    rating: 4.5,
    reviewCount: 334,
    image: '/images/tour-goa.png',
    tags: ['Beach', 'Party', 'Heritage'],
    featured: false,
    description:
      'Sun, sand, spice — Goa\'s perfect blend of golden beaches, Portuguese heritage, fresh seafood, and vibrant nightlife awaits you.',
    highlights: [
      'Beach hopping — Baga, Calangute, Anjuna',
      'Dudhsagar Waterfall trek',
      'Old Goa churches heritage walk',
      'Spice plantation visit',
      'Sunset cruise on Mandovi River',
    ],
    itinerary: [
      { day: 1, title: 'Arrive Goa', description: 'Check-in at beach resort. Evening walk on Calangute beach.' },
      { day: 2, title: 'North Goa', description: 'Baga beach, Anjuna flea market, Fort Aguada. Sunset at Vagator cliff.' },
      { day: 3, title: 'Dudhsagar Falls', description: 'Full day trip to Dudhsagar Waterfall via jungle jeep safari. Spice plantation lunch.' },
      { day: 4, title: 'Heritage & River Cruise', description: 'Old Goa basilicas, Dona Paula viewpoint, evening Mandovi River sunset cruise.' },
      { day: 5, title: 'Departure', description: 'Morning beach time. Transfer to Dabolim Airport.' },
    ],
    inclusions: [
      'Beach-facing hotel stay',
      'Daily breakfast',
      'All transfers in AC vehicle',
      'Dudhsagar jeep safari',
      'Sunset river cruise',
      'Spice plantation lunch',
    ],
    exclusions: [
      'Airfare / train tickets',
      'Lunch & dinner (except mentioned)',
      'Water sports activities',
      'Travel insurance',
    ],
  },
  {
    id: '8',
    slug: 'triyuginarayan-destination-wedding',
    title: 'Triyuginarayan Destination Wedding',
    destination: 'Rudraprayag',
    country: 'India',
    duration: 'Custom Duration',
    price: 299999,
    priceLabel: '₹2.99 Lakh+',
    category: 'india',
    rating: 5.0,
    reviewCount: 42,
    image: '/images/tour-wedding.png',
    tags: ['Wedding', 'Sacred', 'Himalaya'],
    featured: true,
    description:
      'Get married at the same sacred ground where Lord Shiva wed Goddess Parvati. TripOcio crafts the most divine and romantic Himalayan wedding experience.',
    highlights: [
      'Wedding at the sacred Triyuginarayan temple',
      'Eternal flame ceremony (Akhand Dhuni)',
      'Flower-covered mandap with mountain views',
      'Helicopter arrival option',
      'Royal feast with Garhwali cuisine',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Rishikesh', description: 'Welcome ceremony. Riverside sangeet night.' },
      { day: 2, title: 'Travel to Triyuginarayan', description: 'Drive through scenic Kedarnath valley. Pre-wedding rituals.' },
      { day: 3, title: 'The Sacred Wedding', description: 'Morning puja, sacred fire ceremony at the ancient temple. Celebratory feast.' },
      { day: 4, title: 'Honeymoon Start', description: 'Transfer to Kedarnath or Chopta for the honeymoon retreat.' },
    ],
    inclusions: [
      'Complete wedding coordination',
      'Pandit and Vedic rituals',
      'Decorations — flowers, lights, mandap',
      'Catering for up to 50 guests',
      'Photography & videography',
      'Accommodation for 3 nights',
    ],
    exclusions: [
      'Guest travel costs',
      'Extra guest charges above 50',
      'Helicopter (optional)',
    ],
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug)
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((t) => t.featured)
}

export function getToursByCategory(category: Tour['category']): Tour[] {
  return tours.filter((t) => t.category === category)
}
