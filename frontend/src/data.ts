export const PUBLICATION_SUBTOPICS = [
  { id: 'nlp', label: 'NLP & Reasoning' },
  { id: 'multimodal', label: 'Multimodal AI' },
  { id: 'ai-safety', label: 'AI Safety & Robustness' },
  { id: 'healthcare', label: 'Healthcare AI' },
] as const

export type PublicationSubtopicId = (typeof PUBLICATION_SUBTOPICS)[number]['id']

export type Publication = {
  title: string
  authors: string
  venue: string
  year: number
  summary: string
  tags: string[]
  subtopics: PublicationSubtopicId[]
  links: { label: string; href: string }[]
  image?: string
  imageAlt?: string
  award?: string
}

export type EducationItem = {
  period: string
  school: string
  degree: string
  logo?: string
}

export type InternshipItem = {
  period: string
  org: string
  role: string
  logo?: string
}

export type ProfileLinkVariant = 'scholar' | 'github' | 'cv' | 'email' | 'twitter'

export type ProfileLink = {
  label: string
  href: string
  variant: ProfileLinkVariant
}

export const profile = {
  photo: '/akash.jpeg',
  photoAlt: 'Akash Ghosh',
  name: 'Akash Ghosh',
  role: 'Research Scholar · IIT Patna',
  tagline: 'Natural Language Processing · Multimodal AI · AI Safety · GenAI4Science',
  location: 'Patna, India',
  email: 'akash@iitp.ac.in',
  bio: `Research Scholar at IIT Patna, working on NLP, Multimodal AI, AI Safety, and GenAI for Science. Ex-Visiting Researcher at MBZUAI. Ex-Adobe Research.`,
  contactBlurb: `I'm always happy to discuss research ideas and potential collaborations — feel free to reach out.`,
  links: [
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=NWc6Pw8AAAAJ&hl=en',
      variant: 'scholar',
    },
    { label: 'GitHub', href: 'https://github.com/AkashGhosh', variant: 'github' },
    {
      label: 'CV',
      href: '/akash_cv.pdf',
      variant: 'cv',
    },
    { label: 'Email', href: 'mailto:akash@iitp.ac.in', variant: 'email' },
  ] satisfies ProfileLink[],
}

export const aboutParagraphs = [
  `Hi, I'm Akash Ghosh — a Research Scholar at **IIT Patna**, working at the intersection of Natural Language Processing, Multimodal AI, and AI Safety. I am advised by **Prof. Sriparna Saha** and collaborate closely with **Prof. Chirag Agarwal** (UVA) and **Prof. Xiuying Chen** (MBZUAI).`,
  `I have been a **Visiting Researcher at MBZUAI** and a **Research Intern at Adobe Research**, where I worked on multimodal generation and summarization systems.`,
  `My research spans **hallucination in large foundation models**, **multilingual medical reasoning**, **AI robustness and safety**, and **agentic AI for healthcare**. I build systems and benchmarks that push the frontier of reliable, trustworthy AI — especially in high-stakes domains like clinical decision support.`,
  `My work has been published at top venues including **CVPR**, **ICML**, **ACL**, and **AAAI**, with a total of 619+ citations (h-index: 10).`,
]

export const heroFocus = {
  title: 'Research Statement',
  headline: 'Towards Trustworthy, Multilingual, and Medically-Aware AI Systems',
  intro: {
    preamble: 'I study and build AI systems across a unified research pipeline:',
    pipeline: 'Benchmark Design → Model Development → Safety Evaluation → Real-World Deployment',
    afterPipeline: `My research is driven by the belief that large language and multimodal models, to be truly useful in high-stakes domains, must be **trustworthy, multilingual, and interpretable**. I work on exposing failure modes of current systems — through adversarial attacks, bias audits, and robustness benchmarks — and on building systems that can reason reliably across languages and modalities.`,
  },
  paragraphs: [
    `On the **safety and robustness** side, I investigate how medical vision-language models can be fooled by subtle, clinically-imperceptible perturbations in non-diagnostic image regions (MedFocusLeak, ACL 2026). I also study trustworthiness across healthcare NLP, spanning truthfulness, fairness, privacy, and robustness in multilingual settings (CLINIC, ICML 2026).`,
    `On the **multilingual reasoning** side, I design curricula and training strategies for low-resource languages in medical NLP. CURE-Med (ACL 2026) combines code-switching-aware fine-tuning with group relative policy optimization, achieving strong logical consistency at both 7B and 32B parameter scales across 13 languages.`,
    `On the **agentic AI** side, I build multi-agent frameworks for complex, long-horizon task automation in healthcare software — combining dual memory, actor-critic design, and tool-grounded visual interfaces to automate clinical workflows (CarePilot, CVPR 2026).`,
  ],
}

