/**
 * AFFILIATE LINKS — CLOAK
 *
 * To update a link when your affiliate application is approved:
 * 1. Get your affiliate URL from the program dashboard
 * 2. Replace the url value for that key
 * 3. Change status from 'placeholder' to 'live'
 *
 * Programs to sign up for:
 * - Amazon AU:    affiliate-program.amazon.com.au
 * - Awin:         awin.com/us/publisher
 * - Bellroy:      Apply via Rakuten — rakutenadvertising.com
 * - eufy:         eufy.com/affiliate
 * - She's Birdie: shesbirdie.com/pages/ambassador
 */

// AFFILIATE LINKS — UPDATE THESE WHEN PROGRAMS ARE APPROVED
// Status key: 'placeholder' | 'live'

export const affiliateLinks: Record<string, { url: string; status: 'placeholder' | 'live' }> = {
  // AMAZON AU — Sign up: affiliate-program.amazon.com.au
  airtag_phone: { url: 'https://www.amazon.com.au/s?k=airtag+phone+holder', status: 'placeholder' },
  antitheft_tether: { url: 'https://www.amazon.com.au/s?k=anti+theft+phone+tether+lanyard', status: 'placeholder' },
  tile_slim_wallet: { url: 'https://www.amazon.com.au/s?k=tile+slim+wallet+tracker', status: 'placeholder' },
  airtag_keys: { url: 'https://www.amazon.com.au/s?k=airtag+key+ring+holder', status: 'placeholder' },
  airtag_luggage: { url: 'https://www.amazon.com.au/s?k=airtag+luggage+holder', status: 'placeholder' },
  airtag_pet_collar: { url: 'https://www.amazon.com.au/s?k=airtag+pet+collar', status: 'placeholder' },
  hidden_bike_tracker: { url: 'https://www.amazon.com.au/s?k=hidden+gps+tracker+bicycle', status: 'placeholder' },
  vehicle_tracker: { url: 'https://www.amazon.com.au/s?k=hidden+gps+tracker+car+australia', status: 'placeholder' },
  power_bank: { url: 'https://www.amazon.com.au/s?k=portable+power+bank+20000mah', status: 'placeholder' },

  // BELLROY — Apply via Rakuten: rakutenadvertising.com
  rfid_wallet: { url: 'https://bellroy.com/collections/rfid-protection', status: 'placeholder' },
  rfid_passport_holder: { url: 'https://bellroy.com/collections/passport-holders', status: 'placeholder' },

  // EUFY — Apply at: eufy.com/affiliate
  eufy_doorbell: { url: 'https://www.eufy.com/collections/video-doorbells', status: 'placeholder' },
  eufy_camera: { url: 'https://www.eufy.com/collections/outdoor-cameras', status: 'placeholder' },

  // SHES BIRDIE — Apply at: shesbirdie.com/pages/ambassador
  safety_alarm: { url: 'https://www.shesbirdie.com', status: 'placeholder' },
}

