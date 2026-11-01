import { Product, MineralSpec, DeliveryZone } from '../types';
import bottle20L from '../assets/images/abadares_20l_badass_1793438592481.jpg';
import pack500ml from '../assets/images/abadares_500ml_pack_1793438594711.jpg';
import bottle1L from '../assets/images/abadares_1l_bottle_1793438593937.jpg';
import bottle5L from '../assets/images/product_5l_bottle_1793437537428.jpg';

export const COMPANY_INFO = {
  name: 'Aqua Uno',
  legalName: 'Kibali Traders Enterprise',
  postalAddress: 'P.O. Box 113 90 124 Yatta',
  location: 'Kithimani, Yatta, Machakos County',
  slogan: 'Pure Water. Better Everyday.',
  subSlogan: 'Pure hydration for everyday life.',
  phone: '+254 757 241 618',
  phoneDisplay: '0757 241 618',
  contactPhones: ['0757 241 618'],
  whatsappNumber: '254757241618',
  paymentTill: '5214731',
  email: 'orders@mountabadareswater.com',
  address: 'Kithimani, Yatta, Machakos County, Kenya',
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
    name: '500ml Bottle',
    size: '500ml',
    category: 'packs',
    price: 300,
    description: 'A convenient 500ml bottle of fresh drinking water for everyday hydration, travel, meetings, and events.',
    bestFor: 'Everyday hydration, travel & events',
    features: [
      'Convenient single-bottle size',
      'Easy to carry on the go',
      'Ideal for meetings and events',
      'Ready-to-drink hydration'
    ],
    image: pack500ml,
    tag: 'Event Favorite',
    popular: true,
  },
  {
    id: 'prod-1l-pack',
    name: '1L Bottle',
    size: '1 Litre',
    category: 'packs',
    price: 330,
    description: 'A practical one-litre bottle for workdays, school, travel, and everyday hydration.',
    bestFor: 'Work, school & everyday hydration',
    features: [
      'Convenient one-litre bottle',
      'Easy to carry and store',
      'Suitable for daily use',
      'Ready-to-drink hydration'
    ],
    image: bottle1L,
    tag: 'Active Hydration',
  },
  {
    id: 'prod-1-5l-pack',
    name: '1.5L Bottle',
    size: '1.5 Litres',
    category: 'packs',
    price: 350,
    description: 'A larger 1.5-litre bottle for extended hydration at home, work, or on the move.',
    bestFor: 'Home, work & travel',
    features: [
      'Convenient 1.5-litre bottle',
      'Suitable for sharing or extended use',
      'Easy to store',
      'Ready-to-drink hydration'
    ],
    image: bottle1L,
  },
  {
    id: 'prod-5l',
    name: '5 Litre Family Bottle',
    size: '5 Litres',
    category: 'bottles',
    price: 380,
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
  { name: 'pH', amount: '6.86', benefit: 'Reported water pH' },
  { name: 'Calcium', amount: '4.6 (unit to confirm)', benefit: 'Reported composition value' },
  { name: 'Magnesium', amount: '1.4 (unit to confirm)', benefit: 'Reported composition value' },
  { name: 'Sodium', amount: '4.4 (unit to confirm)', benefit: 'Reported composition value' },
  { name: 'Potassium', amount: '0.2 (unit to confirm)', benefit: 'Reported composition value' },
  { name: 'Manganese', amount: '2.6 (unit to confirm)', benefit: 'Reported composition value' },
  { name: 'Chloride', amount: '0.3 (unit to confirm)', benefit: 'Reported composition value' },
  { name: 'Sulfate', amount: '0.2 (unit to confirm)', benefit: 'Reported composition value' },
  { name: 'Nitrate', amount: '0.3 (unit to confirm)', benefit: 'Reported composition value' },
  { name: 'Total Dissolved Solids (TDS)', amount: '30 (unit to confirm)', benefit: 'Reported total dissolved solids value' },
];

export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    area: 'Machakos County',
    leadTime: 'Confirmed when you place your order',
    minOrderFree: 'Free delivery from 50 parcels',
    days: 'Please confirm availability',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'We switched our 80-person corporate headquarters to Aqua Uno 6 months ago. Deliveries are punctual every Monday morning, and our employees continually praise the pure, refreshing taste.',
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
    answer: 'You can order directly using the WhatsApp button on this site, which creates an order message with your requested products and address. You can also call either of our listed contact numbers.'
  },
  {
    question: 'How does the 20-Litre bottle refill exchange work?',
    answer: 'On your first order, if you do not own a clean standard 20L poly-carbonate bottle, a one-time refundable bottle deposit of KSh 600 applies. On subsequent orders, our delivery driver collects your empty sanitized bottle and swaps it with a fresh sealed 20L bottle for only KSh 250.'
  },
  {
    question: 'How is Aqua Uno drinking water purified?',
    answer: 'Aqua Uno drinking water undergoes a six-stage reverse osmosis purification process designed to remove impurities. It is carefully processed and hygienically packaged under the company’s stated quality standards. The business location is Kithimani, Yatta, Machakos County.'
  },
  {
    question: 'Do you offer scheduled weekly deliveries for offices or homes?',
    answer: 'Yes! We offer automated weekly, bi-weekly, or monthly delivery schedules with priority dispatch, consolidated monthly e-invoicing for businesses, and dedicated account manager support.'
  },
  {
    question: 'What is the delivery turnaround time and fee?',
    answer: 'Free delivery is available for orders of 50 parcels or more across Machakos County. For orders below 50 parcels, contact the team on WhatsApp to confirm delivery availability, timing, and any applicable delivery fee.'
  }
];