export const education: EducationItem[] = [
  {
    period: '20XX – Present',
    school: 'Indian Institute of Technology Patna',
    degree: 'Research Scholar · [PLACEHOLDER: add your degree details]',
  },
  {
    period: '20XX – 20XX',
    school: '[PLACEHOLDER: Your undergraduate institution]',
    degree: '[PLACEHOLDER: Your B.Tech / B.Sc degree and branch]',
  },
]

export const internships: InternshipItem[] = [
  { period: '20XX – 20XX', org: 'MBZUAI', role: 'Visiting Researcher' },
  { period: '20XX – 20XX', org: 'Adobe Research', role: 'Research Intern' },
  { period: '20XX', org: '[PLACEHOLDER: Add more experience]', role: '[PLACEHOLDER: Role]' },
]

export const serviceAndTalk = {
  talks: [
    '[PLACEHOLDER: Add any invited talks here]',
  ],
  reviewing: [
    '[PLACEHOLDER: Add conferences / journals you have reviewed for]',
  ],
}

const publicationSourceRaw: Omit<Publication, 'subtopics'>[] = [
  // ── REAL PAPERS ──────────────────────────────────────────────────────────────
  {
    title: 'CLINIC: Evaluating Multilingual Trustworthiness in Language Models for Healthcare',
    authors: 'Akash Ghosh, Srivarshinee Sridhar, Raghav Kaushik Ravi, Muhsin Muhsin, Sriparna Saha, Chirag Agarwal',
    venue: 'ICML 2026',
    year: 2026,
    summary:
      'Introduces CLINIC, a benchmark assessing LM reliability across healthcare applications in 15 languages. Evaluates five trustworthiness dimensions — truthfulness, fairness, safety, robustness, and privacy — across 18 tasks covering diseases, treatments, medications, and diagnostics. Reveals that LMs struggle with factual correctness, exhibit demographic and linguistic biases, and are susceptible to adversarial attacks and privacy breaches.',
    tags: ['Benchmark', 'Trustworthiness', 'Multilingual', 'Healthcare'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2512.11437' },
    ],
    award: 'ICML 2026',
  },
  {
    title: 'When Background Matters: Breaking Medical Vision Language Models by Transferable Attack',
    authors: 'Akash Ghosh, Subhadip Baidya, Sriparna Saha, Xiuying Chen',
    venue: 'ACL 2026',
    year: 2026,
    summary:
      'Introduces MedFocusLeak, a black-box multimodal adversarial attack that injects coordinated perturbations into non-diagnostic background regions of medical images. The attack redirects model attention away from pathological areas, generating misleading yet clinically realistic diagnostic outputs across six imaging modalities — all while remaining imperceptible to clinicians.',
    tags: ['Adversarial Attack', 'Medical AI', 'Vision-Language Models', 'Robustness'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2604.17318' },
    ],
    award: 'ACL 2026',
  },
  {
    title: 'CURE-Med: Curriculum-Informed Reinforcement Learning for Multilingual Medical Reasoning',
    authors: 'Eric Onyame, Akash Ghosh, Subhadip Baidya, Sriparna Saha, Xiuying Chen, Chirag Agarwal',
    venue: 'ACL 2026',
    year: 2026,
    summary:
      'Addresses limitations in multilingual medical reasoning by introducing CUREMED-BENCH, a dataset spanning 13 languages including underrepresented ones. Develops CURE-MED combining code-switching-aware fine-tuning with Group Relative Policy Optimization, achieving 85.21% language consistency and 54.35% logical correctness at 7B parameters, and 94.96% language consistency at 32B parameters.',
    tags: ['Multilingual', 'Medical NLP', 'Reinforcement Learning', 'Reasoning'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2601.13262' },
      { label: 'Project', href: 'https://cure-med.github.io/' },
    ],
    award: 'ACL 2026',
  },
  {
    title: 'CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare',
    authors: 'Akash Ghosh, Tajamul Ashraf, Rishu Kumar Singh, Numan Saeed, Sriparna Saha, Xiuying Chen, Salman Khan',
    venue: 'CVPR 2026',
    year: 2026,
    summary:
      'Proposes CarePilot, an actor-critic multi-agent framework with dual memory (long-term and short-term experience) for complex, long-horizon GUI automation across healthcare software — DICOM viewers, EHR systems, and lab information platforms. Introduces CareFlow, an expert-annotated benchmark of real clinical workflows. Outperforms comparable systems by ~15% on the custom benchmark.',
    tags: ['Agentic AI', 'Healthcare', 'Computer Vision', 'Multimodal'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2603.24157' },
      { label: 'Code', href: 'https://github.com/AkashGhosh/CarePilot' },
    ],
    award: 'CVPR 2026',
  },
  {
    title: 'CLIPSyntel: CLIP and LLM Synergy for Multimodal Question Summarization in Healthcare',
    authors: '[PLACEHOLDER: Add full author list]',
    venue: 'AAAI 2024',
    year: 2024,
    summary:
      '[PLACEHOLDER: Add summary. From Google Scholar — 80 citations as of 2026. Combines CLIP and LLM for multimodal question summarization in clinical/healthcare settings.]',
    tags: ['Multimodal', 'Healthcare', 'Summarization', 'LLM'],
    links: [
      { label: 'Code', href: 'https://github.com/AkashGhosh/CLIPSyntel-AAAI2024' },
    ],
    award: 'AAAI 2024',
  },
  // ── PLACEHOLDERS — fill in with your remaining papers ────────────────────────
  {
    title: '[PLACEHOLDER] A Comprehensive Survey of Hallucination in Large Foundation Models',
    authors: '[PLACEHOLDER: Add full author list]',
    venue: '[PLACEHOLDER: Add venue — e.g. arXiv 2024]',
    year: 2024,
    summary:
      '[PLACEHOLDER: Add summary. From Google Scholar — 175 citations as of 2026. Comprehensive survey covering hallucination in large language, image, video and audio foundation models.]',
    tags: ['Survey', 'Hallucination', 'Foundation Models'],
    links: [],
  },
  {
    title: '[PLACEHOLDER] Exploring the Frontier of Vision-Language Models: A Survey',
    authors: '[PLACEHOLDER: Add full author list]',
    venue: '[PLACEHOLDER: Add venue — e.g. arXiv 2024]',
    year: 2024,
    summary:
      '[PLACEHOLDER: Add summary. From Google Scholar — 159 citations as of 2026. Survey of current methodologies and future directions for vision-language models.]',
    tags: ['Survey', 'Vision-Language Models'],
    links: [],
  },
]

