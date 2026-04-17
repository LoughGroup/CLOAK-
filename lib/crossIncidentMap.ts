export type CrossIncidentEntry = {
  heading: string
  body: string
  actionLabel?: string
  href?: string
  relatedType?: string
}

export const DEFAULT_CROSS_INCIDENT: CrossIncidentEntry = {
  heading: 'Could Another Incident Have Occurred?',
  body: 'In stressful situations, secondary incidents are common. Review your other assets.',
  actionLabel: 'View All Emergency Guides →',
  href: '/guides',
}

export const CROSS_INCIDENT_MAP: Record<string, CrossIncidentEntry> = {
  phone_theft: {
    heading: 'Could Your Identity Also Be At Risk?',
    body: 'Thieves with your phone can access banking apps, email, and two-factor codes.',
    actionLabel: 'Start Identity Theft Guide →',
    relatedType: 'identity_theft',
  },
  phone_loss: {
    heading: 'Could Your Identity Also Be At Risk?',
    body: 'Thieves with your phone can access banking apps, email, and two-factor codes.',
    actionLabel: 'Start Identity Theft Guide →',
    relatedType: 'identity_theft',
  },
  wallet: {
    heading: 'Could Your Identity Also Be At Risk?',
    body: 'Your cards, licence, and Medicare details can be used to open accounts in your name.',
    actionLabel: 'Start Identity Theft Guide →',
    relatedType: 'identity_theft',
  },
  passport: {
    heading: 'Is Your Identity At Risk?',
    body: 'A stolen passport is one of the most valuable identity documents. Act on this now.',
    actionLabel: 'Start Identity Theft Guide →',
    relatedType: 'identity_theft',
  },
  drivers_licence: {
    heading: 'Could This Become An Identity Issue?',
    body: 'Your licence number and photo can be used to verify identity with banks and services.',
    actionLabel: 'Start Identity Theft Guide →',
    relatedType: 'identity_theft',
  },
  medicare_tfn: {
    heading: 'Is Your MyGov Also At Risk?',
    body: 'Medicare and TFN details give access to your MyGov account and tax records.',
    actionLabel: 'Start MyGov Compromise Guide →',
    relatedType: 'mygov',
  },
  mygov: {
    heading: 'Has Your TFN or Medicare Been Exposed?',
    body: 'MyGov compromise often means someone already has your Medicare or TFN details.',
    actionLabel: 'Start Medicare & TFN Guide →',
    relatedType: 'medicare_tfn',
  },
  house_keys: {
    heading: 'Is Your Home Also Vulnerable?',
    body: 'Lost keys with an address attached mean your home may be at immediate risk.',
    actionLabel: 'Start Home Burglary Guide →',
    relatedType: 'burglary',
  },
  car_keys: {
    heading: 'Is Your Vehicle Also At Risk?',
    body: 'Car keys without your vehicle nearby could mean your car has already been taken.',
    actionLabel: 'Start Vehicle Theft Guide →',
    relatedType: 'vehicle_theft',
  },
  vehicle_theft: {
    heading: 'Were Your Keys or Documents Inside?',
    body: 'If registration papers or a spare key were in the car, additional steps are needed.',
    actionLabel: 'Start Car Keys Guide →',
    relatedType: 'car_keys',
  },
  laptop_device: {
    heading: 'Could Your Accounts Be Compromised?',
    body: 'Unlocked devices give access to saved passwords, email, and banking sessions.',
    actionLabel: 'Start Identity Theft Guide →',
    relatedType: 'identity_theft',
  },
  burglary: {
    heading: 'Were Keys or Documents Taken?',
    body: 'If keys, a passport, or financial documents were stolen, additional recovery is needed.',
    actionLabel: 'Start House Keys Guide →',
    relatedType: 'house_keys',
  },
  identity_theft: {
    heading: 'Has Your MyGov Been Accessed?',
    body: 'Identity theft frequently leads to MyGov compromise and fraudulent tax activity.',
    actionLabel: 'Start MyGov Compromise Guide →',
    relatedType: 'mygov',
  },
  sim_swap: {
    heading: 'Are Your Bank Accounts At Risk?',
    body: 'SIM swap attacks are used to intercept banking one-time codes in real time.',
    actionLabel: 'Start Identity Theft Guide →',
    relatedType: 'identity_theft',
  },
  mail_theft: {
    heading: 'Could Your Identity Be At Risk?',
    body: 'Stolen mail often contains account statements, cards, or verification letters.',
    actionLabel: 'Start Identity Theft Guide →',
    relatedType: 'identity_theft',
  },
  luggage_bags: {
    heading: 'Were Travel Documents Inside?',
    body: 'If your passport or travel cards were in the bag, start those guides immediately.',
    actionLabel: 'Start Passport Guide →',
    relatedType: 'passport',
  },
  travel_overseas: {
    heading: 'Has Your Identity Been Exposed Overseas?',
    body: 'Overseas incidents with documents or cards carry higher identity theft risk.',
    actionLabel: 'Start Identity Theft Guide →',
    relatedType: 'identity_theft',
  },
  pet_lost: {
    heading: 'Have You Registered a Found Report?',
    body: 'Lodging a found report with your state pet registry increases recovery chances significantly.',
  },
  number_plates: {
    heading: 'Is Your Vehicle Being Used Without You?',
    body: 'Stolen plates are often used to disguise a vehicle during other crimes.',
    actionLabel: 'Start Vehicle Theft Guide →',
    relatedType: 'vehicle_theft',
  },
  bicycle: {
    heading: 'Was It Registered?',
    body: 'Registered bikes have a higher recovery rate. File a police report immediately.',
  },
  medical_essentials: {
    heading: 'Do You Need Emergency Prescription Access?',
    body: 'Australian pharmacies can provide emergency supplies with GP confirmation.',
  },
  access_cards: {
    heading: 'Does Your Employer Need To Be Notified?',
    body: 'Lost access cards may need to be reported to building security immediately.',
  },
  work_keys: {
    heading: 'Has Your Employer Been Notified?',
    body: 'Office key loss may require a security lockdown report depending on your workplace policy.',
  },
}

export function getCrossIncidentEntry(key: string | null | undefined): CrossIncidentEntry {
  if (!key) {
    return DEFAULT_CROSS_INCIDENT
  }
  return CROSS_INCIDENT_MAP[key] ?? DEFAULT_CROSS_INCIDENT
}
