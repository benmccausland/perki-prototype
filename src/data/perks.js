// Placeholder perk data — realistic examples from real subscription partners.
// This will eventually be populated via the Claude API screenshot extraction flow.

export const partners = [
  {
    id: 'monzo',
    name: 'Monzo',
    category: 'Banking',
    perks: [
      {
        id: 'm1',
        title: 'Free coffee at Greggs',
        description: 'One hot drink per week from any Greggs branch.',
        frequency: 'Weekly',
        category: 'Food & drink',
        conditions: 'Monzo Plus & Premium',
        highlight: true,
      },
      {
        id: 'm2',
        title: 'Airport lounge access',
        description: 'Unlimited access to 1,000+ airport lounges worldwide via LoungeKey.',
        frequency: 'Unlimited',
        category: 'Travel',
        conditions: 'Monzo Premium only',
        highlight: false,
      },
    ],
  },
  {
    id: 'vitality',
    name: 'Vitality',
    category: 'Insurance',
    perks: [
      {
        id: 'v1',
        title: 'Free eye test at Specsavers',
        description: 'Annual eye test at any Specsavers branch, fully covered.',
        frequency: 'Annual',
        category: 'Health',
        conditions: 'All members',
        highlight: true,
      },
      {
        id: 'v2',
        title: 'Free cinema ticket at Vue',
        description: 'One free Vue cinema ticket per week when you hit your weekly activity goal.',
        frequency: 'Weekly',
        category: 'Entertainment',
        conditions: 'Silver status or above',
        highlight: false,
      },
      {
        id: 'v3',
        title: '50% off healthy food at Waitrose',
        description: 'Half price on selected healthy food items when you scan your Vitality app.',
        frequency: 'Monthly cap',
        category: 'Food & drink',
        conditions: 'Gold status or above',
        highlight: false,
      },
    ],
  },
  {
    id: 'sky',
    name: 'Sky',
    category: 'Entertainment',
    perks: [
      {
        id: 's1',
        title: 'Sky Go on up to 4 devices',
        description: 'Watch live and on-demand TV on four devices simultaneously.',
        frequency: 'Always on',
        category: 'Streaming',
        conditions: 'All Sky TV subscribers',
        highlight: false,
      },
    ],
  },
  {
    id: 'barclays',
    name: 'Barclays',
    category: 'Banking',
    perks: [
      {
        id: 'b1',
        title: '25% off cinema tickets',
        description: 'Quarter off any cinema ticket at Odeon, Vue, and Cineworld.',
        frequency: 'Unlimited',
        category: 'Entertainment',
        conditions: 'Barclays Premier Banking',
        highlight: true,
      },
      {
        id: 'b2',
        title: 'Worldwide travel insurance',
        description: 'Comprehensive travel insurance for you and your family, globally.',
        frequency: 'Annual',
        category: 'Travel',
        conditions: 'Barclays Premier Banking',
        highlight: false,
      },
    ],
  },
]

// Flat list of all perks, each annotated with its partner name
export const allPerks = partners.flatMap(p =>
  p.perks.map(perk => ({ ...perk, partnerName: p.name, partnerCategory: p.category }))
)

// Highlighted perks — surface on Home (max 4)
export const highlightedPerks = allPerks.filter(p => p.highlight).slice(0, 4)
