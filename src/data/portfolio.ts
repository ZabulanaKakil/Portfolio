export const portfolio = {
  name: 'Capt Nahian (retd)',
  tagline: 'Leadership forged in service, wisdom shared in peace.',
  bio: `A retired Captain with decades of distinguished military service, Capt Nahian brings strategic leadership, operational excellence, and a steadfast commitment to mentorship. From commanding units in challenging theaters to advising on defense policy, his career reflects discipline, integrity, and dedication to those who serve.`,
  skills: [
    'Strategic Leadership',
    'Operational Planning',
    'Crisis Management',
    'Team Building',
    'Defense Policy',
    'Training & Mentorship',
    'Logistics',
    'Cross-functional Coordination',
  ],
  journey: [
    {
      year: '1988',
      role: 'Commissioned Officer',
      org: 'National Defense Academy',
      description:
        'Graduated with honors and commissioned as Second Lieutenant, beginning a career defined by service and excellence.',
    },
    {
      year: '1995',
      role: 'Company Commander',
      org: 'Infantry Battalion',
      description:
        'Led a rifle company through multiple deployments, earning recognition for tactical proficiency and troop welfare.',
    },
    {
      year: '2004',
      role: 'Staff Officer',
      org: 'Division Headquarters',
      description:
        'Advised senior leadership on operational planning, logistics coordination, and inter-unit communication.',
    },
    {
      year: '2012',
      role: 'Battalion Commander',
      org: 'Special Operations Unit',
      description:
        'Commanded a battalion in high-readiness operations, implementing training reforms that raised readiness scores by 30%.',
    },
    {
      year: '2018',
      role: 'Senior Advisor',
      org: 'Ministry of Defense',
      description:
        'Contributed to defense modernization initiatives and veteran transition programs at the national level.',
    },
    {
      year: '2023',
      role: 'Retired Captain',
      org: 'Honorable Discharge',
      description:
        'Retired after 35 years of service. Now mentors young officers and supports veteran community initiatives.',
    },
  ],
  achievements: [
    {
      title: 'Meritorious Service Medal',
      date: '2010',
      category: 'Honor',
      description:
        'Awarded for exceptional leadership during a critical peacekeeping deployment under adverse conditions.',
    },
    {
      title: 'Command Excellence Award',
      date: '2014',
      category: 'Leadership',
      description:
        'Recognized for transforming battalion readiness and fostering a culture of accountability and innovation.',
    },
    {
      title: 'Defense Innovation Fellowship',
      date: '2017',
      category: 'Innovation',
      description:
        'Selected to advise on integrating modern technology into traditional military training curricula.',
    },
    {
      title: 'Veteran Mentorship Program',
      date: '2024',
      category: 'Community',
      description:
        'Founded a mentorship network connecting retired officers with cadets and junior leaders nationwide.',
    },
  ],
  contacts: {
    email: 'capt.nahian@example.com',
    github: 'https://github.com/ZabulanaKakil',
    linkedin: 'https://linkedin.com/in/capt-nahian',
    location: 'Dhaka, Bangladesh',
  },
} as const

export type SectionId = 'info' | 'journey' | 'achievements' | 'contacts'

export const sections: { id: SectionId; label: string }[] = [
  { id: 'info', label: 'Info' },
  { id: 'journey', label: 'Journey' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contacts', label: 'Contacts' },
]
