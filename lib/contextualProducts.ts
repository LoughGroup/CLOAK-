/**
 * PRODUCT IMAGES
 * Place real product photos in /public/products/
 * Recommended: JPG or WebP, 400x400px minimum, square crop, white background
 * Sources:
 *   Amazon product images — screenshot or use official press assets
 *   Bellroy — press kit at bellroy.com/press
 *   eufy — press assets at eufy.com/press
 *   She's Birdie — contact via ambassador program for assets
 * Naming: match exactly the filenames in the image field below
 */

import { affiliateLinks } from './affiliateLinks'

export type ContextualProduct = {
  id: string
  linkId: keyof typeof affiliateLinks
  triggerAssets: string[]
  name: string
  preventionLine: string
  cta: string
  partner: 'amazon' | 'bellroy' | 'eufy' | 'shesbirdie'
  image: string // path to image in /public/products/ or external URL
}

export const contextualProducts: ContextualProduct[] = [
  {
    id: 'airtag_phone',
    linkId: 'airtag_phone',
    triggerAssets: ['phone'],
    name: 'Apple AirTag Phone Holder',
    preventionLine: "Attach one to your phone case. You'll know its last location the moment it leaves your sight.",
    cta: 'See on Amazon →',
    partner: 'amazon',
    image: '/products/airtag-phone.jpg',
  },
  {
    id: 'antitheft_tether',
    linkId: 'antitheft_tether',
    triggerAssets: ['phone'],
    name: 'Anti-Theft Phone Tether',
    preventionLine: 'A wrist tether makes grab-and-run theft nearly impossible. Used by commuters across Australia.',
    cta: 'See on Amazon →',
    partner: 'amazon',
    image: '/products/antitheft-tether.jpg',
  },
  {
    id: 'rfid_wallet',
    linkId: 'rfid_wallet',
    triggerAssets: ['wallet', 'cards', 'licence', 'medicare'],
    name: 'Bellroy RFID-Blocking Wallet',
    preventionLine: 'Blocks card skimming and protects your identity documents. Built in Australia, used worldwide.',
    cta: 'View at Bellroy →',
    partner: 'bellroy',
    image: '/products/bellroy-rfid-wallet.jpg',
  },
  {
    id: 'tile_slim_wallet',
    linkId: 'tile_slim_wallet',
    triggerAssets: ['wallet'],
    name: 'Tile Slim Wallet Tracker',
    preventionLine: 'Slides into any wallet. Rings when you misplace it and shows its last known location on a map.',
    cta: 'See on Amazon →',
    partner: 'amazon',
    image: '/products/tile-slim.jpg',
  },
  {
    id: 'rfid_passport_holder',
    linkId: 'rfid_passport_holder',
    triggerAssets: ['passport'],
    name: 'Bellroy RFID Passport Holder',
    preventionLine: 'Protects your passport chip from being skimmed while it sits in your bag or pocket.',
    cta: 'View at Bellroy →',
    partner: 'bellroy',
    image: '/products/bellroy-passport-holder.jpg',
  },
  {
    id: 'airtag_keys',
    linkId: 'airtag_keys',
    triggerAssets: ['car_keys', 'house_keys', 'work_keys'],
    name: 'Apple AirTag Key Ring',
    preventionLine: "Takes 30 seconds to attach. You'll never spend an hour searching for your keys again.",
    cta: 'See on Amazon →',
    partner: 'amazon',
    image: '/products/airtag-keys.jpg',
  },
  {
    id: 'airtag_luggage',
    linkId: 'airtag_luggage',
    triggerAssets: ['luggage', 'laptop'],
    name: 'AirTag Luggage Tracker',
    preventionLine: 'Drop one inside your bag before every trip. Track it anywhere in the world from your phone.',
    cta: 'See on Amazon →',
    partner: 'amazon',
    image: '/products/airtag-luggage.jpg',
  },
  {
    id: 'airtag_pet_collar',
    linkId: 'airtag_pet_collar',
    triggerAssets: ['pet'],
    name: 'AirTag Pet Collar Attachment',
    preventionLine: "Attaches to any collar. If your pet goes missing again, you'll know exactly where they are.",
    cta: 'See on Amazon →',
    partner: 'amazon',
    image: '/products/airtag-pet-collar.jpg',
  },
  {
    id: 'hidden_bike_tracker',
    linkId: 'hidden_bike_tracker',
    triggerAssets: ['bicycle'],
    name: 'Hidden Bike GPS Tracker',
    preventionLine: 'Hides inside your bike frame. Significantly improves recovery odds if stolen again.',
    cta: 'See on Amazon →',
    partner: 'amazon',
    image: '/products/bike-tracker.jpg',
  },
  {
    id: 'vehicle_tracker',
    linkId: 'vehicle_tracker',
    triggerAssets: ['vehicle', 'car_keys'],
    name: 'Hidden Vehicle GPS Tracker',
    preventionLine: 'A discreetly placed tracker is your best chance of recovery if your vehicle is taken again.',
    cta: 'See on Amazon →',
    partner: 'amazon',
    image: '/products/vehicle-tracker.jpg',
  },
  {
    id: 'eufy_doorbell',
    linkId: 'eufy_doorbell',
    triggerAssets: ['house_keys'],
    name: 'eufy Video Doorbell',
    preventionLine: "See and speak to anyone at your door before they know you're watching. Records 24/7.",
    cta: 'View at eufy →',
    partner: 'eufy',
    image: '/products/eufy-doorbell.jpg',
  },
  {
    id: 'eufy_camera',
    linkId: 'eufy_camera',
    triggerAssets: ['house_keys', 'vehicle', 'bicycle'],
    name: 'eufy Security Camera',
    preventionLine: 'Outdoor cameras deter theft and capture evidence. No monthly subscription required.',
    cta: 'View at eufy →',
    partner: 'eufy',
    image: '/products/eufy-camera.jpg',
  },
  {
    id: 'safety_alarm',
    linkId: 'safety_alarm',
    triggerAssets: ['luggage', 'passport'],
    name: "She's Birdie Personal Safety Alarm",
    preventionLine: 'A 130dB alarm attracts immediate attention. Used by solo travellers and commuters worldwide.',
    cta: "View at She's Birdie →",
    partner: 'shesbirdie',
    image: '/products/shesbirdie-alarm.jpg',
  },
  {
    id: 'power_bank',
    linkId: 'power_bank',
    triggerAssets: ['phone', 'laptop', 'luggage'],
    name: 'Portable Power Bank',
    preventionLine: 'A dead phone in an emergency is its own crisis. Keep a power bank in your bag at all times.',
    cta: 'See on Amazon →',
    partner: 'amazon',
    image: '/products/power-bank.jpg',
  },
]

export function getProductsForAssets(selectedAssets: string[]): ContextualProduct[] {
  const matched = contextualProducts.filter((p) => p.triggerAssets.some((a) => selectedAssets.includes(a)))
  const deduped = Array.from(new Map(matched.map((p) => [p.id, p])).values())
  const nonAmazon = deduped.filter((p) => p.partner !== 'amazon')
  const amazon = deduped.filter((p) => p.partner === 'amazon')
  return [...nonAmazon, ...amazon].slice(0, 2)
}

