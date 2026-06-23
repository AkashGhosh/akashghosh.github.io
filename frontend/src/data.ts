export type BioInst = { name: string; logo?: string }
export type BioParagraph = (string | BioInst)[]

export const PUBLICATION_SUBTOPICS = [
  { id: 'multimodal-understanding', label: 'Multimodal Understanding' },
  { id: 'representation-learning', label: 'Representation Learning' },
  { id: 'generation-world-model', label: 'Generation and World Model' },
  { id: 'benchmark', label: 'Benchmark' },
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

export type ProfileLinkVariant = 'scholar' | 'github' | 'cv' | 'email' | 'twitter' | 'linkedin'

export type ProfileLink = {
  label: string
  href: string
  variant: ProfileLinkVariant
}

export const profile = {
  photo: '/profile_photo.jpeg',
  photoAlt: 'Akash Ghosh',
  name: 'Akash Ghosh',
  role: 'PHD Researcher at Indian Institute of Technology, Patna',
  location: 'Patna, India',
  email: 'akashghosh.ag90@gmail.com',
  bio: [
    [
      `Hello/নমস্কার/Hola/नमस्ते! Thanks for stopping by. I am Akash, a third-year PhD Research Scholar at `,
      { name: 'Indian Institute of Technology, Patna', logo: '/logos/iit_patna.png' },
      `, working with Prof. Sriparna Saha. I am currently a Research Assistant in a project funded by the Gates Foundation, in collaboration with `,
      { name: 'Microsoft Research India', logo: '/logos/msr.png' },
      ` and `,
      { name: 'KCDH-A', logo: '/logos/ashoka.png' },
      `. I am also a Remote Research Intern at `,
      { name: 'University of Virginia', logo: '/logos/uva.png' },
      `. Previously, I was a Visiting Researcher at `,
      { name: 'MBZUAI, Abu Dhabi', logo: '/logos/mbzuai.png' },
      ` and a Research Intern at `,
      { name: 'Adobe Research', logo: '/logos/adobe.png' },
      `.`,
    ],
    [
      `My research interests lie at the crossroads of Natural Language Processing, Multimodal AI, and AI Safety and Reasoning. I am particularly interested in developing safe, robust, and reasoning-aware AI systems for high-stakes scientific and social good applications.`,
    ],
    [
      `My first-authored work has been published at top-tier CS venues, including ICML, CVPR, ACL (Oral), EMNLP (Oral), AAAI, IJCAI, ECIR, ACM Health, and WIREs KDD.`,
    ],
  ] satisfies BioParagraph[],

  contactBlurb: `I'm always happy to share ideas, discussion, and collaboration with people from diverse backgrounds — feel free to reach out.`,
  links: [
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=NWc6Pw8AAAAJ&hl=en',
      variant: 'scholar',
    },
    { label: 'GitHub', href: 'https://github.com/AkashGhosh', variant: 'github' },
    {
      label: 'CV',
      href: 'https://drive.google.com/file/d/1AXqC8UvGvhttWgS29wCXPBrXq4VftkNg/view?usp=sharing',
      variant: 'cv',
    },
    { label: 'Email', href: 'mailto:akashghosh.ag90@gmail.com', variant: 'email' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akash-ghosh-4b199811a/', variant: 'linkedin' },
  ] satisfies ProfileLink[],
}

/** Statement: sparse `**idea**` + `[[Paper]]` for abbreviations. */
export const heroFocus = {
  title: 'Current Research statement',
  headline: 'Towards Trustworthy, Grounded, and Reasoning-Capable AI for Science and Social Good',
  intro: {
    preamble: 'My research revolves around one central question:',
    pipeline: 'Can AI be simultaneously capable, safe, robust, and equitable in high-stakes scientific and social good settings like healthcare?',
    afterPipeline: `I pursue this across four tightly coupled threads — **grounded generation**, **safety**, **complex reasoning**, and **evaluation** — with a sustained focus on medical AI and underserved multilingual communities, where the cost of model failure is highest and the need for trustworthy systems is most urgent.`,
  },
  paragraphs: [
    `**Grounded Multimodal Clinical Generation.** Medical data is inherently heterogeneous — clinical notes, radiology scans, code-mixed dialogues, and medical images coexist across real-world settings. I build vision-language frameworks that generate **structured, clinically grounded outputs** from this complexity, reliably incorporating signals from complementary modalities. [[CLIPSyntel]] synergises CLIP and LLMs for more grounded multimodal healthcare question summarization, leveraging CLIP's capacity for medical disorder identification and weaving those complementary visual signals into the final textual generation. [[MedSumm]] produces an end-to-end framework with a corresponding dataset for high-quality grounded multimodal summaries, using QLoRA-based alignment to efficiently integrate visual and textual clinical evidence. [[From Sights to Insights]] employs improved contextual attention in both encoder and decoder for stronger multimodal alignment during generation. [[HealthAlignSumm]] uses alignment objectives to faithfully condense code-mixed patient–doctor dialogues into clinically coherent summaries.`,
    `**Trustworthy and Safe AI.** Generative capability without safety guarantees is particularly dangerous in clinical settings. [[RADO]] frames radiology impression generation as a **safety- and faithfulness-constrained preference optimization** problem, directly suppressing hallucinations in AI-generated clinical impressions. [[When Background Matters]] exposes a complementary threat through an adversarial lens — demonstrating that medical VLMs are critically vulnerable to background-based transferable attacks — revealing a systematic failure mode that robust, trustworthy medical AI must actively defend against.`,
    `**Robust Reasoning in Complex Scenarios.** Real clinical workflows demand long-horizon planning, multilingual comprehension, and cross-modal inference simultaneously — capabilities that standard models consistently fail to integrate. [[CarePilot]] addresses this with a hierarchical Actor-Critic multi-agent framework for **autonomous long-horizon task automation** in clinical computer environments. [[ArogyaSutra]] extends robust multimodal medical reasoning to Indic languages through a multi-agent pipeline designed for linguistically underserved communities, while [[CURE-MED]] employs **curriculum-informed reinforcement learning** to progressively build reliable multilingual medical reasoning that generalises across diverse and low-resource clinical language distributions.`,
    `**Benchmarking Frontier Models.** Measuring where capable models still fail is as important as building them. I design targeted evaluation frameworks that stress-test current systems under clinically and linguistically realistic conditions: [[M3Retrieve]] establishes the first comprehensive multimodal retrieval benchmark for medicine, while [[CLINIC]] evaluates the **multilingual trustworthiness** — safety, fairness, and reliability — of healthcare AI across diverse language communities at scale. Together, these benchmarks surface systematic capability gaps and provide the diagnostic infrastructure needed to guide responsible progress in medical AI.`,
  ],
}

export const education: EducationItem[] = [
  {
    period: '2023 – Present',
    school: 'Indian Institute of Technology, Patna',
    degree: 'Computer Science & Engineering, Ph.D.',
    logo: '/logos/iit_patna.png',
  },
  {
    period: '2020 – 2022',
    school: 'Indian Institute of Technology, Ropar',
    degree: 'Artificial Intelligence, M.Tech.',
    logo: '/logos/iit_ropar.png',
  },
  {
    period: '2015 – 2019',
    school: 'National Institute of Technology, Agartala',
    degree: 'Computer Science & Engineering, B.Tech.',
    logo: '/logos/nit_agartala.png',
  },
]

export const internships: InternshipItem[] = [
  {
    period: '2026',
    org: 'Gates Foundation',
    role: 'Research Assistant — Microsoft Research India & Koita Centre for Digital Health',
    logo: '/logos/gates_foundation.png',
  },
  { period: '2025', org: 'MBZUAI, Abu Dhabi', role: 'Visiting Researcher', logo: '/logos/mbzuai.png' },
  { period: '2024', org: 'Adobe Research', role: 'Research Intern', logo: '/logos/adobe.png' },
]

export const serviceAndTalk = {
  talks: [
    '2026: Invited talk at MBZUAI Agents Class.',
    '2025: Invited talk at IIT Patna.',
  ],
  reviewing: [
    'Conference reviewer: ACL, EMNLP, EACL, NAACL, NeurIPS, AAAI',
    'Journal reviewer: IEEE TAI, ACM Computing Surveys, ACM TALLIP, Neural Networks (NEUNET)',
  ],
}

const publicationSourceRaw: Omit<Publication, 'subtopics'>[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────────
  {
    title: 'CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare',
    authors: 'Akash Ghosh, Tajamul Ashraf, Rishu Kumar Singh, Numan Saeed, Sriparna Saha, Xiuying Chen, Salman Khan',
    venue: 'CVPR 2026',
    year: 2026,
    summary:
      'CarePilot: a multi-agent Actor-Critic framework with hierarchical reflection and long-term memory for autonomous long-horizon computer task automation in clinical healthcare settings.',
    tags: ['Healthcare AI', 'Multi-Agent', 'Agentic AI'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2603.24157' },
      { label: 'Project', href: 'https://akashghosh.github.io/Care-Pilot/' },
      { label: 'Code', href: 'https://github.com/AkashGhosh/CarePilot' },
    ],
    image: '/projects/careflow.jpg',
  },
  {
    title: 'When Background Matters: Breaking Medical Vision Language Models by Transferable Attack',
    authors: 'Akash Ghosh, Subhadip Baidya, Sriparna Saha, Xiuying Chen',
    venue: 'ACL 2026',
    year: 2026,
    summary:
      'Transferable adversarial attacks that exploit background context to break medical vision-language models, revealing critical robustness vulnerabilities in clinical AI systems.',
    tags: ['Adversarial Robustness', 'Medical AI', 'VLM Safety'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2604.17318' },
      { label: 'Project', href: 'https://akashghosh.github.io/MedFocusLeakACL/' },
      { label: 'Code', href: 'https://github.com/AkashGhosh/When-Background-Matters-Breaking-Medical-Vision-Language-Models-by-Transferable-Attack' },
    ],
    image: '/projects/adversarial_med.jpg',
  },
  {
    title: 'CURE-MED: Curriculum-Informed Reinforcement Learning for Multilingual Medical Reasoning',
    authors: 'Eric Onyame*, Akash Ghosh*, Subhadip Baidya, Sriparna Saha, Xiuying Chen, Chirag Agarwal',
    venue: 'ACL 2026',
    year: 2026,
    summary:
      'Curriculum-informed reinforcement learning that progressively builds multilingual medical reasoning capability, improving reliability and generalization across diverse clinical languages.',
    tags: ['Reinforcement Learning', 'Medical Reasoning', 'Multilingual'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2601.13262' },
      { label: 'Project', href: 'https://cure-med.github.io/' },
      { label: 'Code', href: 'https://github.com/AikyamLab/cure-med' },
    ],
    image: '/projects/cure_med.jpg',
  },
  {
    title: 'CLINIC: The First Comprehensive Multilingual Benchmark for Trustworthiness in Healthcare',
    authors: 'Akash Ghosh, Srivarshinee Sridhar, Raghav Kaushik Ravi, Muhsin Muhsin, Sriparna Saha, Chirag Agarwal',
    venue: 'ICML 2026',
    year: 2026,
    summary:
      'First comprehensive multilingual benchmark for evaluating trustworthiness — safety, fairness, and reliability — of AI systems across diverse healthcare settings.',
    tags: ['Benchmark', 'Healthcare AI', 'Trustworthiness'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2512.11437' },
      { label: 'Project', href: 'https://github.com/AikyamLab/clinic?tab=readme-ov-file' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/Agcs12/CLINIC' },
    ],
    image: '/projects/clinic_trustmed.jpg',
  },
  {
    title: 'ArogyaSutra: A Multi-Agent Framework for Multimodal Medical Reasoning in Indic Languages',
    authors: 'Tanmoy Kanti Halder*, Akash Ghosh*, Subhadip Baidya, Arijit Roy, Sriparna Saha',
    venue: 'IJCAI 2026',
    year: 2026,
    summary:
      'Multi-agent Actor-Critic framework for multimodal medical reasoning in Indic languages, bridging language barriers in clinical AI for underserved populations.',
    tags: ['Indic Languages', 'Multi-Agent', 'Medical Reasoning'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2606.13572' },
      { label: 'Project', href: 'https://iitp-cse.github.io/ArogyaSutra/' },
      { label: 'Code', href: 'https://github.com/IITP-CSE/ArogyaSutra' },
    ],
    image: '/projects/arogyasutra.jpg',
  },
  {
    title: 'RADO: Trustworthy Radiology Impression Generation using Safety and Faithfulness-based Preference Optimization',
    authors: 'Akash Ghosh, Nishant Kumar, Nitesh Patnaik, Adity Prakash, Rishi Raj, Sriparna Saha',
    venue: 'ACM Health',
    year: 2026,
    summary:
      'RADO uses safety and faithfulness-based preference optimization to generate trustworthy radiology impressions, reducing hallucinations and improving clinical reliability.',
    tags: ['Radiology AI', 'Healthcare AI', 'Preference Optimization'],
    links: [
      { label: 'Paper', href: 'https://dl.acm.org/doi/full/10.1145/3805803' },
      { label: 'Code', href: 'https://github.com/AkashGhosh/RADO-Trustworthy-Radiology-Impression-Generation' },
    ],
    image: '/projects/rado.jpg',
  },
  {
    title: 'The Cylindrical Representation Hypothesis for Language Model Steering',
    authors: 'Lang Gao, Jinghui Zhang, Wei Liu, Fengxian Ji, Chenxi Wang, Zirui Song, Akash Ghosh, Youssef Mohamed, Preslav Nakov, Xiuying Chen',
    venue: 'ICML 2026',
    year: 2026,
    summary:
      'Proposes the cylindrical representation hypothesis to explain and steer language model behavior, providing a geometric framework for interpretable model control.',
    tags: ['Interpretability', 'LLM Steering', 'Representation Learning'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2605.01844' },
      { label: 'Code', href: 'https://github.com/mbzuai-nlp/CRH' },
    ],
    image: '/projects/cylindrical_rep.png',
  },
  {
    title: 'VIRAASAT: Traversing Novel Paths for Indian Cultural Reasoning',
    authors: 'Harshul Raj Surana, Arijit Maji, Aryan Vats, Akash Ghosh, Sriparna Saha, Amit Sheth',
    venue: 'Preprint',
    year: 2026,
    summary:
      'Benchmark and methodology for evaluating LLMs on multi-hop reasoning tasks grounded in Indian cultural knowledge, spanning over 700 cultural artifacts.',
    tags: ['Cultural Reasoning', 'Indic Languages', 'Benchmark'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2602.18429' },
    ],
    image: '/projects/viraasat.png',
  },
  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    title: 'A Survey of Multilingual Reasoning in Language Models',
    authors: 'Akash Ghosh, Debayan Datta, Sriparna Saha, Chirag Agarwal',
    venue: 'EMNLP 2025',
    year: 2025,
    summary:
      'Systematic survey of multilingual reasoning capabilities in language models, analyzing methods, benchmarks, and challenges across diverse language families.',
    tags: ['Survey', 'Multilingual', 'Reasoning'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2502.09457' },
      { label: 'Code', href: 'https://github.com/AkashGhosh/Survey-of-Multilingual-Reasoning-in-Language-Models' },
    ],
    image: '/projects/multilingual_survey.jpg',
  },
  {
    title: 'M3Retrieve: Benchmarking Multimodal Retrieval for Medicine',
    authors: 'Arkadeep Acharya*, Akash Ghosh*, Pradeepika Verma, Kitsuchart Pasupa, Sriparna Saha, Priti Singh',
    venue: 'EMNLP 2025',
    year: 2025,
    summary:
      'Comprehensive benchmark for evaluating multimodal retrieval systems in medicine, covering diverse clinical modalities and retrieval scenarios.',
    tags: ['Benchmark', 'Medical Retrieval', 'Multimodal'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2510.06888' },
      { label: 'Code', href: 'https://github.com/AkashGhosh/M3Retrieve' },
      { label: 'Dataset', href: 'https://huggingface.co/collections/ArkaAcharya/m3retrieve-benchmarking-multimodal-retrieval-for-medicine' },
    ],
    image: '/projects/m3retrieve.png',
  },
  {
    title: 'Relic: Enhancing Reward Model Generalization for Low-Resource Indic Languages with Few-Shot Examples',
    authors: 'Soumya Suvra Ghosal, Vaibhav Singh, Akash Ghosh, Soumyabrata Pal, Subhadip Baidya, Sriparna Saha, Dinesh Manocha',
    venue: 'EMNLP 2025',
    year: 2025,
    summary:
      'RELIC improves reward model generalization for low-resource Indic languages using few-shot examples, enabling better RLHF alignment for underserved language communities.',
    tags: ['RLHF', 'Indic Languages', 'Reward Modeling'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2506.16502' },
      { label: 'Project', href: 'https://itsvaibhav01.github.io/Relic-web/' },
    ],
    image: '/projects/relic.jpg',
  },
  {
    title: 'DRISHTIKON: A Multimodal Multilingual Benchmark for Testing Language Models\' Understanding on Indian Culture',
    authors: 'Arijit Maji, Raghvendra Kumar, Akash Ghosh, Anushka, Nemil Shah, Abhilekh Borah, Vanshika Shah, Nishant Mishra, Sriparna Saha',
    venue: 'EMNLP 2025',
    year: 2025,
    summary:
      'Multimodal multilingual benchmark probing LLMs\' knowledge and understanding of Indian culture across diverse languages and visual contexts.',
    tags: ['Benchmark', 'Indic Languages', 'Multimodal'],
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2025.emnlp-main.68/' },
      { label: 'Code', href: 'https://github.com/13ari/DRISHTIKON' },
    ],
    image: '/projects/drishtikon.png',
  },
  {
    title: 'Let\'s Play Across Cultures: A Large Multilingual, Multicultural Benchmark for Assessing Language Models\' Understanding of Sports',
    authors: 'Punit Kumar Singh, Nishant Kumar, Akash Ghosh, Kunal Pasad, Khushi Soni, Manisha Jaishwal, Sriparna Saha, Syukron Abu Ishaq Alfarozi, Asres Temam Abagissa, Kitsuchart Pasupa, Haiqin Yang, Jose G Moreno',
    venue: 'EMNLP 2025',
    year: 2025,
    summary:
      'Large-scale multilingual and multicultural benchmark evaluating LLMs\' understanding of sports across diverse languages and cultural contexts.',
    tags: ['Benchmark', 'Multilingual', 'Cultural AI'],
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2025.emnlp-main.769/' },
      { label: 'Code', href: 'https://github.com/M-Groot7/CultSportQA' },
    ],
    image: '/projects/sports_culture.png',
  },
  {
    title: 'Infogen: Generating Complex Statistical Infographics from Documents',
    authors: 'Akash Ghosh, Aparna Garimella, Pritika Ramu, Sambaran Bandyopadhyay, Sriparna Saha',
    venue: 'ACL 2025',
    year: 2025,
    summary:
      'Infogen generates complex statistical infographics directly from documents, bridging structured data understanding and visual communication for real-world document intelligence.',
    tags: ['Infographic Generation', 'Document AI', 'Multimodal'],
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2025.acl-long.1003/' },
      { label: 'Code', href: 'https://github.com/AkashGhosh/Infogen/tree/main' },
    ],
    image: '/projects/infogen.png',
  },
  {
    title: 'SANSKRITI: A Comprehensive Benchmark for Evaluating Language Models\' Knowledge of Indian Culture',
    authors: 'Arijit Maji, Raghvendra Kumar, Akash Ghosh, Anushka, Sriparna Saha',
    venue: 'ACL 2025 Findings',
    year: 2025,
    summary:
      'Comprehensive benchmark for evaluating LLMs\' knowledge of Indian culture, covering history, traditions, arts, and languages across multiple dimensions.',
    tags: ['Benchmark', 'Indic Languages', 'Cultural AI'],
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2025.findings-acl.228/' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/13ari/Sanskriti' },
    ],
    image: '/projects/sanskriti.png',
  },
  {
    title: 'A Survey on Medical Document Summarization: From Machine Learning Techniques to Large Language Models',
    authors: 'Akash Ghosh, Raghav Jain, Anubhav Jhangra, Sriparna Saha, Adam Jatowt',
    venue: 'WiREs KDD',
    year: 2025,
    summary:
      'Comprehensive survey tracing the evolution of medical document summarization from classical ML to large language models, covering datasets, evaluation, and open challenges.',
    tags: ['Survey', 'Medical NLP', 'Summarization'],
    links: [
      { label: 'Paper', href: 'https://wires.onlinelibrary.wiley.com/doi/abs/10.1002/widm.70045' },
    ],
    image: '/projects/medical_summ_survey.png',
  },
  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    title: 'From Sights to Insights: Towards Summarization of Multimodal Clinical Documents',
    authors: 'Akash Ghosh, Mohit Singh Tomar, Abhisek Tiwari, Sriparna Saha, Jatin Avinash Salve, Setu Sinha',
    venue: 'ACL 2024',
    year: 2024,
    summary:
      'End-to-end framework for summarizing multimodal clinical documents combining textual and visual information for concise, clinically grounded summaries.',
    tags: ['Clinical NLP', 'Summarization', 'Multimodal'],
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2024.acl-long.708/' },
      { label: 'Code', href: 'https://github.com/AkashGhosh/From-Sights-to-Insights-Towards-Summarization-of-Multimodal-Clinical-Documents' },
    ],
    image: '/projects/from_sights_insights.png',
  },
  {
    title: 'A Comprehensive Survey of Hallucination in Large Language, Image, Video and Audio Foundation Models',
    authors: 'Pranab Sahoo, Prabhash Meharia, Akash Ghosh, Sriparna Saha, Vinija Jain, Aman Chadha',
    venue: 'EMNLP 2024',
    year: 2024,
    summary:
      'Comprehensive survey of hallucination across multimodal foundation models — LLMs, vision-language, video, and audio — covering causes, detection methods, and mitigation strategies.',
    tags: ['Survey', 'Hallucination', 'Foundation Models'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2405.09589' },
    ],
    image: '/projects/hallucination_survey.png',
  },
  {
    title: 'HealthAlignSumm: Utilizing Alignment for Multimodal Summarization of Code-Mixed Healthcare Dialogues',
    authors: 'Akash Ghosh, Arkadeep Acharya, Sriparna Saha, Gaurav Pandey, Dinesh Raghu, Setu Sinha',
    venue: 'EMNLP 2024',
    year: 2024,
    summary:
      'Alignment-based multimodal summarization framework for code-mixed healthcare dialogues, enabling clinically accurate and linguistically faithful summaries across mixed-language patient interactions.',
    tags: ['Healthcare AI', 'Summarization', 'Multimodal'],
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2024.findings-emnlp.675/' },
      { label: 'Code', href: 'https://github.com/AkashGhosh/HealthAlignSumm-Utilizing-Alignment-for-Multimodal-Summarization-of-Code-Mixed-Healthcare-Dialogues' },
    ],
    image: '/projects/health_align_summ.png',
  },
  {
    title: 'Exploring the Frontier of Vision-Language Models: A Survey of Current Methodologies and Future Directions',
    authors: 'Akash Ghosh, Arkadeep Acharya, Sriparna Saha, Vinija Jain, Aman Chadha',
    venue: 'Preprint',
    year: 2024,
    summary:
      'Systematic survey of vision-language models covering architectures, training paradigms, benchmarks, and open research directions at the frontier of multimodal AI.',
    tags: ['Survey', 'Vision-Language Models', 'Multimodal'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2404.07214' },
    ],
    image: '/projects/vlm_survey.png',
  },
  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    title: 'CLIPSyntel: CLIP and LLM Synergy for Multimodal Question Summarization in Healthcare',
    authors: 'Akash Ghosh, Arkadeep Acharya, Raghav Jain, Sriparna Saha, Aman Chadha, Setu Sinha',
    venue: 'AAAI 2024',
    year: 2024,
    summary:
      'Synergistic framework combining CLIP and LLMs for multimodal question summarization in healthcare, enabling concise and clinically grounded summaries from mixed text-image inputs.',
    tags: ['Healthcare AI', 'Question Summarization', 'CLIP'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2312.11541' },
      { label: 'Project', href: 'https://github.com/AkashGhosh/CLIPSyntel-AAAI2024' },
    ],
    image: '/projects/clipsyntel.png',
  },
]

