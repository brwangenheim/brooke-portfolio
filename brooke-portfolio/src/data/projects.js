import projectImage from "../assets/project1.jpg";
import profileImage from "../assets/profile.jpg";

export const projects = [
  {
    title: "AI Development & Integration Intern (The Carlyle Group)",
    image: projectImage,
    tags: ["Python", "LLM", "AWS", "Automation"],
    category: "Industry",
    disciplines: ["AI", "SWE"],
    year: "2025",
    description:
      "Engineered and deployed a data extraction workflow to automate financial indicator retrieval from unstructured Excel statements, achieving 96% accuracy and an 80% reduction in analyst processing time. Leveraged LLMs for information extraction and integrated models with AWS for scalable, production-grade deployment.",
    link: "/projects/carlyle-group",
    github: null,
    live: null,
    longDescription: [
      "Led the end‑to‑end design and implementation of an AI‑assisted pipeline that ingests diverse Excel workbooks, identifies relevant signals, and extracts standardized financial indicators with guardrails.",
      "Combined classical parsing with LLM reasoning under constraints: every model output is validated with schema checks, confidence thresholds, and deterministic fallbacks, then serialized to a typed interface for analytics.",
      "Containerized workloads, orchestrated async jobs, and implemented secure artifact storage. Result: dramatic latency reductions for analysts and a repeatable, observable pipeline that scales across portfolios."
    ],
    images: [projectImage],
  },
  {
    title: "Transformer Model for RNA Prediction (Tripathi Lab)",
    image: profileImage,
    tags: ["Nvidia", "Transformers", "ML", "Biomedical"],
    category: "Research",
    disciplines: ["AI", "Data Science"],
    year: "2023",
    description:
      "Developed a Nvidia-based transformer model to predict modified nucleoside sequences, leveraging and transforming large-scale RNA and mass spectrometry datasets. Evaluated model performance using machine learning metrics to optimize detection algorithms for biomedical applications.",
    link: "/projects/tripathi-lab",
    github: "https://github.com/brooke-wangenheim/rna-transformer",
    live: null,
    longDescription: [
      "Re‑framed the task as sequence‑to‑signal alignment, building a transformer that learns contextual features tied to biochemical constraints.",
      "Authored reproducible pipelines to clean, align, and augment large MS datasets; profiled bottlenecks to keep training throughput high on Nvidia hardware.",
      "Emphasized evaluation fidelity—robust CV splits, calibration checks, and ablations—to ensure gains generalized beyond a single dataset."
    ],
    images: [profileImage],
  },
  {
    title: "Plant Taxonomy Platform (Brown DSI)",
    image: projectImage,
    tags: ["Full-stack", "Node.js", "Express", "SQL", "API"],
    category: "Academic",
    disciplines: ["SWE", "Data Science"],
    year: "2024",
    description:
      "Built and deployed a full-stack map-based platform, creating a crowdsourced plant taxonomy data interface for students. Integrated data science tools into a phylogenetic evolution course, utilizing SQL for database organization and API integration for the map interface.",
    link: "/projects/plant-taxonomy",
    github: "https://github.com/brooke-wangenheim/plant-taxonomy",
    live: "https://plant-taxonomy-demo.vercel.app",
    longDescription: [
      "Architected a clear separation of concerns: a lightweight API on a normalized SQL schema and a client focused on interaction and map overlays.",
      "Implemented optimistic UI, debounced writes, and server‑side validation to keep interactions responsive while maintaining integrity.",
      "A teaching tool that bridges data collection with exploration—making phylogenetic concepts tangible in the browser."
    ],
    images: [projectImage],
  },
  {
    title: "Climate Research & Hydrologic Modeling (Ibarra Lab)",
    image: profileImage,
    tags: ["Python", "Timeseries", "Modeling", "Climate"],
    category: "Research",
    disciplines: ["Data Science"],
    year: "2022",
    description:
      "Conducted comprehensive timeseries analysis and hydrologic mass balance modeling of isotopic datasets using Python. Modeled hydrologic systems of closed-basin lake samples as climate proxies to understand the effects of global cooling.",
    link: "/projects/ibarra-lab",
    github: "https://github.com/brooke-wangenheim/climate-modeling",
    live: null,
  },
  {
    title: "Algorithmic Fairness Curriculum (Brown CNTR)",
    image: projectImage,
    tags: ["Ethics", "Curriculum", "Leadership"],
    category: "Academic",
    disciplines: ["Other"],
    year: "2025",
    description:
      "Researched and evaluated literature on algorithmic fairness and digital ethics, contributing to the design of socially responsible computing curricula adopted across Brown's CS department. Developed a curriculum handbook synthesizing interdisciplinary research into accessible teaching materials.",
    link: "/projects/brown-cntr",
    github: null,
    live: null,
  },
  {
    title: "Head Teaching Assistant (Brown DSI)",
    image: profileImage,
    tags: ["Teaching", "Mentorship", "Data Science"],
    category: "Academic",
    disciplines: ["Data Science"],
    year: "2025",
    description:
      "Served as TA for Data Science Fellows, Applied Statistics in Python, and Data Science Fluency, teaching data packages, statistical analysis, clustering and regression ML models, and data visualization. Mentored students in project management and technical communication.",
    link: "/projects/dsi-ta",
    github: null,
    live: null,
  },
  {
    title: "Web Board (College Hill Independent)",
    image: projectImage,
    tags: ["Web", "Leadership", "Optimization"],
    category: "Personal",
    disciplines: ["SWE"],
    year: "2025",
    description:
      "Managed 5 students in the redesign and optimization of the website, improving performance, user experience, and accessibility. Directed the integration and upload of new articles, implementing efficient workflows and maintaining version control with Git.",
    link: "/projects/college-hill-web",
    github: "https://github.com/college-hill-independent/website",
    live: "https://collegehillindependent.com",
  },
];


