export type TriageStep = {
  id: string
  title: string
  description: string
  urgency: 'critical' | 'important' | 'recovery'
  triggerAssets: string[]
  actionLabel?: string
  actionUrl?: string
}

export const triageSteps: TriageStep[] = [
  // CRITICAL — do in minutes
  {
    id: 'block_sim',
    title: 'Block Your SIM',
    urgency: 'critical',
    triggerAssets: ['phone'],
    description:
      'Call your carrier to block your SIM immediately. Thieves can intercept SMS codes while your SIM is active.',
    actionLabel: 'Telstra 13 22 00 · Optus 1300 300 937 · Vodafone 1300 650 410',
  },
  {
    id: 'remote_wipe',
    title: 'Remotely Wipe Your Phone',
    urgency: 'critical',
    triggerAssets: ['phone'],
    description:
      'Use iCloud.com/find (iPhone) or account.microsoft.com (Android) to lock or erase the device immediately.',
    actionLabel: 'iCloud Find My →',
    actionUrl: 'https://icloud.com/find',
  },
  {
    id: 'cancel_cards',
    title: 'Cancel All Bank Cards',
    urgency: 'critical',
    triggerAssets: ['wallet', 'cards'],
    description: 'Call each bank immediately to cancel cards and request replacements. Do not wait.',
  },
  {
    id: 'lock_banking_apps',
    title: 'Lock Your Banking Apps',
    urgency: 'critical',
    triggerAssets: ['phone', 'laptop'],
    description:
      'Log in from another device and freeze or lock your accounts. Most Australian banks support this in-app or by phone.',
  },
  {
    id: 'change_email_password',
    title: 'Change Your Email Password',
    urgency: 'critical',
    triggerAssets: ['phone', 'laptop', 'mygov'],
    description:
      'Your email controls password resets for everything else. Change it from a trusted device immediately.',
  },
  {
    id: 'rekey_locks',
    title: 'Rekey Your Locks Immediately',
    urgency: 'critical',
    triggerAssets: ['house_keys'],
    description:
      'Call a licensed locksmith now. If your address was on the keys or nearby, your home is at immediate risk.',
  },
  {
    id: 'confirm_car_safe',
    title: 'Confirm Your Vehicle Is Safe',
    urgency: 'critical',
    triggerAssets: ['car_keys', 'vehicle'],
    description: 'Check that your vehicle has not been taken. If it has, call 000 immediately.',
  },
  {
    id: 'call_police_vehicle',
    title: 'Call Police — Vehicle Stolen',
    urgency: 'critical',
    triggerAssets: ['vehicle'],
    description: 'Call 000 if the theft just occurred. Otherwise call 131 444 or report online.',
    actionLabel: 'Police Assistance Line: 131 444',
  },
  {
    id: 'contact_carrier_sim_swap',
    title: 'Reverse The Unauthorised Port',
    urgency: 'critical',
    triggerAssets: ['phone'],
    description:
      'If your number was ported without permission, call your carrier from another phone immediately to reverse it.',
  },
  {
    id: 'mygov_password',
    title: 'Change Your MyGov Password',
    urgency: 'critical',
    triggerAssets: ['mygov', 'phone', 'laptop'],
    description:
      'Log in at my.gov.au from a trusted device and change your password immediately. Enable stronger sign-in options.',
    actionLabel: 'my.gov.au →',
    actionUrl: 'https://my.gov.au',
  },

  // IMPORTANT — do today
  {
    id: 'report_police',
    title: 'Report To Police',
    urgency: 'important',
    triggerAssets: ['phone', 'wallet', 'passport', 'licence', 'laptop', 'vehicle', 'bicycle', 'luggage'],
    description:
      'File a police report online or call 131 444. You will need the reference number for insurance and government replacement applications.',
    actionLabel: 'Report online at police.nsw.gov.au or your state equivalent',
  },
  {
    id: 'report_passport',
    title: 'Report Passport Stolen',
    urgency: 'important',
    triggerAssets: ['passport'],
    description:
      'Report to the Australian Passport Office immediately to flag the passport as stolen in the international system.',
    actionLabel: 'Australian Passport Office: 131 232',
  },
  {
    id: 'report_licence',
    title: 'Report Licence To Roads Authority',
    urgency: 'important',
    triggerAssets: ['licence'],
    description:
      'Report to your state roads authority (Service NSW, VicRoads, TMR etc.) to cancel and replace your licence.',
  },
  {
    id: 'report_medicare',
    title: 'Report Medicare Card To Services Australia',
    urgency: 'important',
    triggerAssets: ['medicare'],
    description: 'Call Services Australia to cancel your Medicare card number and issue a new one.',
    actionLabel: 'Services Australia: 132 011',
  },
  {
    id: 'report_tfn',
    title: 'Report TFN Theft To ATO',
    urgency: 'important',
    triggerAssets: ['tfn'],
    description:
      'Call the ATO to place a fraud alert on your TFN and confirm no unauthorised lodgements have been made.',
    actionLabel: 'ATO: 132 861',
  },
  {
    id: 'contact_idcare',
    title: 'Contact IDCARE',
    urgency: 'important',
    triggerAssets: ['passport', 'licence', 'medicare', 'tfn', 'mygov', 'wallet'],
    description:
      "IDCARE is Australia's national identity and cyber support service. Free, expert help for identity theft and document compromise.",
    actionLabel: 'IDCARE: 1800 595 160',
  },
  {
    id: 'notify_insurer',
    title: 'Notify Your Insurer',
    urgency: 'important',
    triggerAssets: ['phone', 'vehicle', 'laptop', 'luggage', 'jewellery', 'bicycle'],
    description:
      'Contact your home and contents or device insurer to lodge a claim. Have your police reference number ready.',
  },
  {
    id: 'deactivate_access_card',
    title: 'Deactivate Access Card',
    urgency: 'important',
    triggerAssets: ['access_card', 'work_keys'],
    description: "Contact building management or your employer's security desk to deactivate the card immediately.",
  },
  {
    id: 'check_mygov_services',
    title: 'Check MyGov Linked Services',
    urgency: 'important',
    triggerAssets: ['mygov', 'medicare', 'tfn'],
    description: 'Log in to MyGov and check ATO, Medicare, and Centrelink for any unauthorised changes or access.',
  },
  {
    id: 'pet_report',
    title: 'Report To Council And Pet Registry',
    urgency: 'important',
    triggerAssets: ['pet'],
    description:
      'Contact your local council ranger and lodge a found report with your state pet registry. Confirm microchip details are current.',
  },
  {
    id: 'report_plates',
    title: 'Report Plates To Police And Roads Authority',
    urgency: 'important',
    triggerAssets: ['plates'],
    description:
      'Stolen plates are often used to disguise vehicles in crimes. Report to police and your state roads authority for replacement.',
  },

  // RECOVERY — this week and ongoing
  {
    id: 'credit_alert',
    title: 'Place A Credit Alert',
    urgency: 'recovery',
    triggerAssets: ['wallet', 'passport', 'licence', 'medicare', 'tfn', 'mygov'],
    description:
      'Contact all three credit bureaus to place an alert. This prevents new credit being issued in your name without extra verification.',
    actionLabel: 'Equifax 138 332 · Experian 1300 783 684 · illion 132 333',
  },
  {
    id: 'replace_passport',
    title: 'Apply For A Replacement Passport',
    urgency: 'recovery',
    triggerAssets: ['passport'],
    description:
      'Apply at an Australia Post passport facility or Australian Passport Office with your police report and supporting documents.',
    actionLabel: 'passports.gov.au →',
    actionUrl: 'https://www.passports.gov.au',
  },
  {
    id: 'replace_medicare_card',
    title: 'Get A New Medicare Card',
    urgency: 'recovery',
    triggerAssets: ['medicare'],
    description: 'Request a replacement through MyGov or by visiting a Services Australia service centre.',
    actionLabel: 'my.gov.au →',
    actionUrl: 'https://my.gov.au',
  },
  {
    id: 'monitor_accounts',
    title: 'Monitor Accounts For 90 Days',
    urgency: 'recovery',
    triggerAssets: ['wallet', 'cards', 'passport', 'licence', 'medicare', 'tfn', 'mygov'],
    description:
      'Review bank statements, credit reports, and MyGov weekly for 90 days. Report anything suspicious to IDCARE or your bank immediately.',
  },
  {
    id: 'update_passwords',
    title: 'Update All Passwords',
    urgency: 'recovery',
    triggerAssets: ['phone', 'laptop', 'mygov'],
    description:
      'Work through your accounts systematically. Use a password manager. Enable two-factor authentication on every account that supports it.',
  },
  {
    id: 'replace_keys',
    title: 'Get Replacement Keys Cut',
    urgency: 'recovery',
    triggerAssets: ['house_keys', 'car_keys', 'work_keys'],
    description:
      'Arrange replacement keys after locks have been rekeyed or replaced. Do not cut copies from the old key if locks were compromised.',
  },
  {
    id: 'scamwatch_report',
    title: 'Report To Scamwatch',
    urgency: 'recovery',
    triggerAssets: ['wallet', 'cards', 'mygov', 'medicare', 'tfn'],
    description: 'Lodge a report at Scamwatch to help warn others and track fraud trends in Australia.',
    actionLabel: 'scamwatch.gov.au →',
    actionUrl: 'https://www.scamwatch.gov.au',
  },
  {
    id: 'pet_search_ongoing',
    title: 'Continue Active Search',
    urgency: 'recovery',
    triggerAssets: ['pet'],
    description:
      'Post in local Facebook groups, check Lost Pet Finders Australia daily, and contact nearby vets and shelters every 48 hours.',
  },
  {
    id: 'bike_search',
    title: 'Search Resale Channels',
    urgency: 'recovery',
    triggerAssets: ['bicycle'],
    description:
      'Check Facebook Marketplace, Gumtree, and eBay daily for your bike. Save screenshots and report suspicious listings to police.',
  },
]