const publicationSubtopicsByTitle: Record<string, PublicationSubtopicId[]> = {
  'CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare': ['multimodal-understanding'],
  'When Background Matters: Breaking Medical Vision Language Models by Transferable Attack': ['multimodal-understanding'],
  'CURE-MED: Curriculum-Informed Reinforcement Learning for Multilingual Medical Reasoning': ['multimodal-understanding'],
  'CLINIC: The First Comprehensive Multilingual Benchmark for Trustworthiness in Healthcare': ['benchmark'],
  'ArogyaSutra: A Multi-Agent Framework for Multimodal Medical Reasoning in Indic Languages': ['multimodal-understanding'],
  'RADO: Trustworthy Radiology Impression Generation using Safety and Faithfulness-based Preference Optimization': ['multimodal-understanding'],
  'The Cylindrical Representation Hypothesis for Language Model Steering': ['representation-learning'],
  'VIRAASAT: Traversing Novel Paths for Indian Cultural Reasoning': ['benchmark'],
  'A Survey of Multilingual Reasoning in Language Models': ['multimodal-understanding'],
  'M3Retrieve: Benchmarking Multimodal Retrieval for Medicine': ['benchmark'],
  'Relic: Enhancing Reward Model Generalization for Low-Resource Indic Languages with Few-Shot Examples': ['representation-learning'],
  'DRISHTIKON: A Multimodal Multilingual Benchmark for Testing Language Models\' Understanding on Indian Culture': ['benchmark'],
  'Let\'s Play Across Cultures: A Large Multilingual, Multicultural Benchmark for Assessing Language Models\' Understanding of Sports': ['benchmark'],
  'Infogen: Generating Complex Statistical Infographics from Documents': ['multimodal-understanding'],
  'SANSKRITI: A Comprehensive Benchmark for Evaluating Language Models\' Knowledge of Indian Culture': ['benchmark'],
  'A Survey on Medical Document Summarization: From Machine Learning Techniques to Large Language Models': ['multimodal-understanding'],
  'From Sights to Insights: Towards Summarization of Multimodal Clinical Documents': ['multimodal-understanding'],
  'A Comprehensive Survey of Hallucination in Large Language, Image, Video and Audio Foundation Models': ['multimodal-understanding'],
  'HealthAlignSumm: Utilizing Alignment for Multimodal Summarization of Code-Mixed Healthcare Dialogues': ['multimodal-understanding'],
  'Exploring the Frontier of Vision-Language Models: A Survey of Current Methodologies and Future Directions': ['multimodal-understanding'],
  'CLIPSyntel: CLIP and LLM Synergy for Multimodal Question Summarization in Healthcare': ['multimodal-understanding'],
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

/** Selected Work section — Akash Ghosh's papers */
const SELECTED_WORK_TITLES = [
  'CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare',
  'When Background Matters: Breaking Medical Vision Language Models by Transferable Attack',
  'CLINIC: The First Comprehensive Multilingual Benchmark for Trustworthiness in Healthcare',
  'ArogyaSutra: A Multi-Agent Framework for Multimodal Medical Reasoning in Indic Languages',
  'CURE-MED: Curriculum-Informed Reinforcement Learning for Multilingual Medical Reasoning',
  'M3Retrieve: Benchmarking Multimodal Retrieval for Medicine',
  'CLIPSyntel: CLIP and LLM Synergy for Multimodal Question Summarization in Healthcare',
  'From Sights to Insights: Towards Summarization of Multimodal Clinical Documents',
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
  { date: '2026.05', venue: 'Gates Foundation', text: 'Started as Research Assistant working with Microsoft Research India & Koita Centre for Digital Health.' },
  { date: '2026.05', venue: 'ACM Health', text: '1 paper accepted.' },
  { date: '2026.05', venue: 'IJCAI 2026', text: '1 paper accepted (ArogyaSutra).' },
  { date: '2026.05', venue: 'ICML 2026', text: '2 papers accepted (CLINIC, Cylindrical Representation Hypothesis).' },
  { date: '2026.04', venue: 'ACL 2026', text: '2 papers accepted (When Background Matters, CURE-MED).' },
  { date: '2026.03', venue: 'ACM Health', text: '1 paper accepted (RADO).' },
  { date: '2026.02', venue: 'CVPR 2026', text: '1 paper accepted (CarePilot).' },
  { date: '2025.08', venue: 'MBZUAI, Abu Dhabi', text: 'Started as Visiting Researcher.' },
  { date: '2025.08', venue: 'EMNLP 2025', text: '5 papers accepted (M3Retrieve, DRISHTIKON, Let\'s Play Across Cultures, RELIC, Multilingual Reasoning Survey).' },
  { date: '2025.05', venue: 'ACL 2025', text: '2 papers accepted: Infogen (Main, Oral) and SANSKRITI (Findings).' },
  { date: '2025.01', venue: 'WiREs KDD', text: 'Medical Document Summarization Survey accepted.' },
  { date: '2024.08', venue: 'EMNLP 2024', text: '2 papers accepted (HealthAlignSumm — Findings, Hallucination Survey).' },
  { date: '2024.05', venue: 'Adobe Research', text: 'Started as Research Intern.' },
  { date: '2024.05', venue: 'ACL 2024', text: '1 paper accepted: From Sights to Insights (Main, Oral).' },
  { date: '2024.01', venue: 'ECIR 2024', text: '1 paper accepted.' },
  { date: '2023.12', venue: 'AAAI 2024', text: '1 paper accepted (CLIPSyntel).' },
]
