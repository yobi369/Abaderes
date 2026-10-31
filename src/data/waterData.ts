import { Product, MineralSpec, DeliveryZone } from '../types';
import bottle20L from '../assets/images/abadares_20l_badass_1793438592481.jpg';
import pack500ml from '../assets/images/abadares_500ml_pack_1793438594711.jpg';
import bottle1L from '../assets/images/abadares_1l_bottle_1793438593937.jpg';
import bottle5L from '../assets/images/product_5l_bottle_1793437537428.jpg';

export const COMPANY_INFO = {
  name: 'Mount Abadares Fresh Water',
  legalName: 'Mount Abadares Fresh Water Ltd.',
  slogan: 'Pure Water. Better Everyday.',
  subSlogan: 'Pure from the Aberdares, For a healthier you.',
  phone: '+254 790 380 309',
  phoneDisplay: '0790 380 309',
  whatsappNumber: '254790380309',
  email: 'orders@mountabadareswater.com',
  address: 'Machakos, Machakos County, Kenya',
  serviceHours: 'Monday – Saturday: 7:00 AM – 7:00 PM | Sunday: 9:00 AM – 4:00 PM',
  currency: 'KSh',
};

export const PRODUCTS: Product[] = [
  {
    id: 'prod-20l',
    name: '20 Litre Dispenser Bottle',
    size: '20 Litres',
    category: 'dispenser',
    price: 250,
    originalPrice: 300,
    description: 'Our flagship 20L reusable poly-carbonate bottle. Ideal for homes, executive offices, schools, and health facilities. Fits all standard water coolers and manual or electric pumps.',
    bestFor: 'Homes, Corporate Offices, Dispensers & Water Coolers',
    features: [
      'Eco-friendly sanitized refill exchange',
      'Food-grade, BPA-free durable bottle',
      'Tamper-evident hygiene seal',
      'Compatible with top & bottom load dispensers'
    ],
    image: bottle20L,
    tag: 'Best Seller',
    popular: true,
  },
  {
    id: 'prod-500ml-pack',
    name: '500 ml Pack (24 Bottles)',
    size: '24 × 500ml',
    category: 'packs',
    price: 550,
    originalPrice: 650,
    description: 'A shrink-wrapped case of 24 compact 500ml spring water bottles. Perfect for boardrooms, hospitality, conferences, sports teams, weddings, and daily grab-and-go hydration.',
    bestFor: 'Events, Boardrooms, Conferences & Daily Commutes',
    features: [
      '24 easy-grip bottles per pack',
      'Reinforced shrink-wrap packaging',
      'Crystal clear mountain spring taste',
      '100% recyclable bottles'
    ],
    image: pack500ml,
    tag: 'Event Favorite',
    popular: true,
  },
  {
    id: 'prod-1l-pack',
    name: '1 Litre Bottle (Pack of 12)',
    size: '12 × 1.0 Litre',
    category: 'packs',
    price: 600,
    originalPrice: 700,
    description: 'Pack of 12 full one-litre bottles. The sweet spot between portability and all-day hydration for active lifestyles, students, and family excursions.',
    bestFor: 'Gym, Field Trips, Road Trips & Daily Workstations',
    features: [
      'Optimal personal hydration volume',
      'Ergonomic bottle contour',
      'Fresh mountain spring water',
      'Convenient 12-pack case'
    ],
    image: bottle1L,
    tag: 'Active Hydration',
  },
  {
    id: 'prod-1-5l-pack',
    name: '1.5 Litre Bottle (Pack of 12)',
    size: '12 × 1.5 Litres',
    category: 'packs',
    price: 720,
    originalPrice: 840,
    description: 'High-capacity 1.5L bottles delivering maximum daily hydration. Recommended for athletes, long-distance drivers, outdoor adventures, and dining tables.',
    bestFor: 'Athletes, Fitness, Long Drives & Dining',
    features: [
      '1.5L generous volume per bottle',
      'Naturally alkaline pH 7.4',
      'Sturdy grip design',
      'Long-lasting shelf freshness'
    ],
    image: '/src/assets/images/abadares_1l_bottle_1793438593937.jpg',
  },
  {
    id: 'prod-5l',
    name: '5 Litre Family Bottle',
    size: '5 Litres',
    category: 'bottles',
    price: 180,
    originalPrice: 220,
    description: 'Convenient 5-litre container with a sturdy integrated carry handle. Perfect for weekend getaways, camping, small apartments without a dispenser, or cooking with pure spring water.',
    bestFor: 'Family Kitchens, Camping, Cottages & Cooking',
    features: [
      'Heavy-duty molded carry handle',
      'Wide pour spout with screw cap',
      'Great for cooking & infant formula',
      'Space-saving refrigerator fit'
    ],
    image: bottle5L,
    popular: true,
  },
  {
    id: 'prod-electric-pump',
    name: 'Rechargeable Automatic Water Pump',
    size: 'Universal 20L Fit',
    category: 'accessories',
    price: 1200,
    originalPrice: 1500,
    description: 'Cordless electric drinking water pump with one-touch dispensing. USB rechargeable battery lasts up to 5-6 20L bottles on a single charge. Food grade silicone hose and stainless steel spout.',
    bestFor: 'Effortless 20L bottle dispensing without heavy lifting',
    features: [
      'USB rechargeable lithium battery',
      'One-button quiet water flow',
      'Food-grade silicone suction hose',
      'Direct snap-on fit for 20L bottles'
    ],
    image: '/src/assets/images/abadares_20l_badass_1793438592481.jpg',
  }
];

