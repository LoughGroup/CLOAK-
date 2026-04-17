export interface Story {
  id: string
  initials: string
  firstName: string
  location: string
  state: string
  title: string
  excerpt: string
  outcome: 'recovered' | 'partial' | 'resolved' | 'ongoing'
  daysToResolve?: number
  category: string
  incidentDate: string
  publishedDate: string
  whatHappened: string
  howTheyFelt: string
  whatTheyDid: string[]
  whatWorked: string
  whatTheyWishTheyKnew: string
  relatedGuideSlug: string
}

export const stories: Story[] = [
  {
    id: 'sarah-mygov-2024',
    initials: 'SJ',
    firstName: 'Sarah',
    location: 'Melbourne VIC',
    state: 'VIC',
    title: 'My MyGov was drained in 40 minutes while I was asleep',
    excerpt:
      'A scammer linked their bank account to her MyGov and redirected a $4,200 ATO refund.',
    outcome: 'recovered',
    daysToResolve: 6,
    category: 'Identity theft',
    incidentDate: 'March 2024',
    publishedDate: '2025-01-15',
    whatHappened:
      "Sarah woke up at 6am to three emails from MyGov she hadn't triggered. By the time she opened her phone, a scammer had linked a new bank account to her MyGov profile and redirected her $4,200 ATO tax refund. The attack had taken 40 minutes. Her MyGov password had been obtained through a phishing email she had clicked two weeks earlier — she hadn't realised it was fake.",
    howTheyFelt:
      "I felt completely violated. It wasn't just the money — it was the idea that someone had been inside my government account, changing things, while I was asleep. I didn't know where to start. I didn't even know who owned MyGov. I spent the first two hours just Googling and getting nowhere.",
    whatTheyDid: [
      'Called the ATO fraud line and reported unauthorised changes to her account.',
      'Locked and secured her MyGov access and revoked the linked bank account.',
      'Filed a police report and obtained an event number for agencies.',
      'Contacted IDCARE for structured identity recovery support.',
      'Worked with the ATO fraud team to dispute the refund redirection.',
    ],
    whatWorked:
      "Calling the ATO directly and using the words 'identity fraud' immediately escalated her case. The ATO reversed the redirection within 48 hours once a police event number was provided.",
    whatTheyWishTheyKnew:
      'I wish I had known about IDCARE. They are a free Australian service specifically for identity theft and they walked me through every step. I wasted two days before someone told me they existed.',
    relatedGuideSlug: 'identity-theft',
  },
  {
    id: 'marcus-sim-swap-2024',
    initials: 'MT',
    firstName: 'Marcus',
    location: 'Brisbane QLD',
    state: 'QLD',
    title: 'Someone ported my number and emptied my super account',
    excerpt: 'A SIM swap gave attackers SMS 2FA access. Three accounts were compromised before he noticed.',
    outcome: 'partial',
    daysToResolve: 21,
    category: 'SIM swap',
    incidentDate: 'June 2024',
    publishedDate: '2025-02-03',
    whatHappened:
      "Marcus was at work when his phone lost service. He assumed it was a network issue. By the time he borrowed a colleague's phone to call Optus two hours later, attackers had already used his ported number to receive SMS codes and access his email, superannuation portal, and one savings account. They attempted to withdraw $18,000 from his super — the fund's 3-day processing window was the only thing that stopped it fully clearing.",
    howTheyFelt:
      "Two hours. That's all it took for my entire financial life to be at risk. The scariest part was how calm I had to force myself to be while making calls. I wanted to panic but I knew panicking would slow me down. My hands were shaking the whole time.",
    whatTheyDid: [
      'Called Optus and worked to reverse the unauthorised port.',
      'Called his super fund and asked them to freeze the pending withdrawal.',
      'Changed passwords and recovery options on email and financial accounts.',
      'Filed a police report for the SIM swap and account takeovers.',
      'Reported the incident to Scamwatch.',
    ],
    whatWorked:
      "The superannuation fund's fraud team was excellent once he explained it was a SIM swap. They froze the pending withdrawal immediately. The key phrase was 'SIM swap fraud' — it triggered a different escalation path than a standard dispute.",
    whatTheyWishTheyKnew:
      "SMS two-factor authentication is not safe. I thought having 2FA meant I was protected. I had no idea a SIM swap could bypass it entirely. I've switched everything to an authenticator app now.",
    relatedGuideSlug: 'sim-swap',
  },
  {
    id: 'lisa-passport-barcelona-2024',
    initials: 'LP',
    firstName: 'Lisa',
    location: 'Sydney NSW',
    state: 'NSW',
    title: 'My passport was stolen in Barcelona — getting home took 4 days',
    excerpt:
      'Pickpocketed in Las Ramblas. No passport, no travel insurance details, and a flight home in 36 hours.',
    outcome: 'resolved',
    daysToResolve: 4,
    category: 'Passport theft',
    incidentDate: 'September 2024',
    publishedDate: '2025-02-20',
    whatHappened:
      "Lisa's bag was pickpocketed in Las Ramblas, Barcelona. Her passport, one credit card, and her phone were all taken. She had travel insurance but the policy number was saved on her phone. She had 36 hours before her scheduled flight home. The Australian Consulate in Madrid was the closest Australian diplomatic post — a 6-hour bus journey away.",
    howTheyFelt:
      'I have never felt more helpless in my life. I was in a foreign country, no phone, no ID, no way to prove who I was. A stranger at the hotel let me use their laptop. I was trying to find Australian government phone numbers while shaking and trying not to cry in a hotel lobby.',
    whatTheyDid: [
      "Reported the theft to local police (Mossos d'Esquadra) and obtained a report.",
      'Contacted the Australian Consulate in Madrid by email with her situation.',
      'Applied for an Emergency Travel Document through the consulate process.',
      'Cancelled the stolen card via her bank’s international emergency line.',
      'Reached her insurer through their 24-hour emergency assistance number.',
    ],
    whatWorked:
      'The Australian Consulate was faster than expected. The Emergency Travel Document was ready in 2 business days. The consulate staff were calm and clearly dealt with this regularly — they told her exactly what documents to bring and what the process looked like.',
    whatTheyWishTheyKnew:
      'Write down your travel insurance emergency number and your passport number on paper and keep it somewhere separate from your bag. Not in your phone. Paper. This one change would have saved me 6 hours of stress.',
    relatedGuideSlug: 'passport-stolen',
  },
  {
    id: 'raj-burglary-perth-2024',
    initials: 'RK',
    firstName: 'Raj',
    location: 'Perth WA',
    state: 'WA',
    title: 'Home burglary — laptop, keys, wallet, and passport all gone at once',
    excerpt:
      'A compound incident with 14 separate actions across 5 days. Raj documented every step.',
    outcome: 'resolved',
    daysToResolve: 14,
    category: 'Home burglary',
    incidentDate: 'November 2024',
    publishedDate: '2025-03-10',
    whatHappened:
      "Raj returned from a weekend away to find his back door had been forced. Taken: MacBook Pro with work files, his wallet with all cards and licence, his passport, his car keys (the car was still there — they hadn't found it), and a camera. The total value was over $12,000. The complexity wasn't the financial loss — it was the sheer number of separate systems he had to contact and the order in which to do them.",
    howTheyFelt:
      'The first feeling was shock, then this strange practical mode kicked in. I knew I had to be organised or things would fall through the cracks. I made a spreadsheet. It sounds cold but it was the only way I could cope — turning it into a project I could manage rather than a crisis I was drowning in.',
    whatTheyDid: [
      'Called police immediately and did not touch the scene until advised.',
      'Cancelled all bank and store cards listed in his wallet.',
      'Reported his driver licence to WA Department of Transport.',
      'Cancelled his passport through the passport office process.',
      'Had a locksmith rekey the car without the original keys present.',
      'Notified work IT that the laptop and any sessions may be compromised.',
    ],
    whatWorked:
      'Having one central list of everything that needed to be done and ticking things off. Insurance was straightforward once he had a police event number. The car locksmith was able to come same-day and rekey without the original key present.',
    whatTheyWishTheyKnew:
      'The order matters. I nearly changed my locks before calling police — the locksmith told me to wait until after the forensics visit or it could complicate the insurance claim. Nobody tells you this stuff.',
    relatedGuideSlug: 'wallet-stolen',
  },
]

export function getStoryById(id: string): Story | undefined {
  return stories.find((s) => s.id === id)
}

export function getAllStories(): Story[] {
  return [...stories]
}
