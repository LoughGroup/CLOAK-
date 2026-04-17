// Maps common search terms and natural language phrases to guide slugs
export const searchAliases: Record<string, string[]> = {
  // Phone
  'phone-stolen': [
    'phone',
    'mobile',
    'iphone',
    'android',
    'smartphone',
    'stolen phone',
    'mugged',
    'grabbed',
    'snatched',
    'pickpocket',
    'rob',
    'robbed',
    'theft',
  ],
  'phone-lost': [
    'lost phone',
    'cant find phone',
    'missing phone',
    'dropped phone',
    'left phone',
  ],
  'sim-swap': [
    'sim swap',
    'sim',
    'ported',
    'number stolen',
    'phone number',
    'hacked phone',
    'sms codes',
    'two factor',
    '2fa',
  ],

  // Wallet and cards
  'wallet-stolen': [
    'wallet',
    'purse',
    'cards',
    'cash',
    'bank card',
    'credit card',
    'debit card',
    'stolen wallet',
    'lost wallet',
    'pickpocketed',
  ],

  // Identity
  'identity-theft': [
    'identity',
    'identity theft',
    'id theft',
    'fraud',
    'scam',
    'scammed',
    'hacked',
    'compromised',
    'stolen identity',
    'fake account',
    'impersonation',
  ],
  'mygov-compromised': [
    'mygov',
    'my gov',
    'centrelink',
    'ato',
    'tax',
    'medicare hacked',
    'government account',
    'services australia',
  ],
  'medicare-tfn-stolen': [
    'medicare',
    'tfn',
    'tax file number',
    'health card',
    'bulk billing',
    'medicare card',
  ],

  // Documents
  'passport-stolen': [
    'passport',
    'travel document',
    'overseas id',
    'international travel',
    'border',
  ],
  'drivers-licence-stolen': [
    'licence',
    'license',
    'drivers licence',
    'driver license',
    'id card',
    'proof of age',
  ],

  // Keys
  'house-keys-lost': [
    'house keys',
    'home keys',
    'keys',
    'locked out',
    'lost keys',
    'key',
    'front door',
    'deadlock',
    'locksmith',
  ],
  'car-keys-lost': [
    'car keys',
    'car key',
    'vehicle key',
    'key fob',
    'remote key',
    'keyless',
    'lost car key',
  ],
  'work-keys-lost': [
    'work keys',
    'office keys',
    'office key',
    'workplace keys',
    'work access',
  ],

  // Vehicle
  'vehicle-stolen': [
    'car stolen',
    'car theft',
    'vehicle stolen',
    'stolen car',
    'truck stolen',
    'motorbike stolen',
    'ute stolen',
  ],
  'number-plates-stolen': [
    'number plates',
    'plates',
    'rego plates',
    'registration plates',
    'stolen plates',
  ],

  // Devices
  'laptop-stolen': [
    'laptop',
    'computer',
    'macbook',
    'work laptop',
    'tablet',
    'ipad',
    'surface',
    'device',
    'stolen laptop',
  ],

  // Home
  'home-burglary': [
    'burglary',
    'break in',
    'broken into',
    'home invasion',
    'robbery',
    'house robbed',
    'intruder',
    'burglar',
    'ransacked',
  ],

  // Mail
  'mail-theft': [
    'mail',
    'parcel',
    'package',
    'stolen parcel',
    'mailbox',
    'australia post',
    'delivery stolen',
    'letter',
  ],

  // Pet
  'pet-lost': [
    'pet',
    'dog',
    'cat',
    'puppy',
    'kitten',
    'animal',
    'lost dog',
    'lost cat',
    'missing dog',
    'missing cat',
    'stolen dog',
    'escaped',
    'run away',
    'dog lost',
    'cat lost',
  ],

  // Bicycle
  'bicycle-stolen': [
    'bike',
    'bicycle',
    'ebike',
    'e-bike',
    'electric bike',
    'pushbike',
    'stolen bike',
    'cycling',
  ],

  // Travel
  'travel-overseas-incident': [
    'overseas',
    'travel',
    'holiday',
    'abroad',
    'international',
    'airport',
    'foreign country',
    'lost overseas',
    'europe',
    'asia',
    'bali',
    'uk',
  ],
  'luggage-lost': [
    'luggage',
    'bag',
    'suitcase',
    'backpack',
    'handbag',
    'stolen bag',
    'lost luggage',
    'airport bag',
    'baggage',
  ],

  // Access
  'access-cards-lost': [
    'access card',
    'swipe card',
    'fob',
    'key card',
    'building access',
    'security card',
    'tap card',
  ],

  // Medical
  'medical-essentials-lost': [
    'medication',
    'medicine',
    'prescription',
    'insulin',
    'epipen',
    'medical',
    'scripts',
    'pharmacy',
  ],

  // Recovery
  'found-later': [
    'found',
    'recovered',
    'got it back',
    'returned',
    'item found',
    'close case',
  ],
  'compound-incident': [
    'multiple',
    'everything stolen',
    'everything lost',
    'everything gone',
    'bag and phone',
    'wallet and phone',
    'lost everything',
    'whole bag',
    'compound',
  ],
}