export const MINERAL_SPECS: MineralSpec[] = [
  { name: 'pH Level', amount: '7.4 – 7.6', benefit: 'Naturally balanced alkaline pH for smooth taste and metabolic wellness' },
  { name: 'Calcium (Ca²⁺)', amount: '14.2 mg/L', benefit: 'Supports strong bones and healthy cardiovascular function' },
  { name: 'Magnesium (Mg²⁺)', amount: '6.8 mg/L', benefit: 'Aids muscular recovery, energy synthesis, and crisp mouthfeel' },
  { name: 'Potassium (K⁺)', amount: '2.4 mg/L', benefit: 'Essential cellular electrolyte supporting hydration balance' },
  { name: 'Bicarbonates (HCO₃⁻)', amount: '48.0 mg/L', benefit: 'Natural digestive buffer reducing bodily acidity' },
  { name: 'Total Dissolved Solids (TDS)', amount: '85 mg/L', benefit: 'Light, silky, non-heavy mineral profile with pristine clarity' },
];

export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    area: 'Machakos County (Machakos Town and surrounding areas)',
    leadTime: 'Confirmed when you place your order',
    minOrderFree: 'Delivery fee confirmed on WhatsApp',
    days: 'Please confirm availability',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'We switched our 80-person corporate headquarters to Mount Abadares Fresh Water 6 months ago. Deliveries are punctual every Monday morning, and our employees continually praise the pure, refreshing taste.',
    author: 'Grace Mwangi',
    role: 'Operations Director',
    company: 'Apex Logistics Hub, Nairobi',
    rating: 5,
  },
  {
    id: 2,
    quote: 'With three young kids at home, water safety is my top priority. The 20L refills arrive clean and sealed, the delivery team carries them right to our kitchen dispenser, and WhatsApp ordering takes literally 30 seconds.',
    author: 'David Ochieng',
    role: 'Homeowner & Father',
    company: 'Kilimani Resident',
    rating: 5,
  },
  {
    id: 3,
    quote: 'We ordered 50 packs of 500ml bottles for our regional medical symposium. The branded packaging looked premium, the water tasted naturally cool, and they accommodated our tight event schedule flawlessly.',
    author: 'Dr. Sarah Kariuki',
    role: 'Conference Coordinator',
    company: 'Central Health Summit',
    rating: 5,
  }
];

export const FAQS = [
  {
    question: 'How do I place an order for refills or new bottles?',
    answer: 'You can order directly using the WhatsApp button on this site, which creates an instant formatted message with your requested products and address, or use our online quick-checkout. You can also call our dispatch hotline using the order hotline.'
  },
  {
    question: 'How does the 20-Litre bottle refill exchange work?',
    answer: 'On your first order, if you do not own a clean standard 20L poly-carbonate bottle, a one-time refundable bottle deposit of KSh 600 applies. On subsequent orders, our delivery driver collects your empty sanitized bottle and swaps it with a fresh sealed 20L bottle for only KSh 250.'
  },
  {
    question: 'Where is Mount Abadares Fresh Water sourced from?',
    answer: 'Our water is tapped directly from pristine, protected natural aquifers located deep within the Aberdare Mountain forest ranges. The water undergoes natural volcanic rock filtration before undergoing our state-of-the-art multi-stage micro-filtration, UV sterilization, and touchless bottling in strict compliance with KEBS standards.'
  },
  {
    question: 'Do you offer scheduled weekly deliveries for offices or homes?',
    answer: 'Yes! We offer automated weekly, bi-weekly, or monthly delivery schedules with priority dispatch, consolidated monthly e-invoicing for businesses, and dedicated account manager support.'
  },
  {
    question: 'What is the delivery turnaround time and fee?',
    answer: 'Our current service area is around Machakos, Machakos County. Share your estate or delivery pin on WhatsApp so the team can confirm availability, delivery timing, and any delivery fee before you place the order.'
  }
];