const publicationSubtopicsByTitle: Record<string, PublicationSubtopicId[]> = {
  'CLINIC: Evaluating Multilingual Trustworthiness in Language Models for Healthcare': ['ai-safety', 'healthcare', 'nlp'],
  'When Background Matters: Breaking Medical Vision Language Models by Transferable Attack': ['ai-safety', 'healthcare', 'multimodal'],
  'CURE-Med: Curriculum-Informed Reinforcement Learning for Multilingual Medical Reasoning': ['nlp', 'healthcare'],
  'CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare': ['multimodal', 'healthcare'],
  'CLIPSyntel: CLIP and LLM Synergy for Multimodal Question Summarization in Healthcare': ['multimodal', 'healthcare', 'nlp'],
  '[PLACEHOLDER] A Comprehensive Survey of Hallucination in Large Foundation Models': ['nlp', 'ai-safety'],
  '[PLACEHOLDER] Exploring the Frontier of Vision-Language Models: A Survey': ['multimodal', 'nlp'],
}

const publicationSource: Publication[] = publicationSourceRaw.map((p) => {
  const subtopics = publicationSubtopicsByTitle[p.title]
  if (!subtopics?.length) throw new Error(`Missing publication subtopics: ${p.title}`)
  return { ...p, subtopics }
})

export const allPublications: Publication[] = [...publicationSource].sort((a, b) => {
  if (b.year !== a.year) return b.year - a.year
  return a.title.localeCompare(b.title)
})

const SELECTED_WORK_TITLES = [
  'CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare',
  'CLINIC: Evaluating Multilingual Trustworthiness in Language Models for Healthcare',
  'When Background Matters: Breaking Medical Vision Language Models by Transferable Attack',
  'CURE-Med: Curriculum-Informed Reinforcement Learning for Multilingual Medical Reasoning',
] as const

export const selectedPublications: Publication[] = SELECTED_WORK_TITLES.map((title) => {
  const found = publicationSource.find((p) => p.title === title)
  if (!found) throw new Error(`Missing publication for selected work: ${title}`)
  return found
})

export type NewsItem = {
  date: string
  venue?: string
  text: string
}

export const news: NewsItem[] = [
  { date: '2026.04', venue: 'CVPR 2026', text: 'CarePilot accepted.' },
  { date: '2026.04', venue: 'ACL 2026', text: '2 papers accepted (MedFocusLeak, CURE-Med).' },
  { date: '2026.04', venue: 'ICML 2026', text: 'CLINIC accepted.' },
  { date: '2024.02', venue: 'AAAI 2024', text: 'CLIPSyntel accepted.' },
  { date: '20XX.XX', venue: 'MBZUAI', text: '[PLACEHOLDER] Joined as Visiting Researcher.' },
  { date: '20XX.XX', venue: 'Adobe Research', text: '[PLACEHOLDER] Research internship.' },
  { date: '20XX.XX', venue: '[PLACEHOLDER]', text: 'Add more news items here.' },
]
