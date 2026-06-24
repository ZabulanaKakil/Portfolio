export type JourneyCategory = 'life' | 'education' | 'achievement' | 'job'

export type SectionId = 'info' | 'journey' | 'skills' | 'achievements' | 'contacts'

export interface PersonalSpec {
  label: string
  value: string
}

export interface JourneyEvent {
  year: string
  category: JourneyCategory
  title: string
  detail?: string
}

export interface SkillItem {
  name: string
  rating: number
  detail: string
  tools?: string[]
}

export interface SkillCategory {
  category: string
  items: SkillItem[]
}

export interface Achievement {
  title: string
  date: string
  category: string
  description: string
  image?: string
}

export interface ContactPhoneEntry {
  label: string
  href: string
  copyValue: string
}

export interface ContactLink {
  label: string
  href: string
  copyValue: string
  external?: boolean
  numbers?: ContactPhoneEntry[]
}

export type BioHighlight = 'role' | 'service' | 'tech' | 'value' | 'skill'

export type BioSpan = {
  readonly text: string
  readonly highlight?: BioHighlight
}

export type BioParagraph = readonly BioSpan[]

export const journeyCategoryLabels: Record<JourneyCategory, string> = {
  life: 'Life',
  education: 'Education',
  achievement: 'Achievement',
  job: 'Job',
}

