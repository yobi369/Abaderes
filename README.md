# Aqua Uno

A responsive React storefront for a bottled-water delivery business. Customers can browse the catalogue, build an order, enter delivery details and send the request to the business through WhatsApp.

## Features

- Responsive landing page and product catalogue
- Product categories, quantity selection and cart management
- Delivery details and estimated order totals
- WhatsApp checkout with a pre-filled order summary
- WhatsApp enquiry form
- Delivery coverage, FAQs and contact information
- Vite asset imports so local product imagery is fingerprinted and included in production builds
- Search and social sharing metadata

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide icons

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (the development server is configured for port 3000).

## Production build

```bash
npm run lint
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deploy to Vercel

Import `yobi369/Abaderes` as a Vite project. Use:

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

The repository includes a Vercel configuration for these settings.

## Business configuration

Update the central values in `src/data/waterData.ts`:

- `COMPANY_INFO`: display name, telephone number, WhatsApp destination, email, address and service hours
- `PRODUCTS`: product names, descriptions, prices and image assets
- `DELIVERY_ZONES`: supported delivery areas and delivery notes
- `FAQS` and `TESTIMONIALS`: storefront content

The configured WhatsApp destination is **0757 241 618** (international format: `254757241618`).

## Order handling limitation

This is a front-end storefront. Checkout opens WhatsApp with the customer's order details; it does not create a server-side order, charge a payment method, send an email, reserve inventory or notify dispatch independently. The customer must send the prepared WhatsApp message, and the business must confirm availability, delivery fees and final totals.

The contact form also opens a pre-filled WhatsApp enquiry. No form data is stored by this website.

## Before accepting live orders

Confirm the business's current product prices, delivery areas, service hours, contact email and address in `src/data/waterData.ts`. Ensure the WhatsApp number belongs to the dispatch team and test the full flow on a mobile device.
