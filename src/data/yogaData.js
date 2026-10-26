export const SERVICES_DATA = [
  {
    id: 'asana',
    title: 'Āsana',
    subtitle: 'Physical Postures & Alignment',
    sanskrit: 'आसन',
    tag: 'Foundational & Restorative',
    duration: '60 - 75 min sessions',
    level: 'All Levels (Beginner to Advanced)',
    image: '/images/asana.jpg',
    summary: 'Harmonize body, breath, and awareness through traditional Hatha and gentle Vinyasa sequences designed for sustainable strength and spinal health.',
    details: 'Our Āsana practice emphasizes biomechanical integrity, conscious transitions, and mindful holding rather than performative acrobatics. Each session builds physical longevity, joint mobility, and nervous system regulation.',
    curriculum: [
      'Anatomical alignment & somatic awareness',
      'Gentle joint decompression & restorative posture',
      'Surya Namaskar (Sun Salutation) variations',
      'Therapeutic sequencing for back and hip relief'
    ]
  },
  {
    id: 'pranayama',
    title: 'Prāṇāyāma & Kriyā',
    subtitle: 'Breath Regulation & Cleansing',
    sanskrit: 'प्राणायाम एवं क्रिया',
    tag: 'Vitality & Detoxification',
    duration: '45 - 60 min sessions',
    level: 'Introductory to Intensive',
    image: '/images/pranayama.jpg',
    summary: 'Master sacred yogic breathwork techniques that balance vital prana energy, cleanse subtle channels (nadis), and calm the sympathetic nervous system.',
    details: 'Prāṇāyāma is the gateway between the somatic body and the mental sphere. Through controlled retention, rhythmic purifications, and diaphragmatic retraining, learn to dispel fatigue and activate deep parasympathetic restoration.',
    curriculum: [
      'Nadi Shodhana (Alternate Nostril Purification)',
      'Kapalabhati & gentle Agnisara cleansing',
      'Ujjayi (Ocean Breath) for deep presence',
      'Vagal nerve stimulation and heart-rate coherence'
    ]
  },
  {
    id: 'meditation',
    title: 'Meditation',
    subtitle: 'Dhyāna & Mindfulness Practice',
    sanskrit: 'ध्यान',
    tag: 'Mental Clarity & Stillness',
    duration: '30 - 45 min daily',
    level: 'Accessible to all seekers',
    image: '/images/meditation.jpg',
    summary: 'Cultivate sustained mental stillness, emotional composure, and inner equanimity through classic Dharana (concentration) and Dhyana (contemplation).',
    details: 'Unplug from relentless digital overstimulation. Our guided meditation immersions train you to observe cognitive fluctuations without reactivity, anchoring yourself in effortless presence and serene stillness.',
    curriculum: [
      'Yoga Nidra for deep restorative sleep & reset',
      'Antar Mouna (Inner Silence observation)',
      'Trataka (Visual concentration) for focus',
      'Somatic body scanning & mindful release'
    ]
  },
  {
    id: 'karma-yoga',
    title: 'Karma Yoga Philosophy',
    subtitle: 'Selfless Action & Living Wisdom',
    sanskrit: 'कर्म योग',
    tag: 'Living Wisdom & Integration',
    duration: 'Weekly Discourse & Satsang',
    level: 'Open to everyone',
    image: '/images/karma-yoga.jpg',
    summary: 'Apply eternal yogic philosophy to everyday relationships, professional endeavors, and mindful living through non-attachment and purposeful service.',
    details: 'Yoga is far more than physical movements on a mat—it is an art of conscious living. Dive into discourses from the Bhagavad Gita and Patanjali’s Yoga Sutras to dissolve anxiety around outcomes and live with heartfelt clarity.',
    curriculum: [
      'Action without anxious fixation on reward',
      'Patanjali’s Yamas & Niyamas in modern daily life',
      'Cultivating equanimity amidst life fluctuations',
      'Weekly interactive Q&A satsang community'
    ]
  }
];

export const PRICING_DATA = [
  {
    id: 'starter',
    name: 'Single Program',
    badge: 'Focused Path',
    monthlyPrice: 39,
    annualPrice: 29,
    description: 'Master any one discipline of your choice with live streaming guidance and recordings.',
    features: [
      'Access to 1 complete program of choice',
      '3 live interactive online classes/week',
      'HD class recording vault (7-day archive)',
      'Mobile & desktop streaming portal',
      'Student community discussion access'
    ],
    popular: false
  },
  {
    id: 'holistic',
    name: 'Holistic Sadhana',
    badge: 'Most Popular',
    monthlyPrice: 69,
    annualPrice: 55,
    description: 'Complete immersion spanning Āsana, Prāṇāyāma, Meditation, and Karma Yoga philosophy.',
    features: [
      'Full unrestricted access to all 4 programs',
      'Unlimited live daily classes with senior teachers',
      'Permanent recordings vault & audio practices',
      'Weekly interactive Karma Yoga Satsang Q&A',
      'Personalized monthly alignment assessment',
      'Curated seasonal cleanse & lifestyle guides'
    ],
    popular: true
  },
  {
    id: 'mentorship',
    name: 'Mastery Mentorship',
    badge: 'Personalized',
    monthlyPrice: 139,
    annualPrice: 110,
    description: 'Direct 1-on-1 mentorship, custom posture corrections, and individualized sadhana guidance.',
    features: [
      'Everything included in Holistic Sadhana',
      'Two 45-min 1-on-1 private video consultations/month',
      'Customized therapeutic practice routine',
      'Direct WhatsApp/Email priority mentor access',
      'Certificate of Completion upon milestone review'
    ],
    popular: false
  }
];

export const FAQ_DATA = [
  {
    q: 'I have never practiced yoga before. Is this suitable for beginners?',
    a: 'Absolutely. Every class incorporates progressive modifications. Our teachers provide clear verbal adjustments, props recommendations (such as blankets and blocks), and variations so you build strength safely without injury.'
  },
  {
    q: 'What time are the live classes conducted?',
    a: 'We host live sessions across multiple global time zones (morning sunrise sessions and evening restorative sessions). Additionally, every session is instantly recorded and uploaded to your student portal so you can practice at your convenience.'
  },
  {
    q: 'What equipment do I need at home?',
    a: 'A simple non-slip yoga mat, comfortable breathable clothing, and a quiet space are all you need to begin. A cushion, blanket, or yoga blocks are helpful for restorative and meditation sessions.'
  },
  {
    q: 'Can I switch or cancel my plan at any time?',
    a: 'Yes, absolutely. There are no lock-in contracts or hidden cancellation fees. You can pause, modify, or cancel your subscription anytime directly from your student dashboard.'
  }
];