export const portfolio = {
  name: 'Tanvir Nahian Swapnil',
  title: 'Former Army Officer',
  tagline: 'Security & ICT Operations Specialist — leadership forged in service, innovation shared in peace.',
  salutation: 'Assalamu Alaikum',
  bioIntro: [
    { text: 'I am Tanvir Nahian Swapnil — a ' },
    { text: 'commissioned officer', highlight: 'role' },
    { text: ' of the ' },
    { text: 'Bangladesh Army', highlight: 'role' },
    { text: ', retired with honor from the ' },
    { text: 'Corps of Signals', highlight: 'role' },
    { text: ', and a graduate engineer in ' },
    { text: 'Computer Science', highlight: 'tech' },
    { text: '. My service from ' },
    { text: '2020 to 2025', highlight: 'service' },
    {
      text: ' was defined by unwavering dedication to national duty, encompassing critical operations such as ',
    },
    { text: 'electoral security', highlight: 'service' },
    { text: ', ' },
    { text: 'counter-instability missions', highlight: 'service' },
    { text: ' in the hill tracts, ' },
    { text: 'humanitarian coordination', highlight: 'service' },
    { text: ' during the ' },
    { text: 'FDMN crisis', highlight: 'service' },
    { text: ', and response to the ' },
    { text: 'July Carnage', highlight: 'service' },
    {
      text: '. These experiences forged in me a discipline that transcends uniform — a mindset of ',
    },
    { text: 'precision', highlight: 'value' },
    { text: ', ' },
    { text: 'resilience', highlight: 'value' },
    { text: ', and ' },
    { text: 'strategic clarity', highlight: 'value' },
    { text: '.' },
  ] satisfies BioParagraph,
  bioTechnical: [
    {
      text: 'Parallel to my military obligations, I cultivated a deep proficiency in the ',
    },
    { text: 'digital domain', highlight: 'tech' },
    { text: '. From ' },
    { text: 'cybersecurity', highlight: 'tech' },
    { text: ' and ' },
    { text: 'web architecture', highlight: 'tech' },
    { text: ' to ' },
    { text: 'multimedia design', highlight: 'tech' },
    { text: ' and ' },
    { text: 'strategic presentation', highlight: 'tech' },
    {
      text: ', I pursued knowledge relentlessly — often in the quiet hours between deployments. My technical journey is not merely a skillset; it is an extension of my ethos: to ',
    },
    { text: 'adapt', highlight: 'value' },
    { text: ', to ' },
    { text: 'learn', highlight: 'value' },
    { text: ', and to ' },
    { text: 'lead with integrity', highlight: 'value' },
    {
      text: ". Curiosity remains my compass, guiding me to approach every challenge with a learner's spirit and a ",
    },
    { text: "tactician's eye", highlight: 'value' },
    { text: '.' },
  ] satisfies BioParagraph,
  bioClosing: [
    { text: 'Today, I channel my ' },
    { text: 'operational precision', highlight: 'value' },
    { text: ' and ' },
    { text: 'leadership', highlight: 'value' },
    { text: ' into ' },
    { text: 'ICT', highlight: 'tech' },
    { text: ', ' },
    { text: 'web development', highlight: 'tech' },
    { text: ', and ' },
    { text: 'user interface design', highlight: 'tech' },
    {
      text: '. I specialize in building systems that are both ',
    },
    { text: 'secure', highlight: 'tech' },
    {
      text: ' and visually engaging, with a focus on ',
    },
    { text: 'clean architecture', highlight: 'tech' },
    { text: ' and ' },
    { text: 'intuitive design', highlight: 'tech' },
    { text: '. As a ' },
    { text: 'Security & ICT Operations Specialist', highlight: 'skill' },
    { text: ' with over ' },
    { text: 'eight years of leadership experience', highlight: 'value' },
    {
      text: ', I have managed and safeguarded personnel, infrastructure, and data in high-pressure environments. My portfolio reflects this journey — each branch a testament to the ',
    },
    { text: 'life', highlight: 'value' },
    { text: " I've lived, the " },
    { text: 'skills', highlight: 'skill' },
    { text: " I've honed, and the " },
    { text: 'values', highlight: 'value' },
    { text: ' I carry forward.' },
  ] satisfies BioParagraph,
  quote: {
    text: 'All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost.',
    author: 'J.R.R. Tolkien',
  },
  personal: {
    serviceId: 'BA-10481',
    dob: '14 Sep 1998',
    location: 'Dhaka, Bangladesh',
    height: "5'8\"",
    weight: '62 kg',
    maritalStatus: 'Single',
    educationalBackground: 'Science',
    parents: {
      father: 'Md. Abu Sufian',
      mother: 'Tahmina Akter',
    },
    birthPlace: 'P.G. Hospital, Dhaka',
    nameOrigin:
      'Tanvir from Tahmina, Nahian from Sufian, and Swapnil chosen by my grandfather with my mother\'s agreement. My paternal grandfather used to call me Billu.',
    hobbies: ['Web Development', 'Web Surfing', 'Freelancing'],
  },
  education: [
    {
      institution: 'Military Institute of Science and Technology (MIST)',
      location: 'Mirpur, Dhaka',
      degree: 'BSc in Computer Science and Engineering',
      result: 'CGPA 3.39',
      year: '2023',
    },
    {
      institution: 'Signal Training School and Center',
      location: 'Jashore',
      degree: 'Cyber Security Course',
      result: 'Grade A (77%)',
      year: '2023',
    },
    {
      institution: 'Bir Shreshtha Noor Mohammad Public College',
      location: 'Pilkana, Dhaka',
      degree: 'Higher Secondary Certificate (HSC)',
      result: 'GPA 5.00',
      year: '2016',
    },
    {
      institution: 'Ideal School and College',
      location: 'Motijheel, Dhaka',
      degree: 'Secondary School Certificate (SSC)',
      result: 'GPA 5.00',
      year: '2014',
    },
  ],
  skillHighlights: [
    'Cybersecurity & Cyber Auditing',
    'ICT Network Infrastructure',
    'Surveillance Systems (CCTV)',
    'Strategic Operations Planning',
    'Leadership (70–500 personnel)',
    'Microsoft Office Suite',
    'Basic Coding (Java, C++, Web Stack)',
    'Web Development & Online Portals',
  ],
  skillCategories: [
    {
      category: 'IT & Development',
      items: [
        {
          name: 'Website Developer',
          rating: 4.0,
          detail:
            'I build responsive, secure websites and online portals with clean architecture and intuitive user experience, combining my military discipline with modern web technologies.',
          tools: ['PHP', 'HTML', 'CSS', 'JavaScript', 'AJAX', 'MySQL'],
        },
        {
          name: 'App Developer',
          rating: 3.0,
          detail:
            'I can create mobile and desktop applications tailored to user needs with a focus on performance and usability. I created applications with Java during my training at BMA but over the years I have focused more on web development. However, I can restart and relearn quickly since I had the exposure.',
          tools: ['Flutter', 'React Native', 'Android Studio'],
        },
        {
          name: 'Web Security Auditor',
          rating: 3.7,
          detail:
            'Having completed the Cyber Security Course, I have in-depth knowledge of website security and auditing. I perform security audits to identify vulnerabilities and ensure compliance with best practices. During test sessions in Jessore, I conducted a live audit and security check at an Artillery Unit in the Cantonment and identified several vulnerabilities.',
          tools: ['Nmap', 'Wireshark', 'Metasploit'],
        },
        {
          name: 'Network Planner',
          rating: 4.0,
          detail:
            'I design and implement secure ICT networks for field communication, drawing on my Corps of Signals background and hands-on experience deploying networks in operational environments.',
          tools: ['Cisco', 'MikroTik', 'Ubiquiti'],
        },
      ],
    },
    {
      category: 'Design and Application Expertise',
      items: [
        {
          name: 'MS PowerPoint',
          rating: 4.8,
          detail:
            'I have practiced PowerPoint since before my career and have mastered it professionally. I can create presentations in unique styles quickly. I have made presentations for Army Project Study, Jolshiri Housing Limited, Dhaka Ladies Club, Divisional Operation Plan, Chittagong Hill Tracts Special Operations Plan, and many classified unit presentations.',
        },
        {
          name: 'Canva',
          rating: 4.0,
          detail:
            'I create visually appealing designs for social media, presentations, and branding using Canva. I usually prefer MS PowerPoint, but when I need an animated card quickly for birthdays or Eid with free templates, Canva is my go-to.',
        },
        {
          name: 'MS Word',
          rating: 4.2,
          detail:
            'I produce professional documents, reports, and correspondence with advanced formatting, templates, and collaborative editing features.',
        },
        {
          name: 'MS Excel',
          rating: 4.3,
          detail:
            'I manage and analyze data efficiently using Excel\'s advanced features. I created a whole information table of my company\'s soldiers who were present in the unit. Based on variables like leave, posting, and attachments, I automated the total number of present soldiers — highly praised by my seniors. I use macros and charts to make data more appealing.',
        },
      ],
    },
    {
      category: 'Security & Operations',
      items: [
        {
          name: 'CCTV Planner',
          rating: 4.5,
          detail:
            'CCTV is the most common security system for any institution. I completed a CCTV course during my career, making me proficient in handling CCTV-related problems. As an engineer and field officer, I think from the intruder\'s perspective first — finding flaws before fixing them with additional measures like CCTV coverage.',
        },
        {
          name: 'Emergency Security Operations Planner',
          rating: 4.2,
          detail:
            'I create contingency plans for emergency security operations in critical environments. I deliberately planned a hostage rescue exercise on my own accord, showing troops how to rescue hostages in an under-construction building while terrorists were ordered to fire and flee on sight. One of four terrorists escaped, revealing weaknesses that would matter in a real mission — realism is how I treat my career.',
          tools: ['Risk Assessment', 'Rapid Deployment', 'Coordination with Agencies'],
        },
      ],
    },
    {
      category: 'Management and Administration',
      items: [
        {
          name: 'Administrative Manager',
          rating: 4.3,
          detail:
            'I served as adjutant for most of my military career — the most active administrative appointment in a unit. This taught me troops\' psychology and their way of doing tasks. I always found the right person for any task, or personally guided them to ensure smooth results while keeping resources organized to complete administrative work with minimal intervention from authorities.',
          tools: ['Scheduling', 'Resource Allocation', 'Reporting'],
        },
        {
          name: 'Resource Planner',
          rating: 4.0,
          detail:
            'I plan and allocate resources effectively to meet organizational goals. As an administrator I have always checked, restocked, and organized my resources. Future assumptions with multiple contingencies have kept me prepared for dire needs.',
          tools: ['Budget Management', 'Manpower Allocation', 'Timeline Optimization'],
        },
      ],
    },
    {
      category: 'Special Skills',
      items: [
        {
          name: 'Firing',
          rating: 4.5,
          detail:
            'As military personnel, we were trained to fire multiple weapon types. I competed as a best firer and participated in a Divisional Firing competition. Weapons: Assault Rifle (300m day / 100m night), Light Machine Gun (200m / 100m), Sub Machine Gun (200m / 100m), Rocket Launcher (500m day), Pistol (25m day), Grenade (75% accuracy day), Grenade Launcher Rifle (200m day).',
        },
        {
          name: 'Public Speaking',
          rating: 4.0,
          detail:
            'I deliver clear, confident presentations to diverse audiences — from briefing senior officers to addressing troops and civilian stakeholders.',
        },
        {
          name: 'Cultural',
          rating: 4.0,
          detail:
            'As someone from Bangladesh\'s rich cultural heritage, I participate in cultural activities whenever I can. I have no stage fear thanks to countless performances. Skills include drama, acting, and singing in chorus or solo.',
        },
      ],
    },
    {
      category: 'Languages',
      items: [
        {
          name: 'Bangla',
          rating: 5.0,
          detail:
            'As a native speaker, I speak, write, and read fluently with excellent communication skills. I understand most regional accents and can adapt my accent to make conversations more natural.',
        },
        {
          name: 'English',
          rating: 4.7,
          detail:
            'Fluent in English with excellent written and verbal communication skills. I understand most countries\' accents and often speak in a mixed US and British accent.',
        },
        {
          name: 'Hindi',
          rating: 4.0,
          detail:
            'Strong conversational Hindi for everyday communication and understanding media and regional interactions.',
        },
        {
          name: 'Urdu',
          rating: 3.0,
          detail:
            'Basic proficiency in Urdu for conversational purposes. I can listen and understand Urdu most of the time, though conversation with a fluent speaker will be a bit slow.',
        },
      ],
    },
  ] satisfies SkillCategory[],
  journey: [
    {
      year: '1998',
      category: 'life',
      title: 'Birth',
      detail:
        '14 September 1998 — born at P.G. Hospital, Dhaka. Many came to see my first glance. My father Md. Abu Sufian and mother Tahmina Akter welcomed me surrounded by relatives. My name blends both parents\' names: Tanvir from Tahmina, Nahian from Sufian, and Swapnil chosen by my grandfather. My paternal grandfather used to call me Billu.',
    },
    {
      year: '2006',
      category: 'education',
      title: 'Joined Ideal Primary School',
      detail:
        'Joined Ideal Primary School in class 2 directly, skipping class 1 after being taught those subjects at home. Initially roll 55 — second last in class — but quickly rose in academic ranking.',
    },
    { year: '2004', category: 'education', title: 'Elementary School' },
    { year: '2006', category: 'education', title: 'Primary School' },
    { year: '2009', category: 'education', title: 'Graduation from Primary School' },
    {
      year: '2010',
      category: 'achievement',
      title: "President's Scout Award",
      detail: 'Received the President\'s Scout Award for exemplary service and leadership, opening doors to national-level scouting events.',
    },
    {
      year: '2010',
      category: 'achievement',
      title: 'Inter-School Debate Championship',
      detail: 'Won the inter-school debate championship — my first taste of public speaking success.',
    },
    { year: '2016', category: 'achievement', title: 'Higher Secondary Certificate', detail: 'GPA 5.00' },
    { year: '2016', category: 'education', title: 'Graduated from College' },
    { year: '2016', category: 'achievement', title: 'ISSB Selection' },
    { year: '2016', category: 'job', title: 'Joined BMA' },
    { year: '2017', category: 'education', title: 'Started MIST in BMA' },
    { year: '2019', category: 'job', title: 'Commissioned as Army Officer' },
    { year: '2020', category: 'job', title: '11 Signal Battalion' },
    { year: '2020', category: 'education', title: 'Joined MIST in Dhaka' },
    { year: '2020', category: 'life', title: 'Pandemic Covid-19' },
    { year: '2020', category: 'education', title: 'Return to MIST after Lockdown' },
    { year: '2022', category: 'life', title: 'Contracted Covid-19' },
    { year: '2022', category: 'job', title: 'Promoted to Captain' },
    {
      year: '2022',
      category: 'education',
      title: 'Graduated from MIST',
      detail: 'BSc in Computer Science and Engineering, CGPA 3.39',
    },
    { year: '2022', category: 'job', title: 'Returned to 11 Signal Battalion' },
    { year: '2022', category: 'achievement', title: 'Officers Basic Course (Signals) 45' },
    { year: '2022', category: 'life', title: 'Contracted Covid-19 (2nd time)' },
    { year: '2023', category: 'job', title: 'Army Project Study' },
    { year: '2023', category: 'achievement', title: 'Cyber Security Course 2' },
    {
      year: '2023',
      category: 'achievement',
      title: 'Basic Commando Course 73',
      detail: 'School of Infantry and Tactics — 30 August to 5 October 2023. BA-10481 Captain Tanvir Nahian Swapnil.',
    },
    {
      year: '2023',
      category: 'achievement',
      title: "Officers' Weapons Course 107",
      detail: 'School of Infantry and Tactics — 15 October to 30 November 2023. BA-10481 Captain Tanvir Nahian Swapnil.',
    },
    {
      year: '2024',
      category: 'job',
      title: 'Inter Divisional Firing Competition — Team Captain',
    },
    { year: '2024', category: 'job', title: 'Posting to 7 Signal Battalion' },
    { year: '2024', category: 'life', title: 'July–August Political Incident' },
    {
      year: '2024',
      category: 'job',
      title: 'Hill Tracts Deployment',
      detail:
        'Commanded 70 personnel during Operation Utoron in Bandarban, Chittagong Hill Tracts. Served as cybersecurity advisor during sensitive operations, led activities in Cox\'s Bazar and hilly regions, and participated in tactical planning against Kuki-Chin National Army threats.',
    },
    { year: '2025', category: 'job', title: 'Back to 7 Signal Battalion' },
    { year: '2025', category: 'achievement', title: 'Recognition for PowerPoint Design' },
    { year: '2025', category: 'job', title: 'Leaving Army' },
  ] satisfies JourneyEvent[],
  achievements: [
    {
      title: "GOC's Coin of Excellence",
      date: 'CHT Service',
      category: 'Honor',
      description:
        'Awarded for outstanding service in the Chittagong Hill Tracts under 24 Infantry Division.',
      image: 'achievement-images/goc-coin.jpg',
    },
    {
      title: 'Serving with 97 Infantry Brigade',
      date: 'CHT Deployment',
      category: 'Service',
      description:
        'A token memento for serving in the Chittagong Hill Tracts with HQ 97 Infantry Brigade — Southern Shield.',
      image: 'achievement-images/97-inf-bde.jpg',
    },
    {
      title: 'Basic Commando Course 73',
      date: 'Aug – Oct 2023',
      category: 'Military Course',
      description:
        'Successfully completed Basic Commando Course 73 under the School of Infantry and Tactics, Bangladesh Army. BA-10481 Captain Tanvir Nahian Swapnil.',
      image: 'achievement-images/commando-course-73.jpg',
    },
    {
      title: "Officers' Weapons Course 107",
      date: 'Oct – Nov 2023',
      category: 'Military Course',
      description:
        "Successfully completed Officers' Weapons Course 107 under the School of Infantry and Tactics, Bangladesh Army. BA-10481 Captain Tanvir Nahian Swapnil.",
      image: 'achievement-images/weapons-course-107.jpg',
    },
    {
      title: 'Operation Utoron — Bandarban',
      date: '2024',
      category: 'Operations',
      description:
        'Commanded 70 personnel during Operation Utoron in Bandarban, Chittagong Hill Tracts. Designed secure ICT networks and served as cybersecurity advisor in remote operational areas.',
    },
  ] satisfies Achievement[],
  contacts: {
    email: 'officialtanvirnahian@gmail.com',
    phones: ['+8801790136979', '+8801608892998'],
    whatsapp: '+8801790136979',
    location: 'Dhaka, Bangladesh',
    cvUrl: 'https://tanvirnahian.gt.tc/mycv.pdf',
    links: [
      {
        label: 'Email',
        href: 'mailto:officialtanvirnahian@gmail.com',
        copyValue: 'officialtanvirnahian@gmail.com',
      },
      {
        label: 'WhatsApp',
        href: 'https://wa.me/8801790136979',
        copyValue: '+8801790136979',
        external: true,
      },
      {
        label: 'Phone',
        href: 'tel:+8801790136979',
        copyValue: '+8801790136979',
        numbers: [
          {
            label: 'Primary',
            href: 'tel:+8801790136979',
            copyValue: '+8801790136979',
          },
          {
            label: 'Alt',
            href: 'tel:+8801608892998',
            copyValue: '+8801608892998',
          },
        ],
      },
      {
        label: 'Facebook',
        href: 'https://facebook.com/tanvir.nahian.96',
        copyValue: 'facebook.com/tanvir.nahian.96',
        external: true,
      },
      {
        label: 'Instagram',
        href: 'https://instagram.com/tanvirnahian',
        copyValue: 'instagram.com/tanvirnahian',
        external: true,
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/capt-tanvir-nahian',
        copyValue: 'linkedin.com/in/capt-tanvir-nahian',
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/ZabulanaKakil',
        copyValue: 'github.com/ZabulanaKakil',
        external: true,
      },
      {
        label: 'Discord',
        href: 'https://discord.com/users/guavanovitch',
        copyValue: 'guavanovitch',
        external: true,
      },
    ] satisfies ContactLink[],
  },
} as const

export const personalSpecs: PersonalSpec[] = [
  { label: 'Full Name', value: portfolio.name },
  { label: 'Date of Birth', value: portfolio.personal.dob },
  { label: 'Location', value: portfolio.personal.location },
  { label: 'Height', value: portfolio.personal.height },
  { label: 'Weight', value: portfolio.personal.weight },
  { label: 'Marital Status', value: portfolio.personal.maritalStatus },
  { label: 'Educational Background', value: portfolio.personal.educationalBackground },
  {
    label: 'Education',
    value: 'SSC GPA 5.00 · HSC GPA 5.00 · BSc CSE CGPA 3.39',
  },
  { label: 'Languages', value: 'Bangla, English, Hindi, Urdu' },
  { label: 'Hobbies', value: portfolio.personal.hobbies.join(', ') },
]

export const navShortName = 'Tanvir Nahian'

export const sections: { id: SectionId; label: string }[] = [
  { id: 'info', label: 'Info' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contacts', label: 'Contacts' },
]
