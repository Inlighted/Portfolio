// ---------------------------------------------------------------------------
// Experience — presented without company names or client identifiers, except
// the Leapgen.ai internship which is intentionally named.
// Dates are intentionally omitted; add a `period` string to any entry to show one.
// ---------------------------------------------------------------------------

export type Experience = {
  role: string;
  org: string;
  period?: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Machine Learning / AI Engineer",
    org: "Contracting · Financial Services Client",
    summary:
      "Owned an AI-powered KYC document intelligence platform end-to-end in a highly regulated banking environment — from PySpark data pipelines to real-time inference APIs and LLM governance.",
    highlights: [
      "Shipped a FastAPI + Docker document-classification service with sub-200ms real-time inference",
      "Designed RAG pipelines generating fraud-risk scores and compliance summaries with LangChain",
      "Built LLM evaluation & governance workflows: hallucination tracking, retrieval-quality metrics, human-in-the-loop validation",
      "Fine-tuned small language models with LoRA for low-latency, cost-efficient financial insights",
      "Automated retraining triggered by drift detection; Blue-Green zero-downtime deployments via CI/CD",
    ],
    tags: ["GenAI", "RAG", "MLOps", "Azure Databricks", "FastAPI"],
  },
  {
    role: "Data Engineer and ML Engineer",
    org: "Contracting · Analytics Consulting Client",
    summary:
      "Owned the full data lifecycle of a vehicle complaints analytics platform on Azure while driving Agile delivery as Scrum Master.",
    highlights: [
      "Built ADF-orchestrated ingestion into ADLS Gen2 with Parquet-optimized storage",
      "Exposed the lake through Synapse Serverless SQL external tables — zero data movement",
      "Designed fact/dimension models and built Power BI dashboards for complaint trends",
      "Facilitated stand-ups and sprint planning, removing blockers and improving delivery velocity",
    ],
    tags: ["Azure", "Data Engineering", "Power BI", "Scrum"],
  },
  {
    role: "Junior Data Scientist / ML Engineer",
    org: "Contracting · Enterprise Security Client",
    summary:
      "Engineered a predictive phishing-intelligence ecosystem that moved security operations from reactive pattern-matching to proactive ML-driven defense.",
    highlights: [
      "Cascading inference architecture: heuristic pre-filter + high-fidelity XGBoost ensemble",
      "Airflow-orchestrated human-in-the-loop retraining to counter concept drift and zero-day tactics",
      "SHAP-powered risk indicators that cut analysts' mean time to remediation",
      "Spark ETL over multi-terabyte logs with a versioned feature store killing training–serving skew",
    ],
    tags: ["XGBoost", "Spark", "MLflow", "SHAP", "Security AI"],
  },
  {
    role: "AI/ML Engineer",
    org: "Leapgen.ai · Healthcare AI",
    summary:
      "Worked on Healthcare AI products, building LLM-based solutions across the patient and provider experience.",
    highlights: [
      "Customer Support Chatbot for patient-facing healthcare queries",
      "Patient Medical Record AI for intelligent record retrieval and Q&A",
      "Doctor Summary Generator condensing clinical notes into concise summaries",
      "Appointment Scheduling & Reminder Systems automating the care workflow",
      "Applied prompt engineering, vector search and Generative AI for healthcare automation",
    ],
    tags: ["Healthcare AI", "LLMs", "Prompt Engineering", "Vector Search", "GenAI"],
  },
  {
    role: "Associate Data Scientist",
    org: "Contracting · Real Estate Analytics Client",
    summary:
      "Built an explainable automated valuation model (AVM) for residential property prices across diverse regional markets.",
    highlights: [
      "Stacked XGBoost/CatBoost ensembles outperforming traditional OLS in volatile markets",
      "SHAP reason codes decomposing every price prediction for regulatory transparency",
      "Quantile regression valuation bands quantifying downside investment risk",
      "Tableau geospatial dashboards for drill-down localized market analysis",
    ],
    tags: ["ML", "Explainability", "Time Series", "Tableau"],
  },
  {
    role: "Data Analyst / Database Associate",
    org: "Full time · Enterprise Reporting Client",
    summary:
      "Supported a centralized vehicle-safety reporting system, automating ingestion and standardizing executive reporting.",
    highlights: [
      "Automated daily SSIS refreshes replacing manual data loads",
      "Source-to-target audits that recovered misallocated costs",
      "Parameterized SSRS report library eliminating one-off data requests",
      "Pandas automation cutting hours of weekly manual data preparation",
    ],
    tags: ["SQL Server", "SSIS", "SSRS", "Python"],
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export const education = [
  {
    degree: "Master of Science in Computing and Data Science",
    detail: "Advanced coursework in machine learning, data engineering and applied AI.",
    year: "2026",
  },
  {
    degree: "Master of Business Administration",
    detail: "Business strategy, operations and analytics-driven decision making.",
    year: "2010",
  },
  {
    degree: "Bachelor of Commerce",
    detail: "Foundation in finance, accounting and quantitative methods.",
    year: "2008",
  },
];

// ---------------------------------------------------------------------------
// Certifications & DataCamp
// ---------------------------------------------------------------------------

export const certifications = [
  { name: "Scrum Master Certified", issuer: "Scrum Certification" },
  { name: "CompTIA IT Fundamentals", issuer: "CompTIA" },
];

export const dataCamp = {
  xp: 100048,
  coursesCompleted: 24,
  highlightedCourses: [
    "Implementing AI Solutions in Business",
    "Large Language Models (LLMs)",
    "Understanding Machine Learning",
    "Python Toolbox",
    "Data Manipulation with pandas",
    "Intermediate SQL",
    "Database Design",
    "Snowflake SQL",
    "Data Warehousing",
    "Cloud Computing",
    "Understanding Data Engineering",
    "SQL Server Fundamentals",
    "Python for Developers",
  ],
};

// ---------------------------------------------------------------------------
// LeetCode
// ---------------------------------------------------------------------------

export const leetcode = {
  solved: 200,
  languages: [
    { name: "Python", percent: 70 },
    { name: "SQL", percent: 30 },
  ],
  badges: ["Problem Solver", "SQL Specialist", "Consistency Streak"],
  focusAreas: [
    { name: "Arrays & Hashing", percent: 85 },
    { name: "SQL Queries & Joins", percent: 90 },
    { name: "Strings & Two Pointers", percent: 75 },
    { name: "Dynamic Programming", percent: 55 },
  ],
};

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export const services = [
  {
    icon: "Bot",
    title: "AI Solutions",
    desc: "RAG pipelines, LLM apps, chatbots and GenAI automation grounded in your business data.",
  },
  {
    icon: "BrainCircuit",
    title: "Machine Learning",
    desc: "End-to-end ML: feature engineering, model training, evaluation and production deployment.",
  },
  {
    icon: "Database",
    title: "Data Engineering",
    desc: "Azure lakehouse pipelines — ADF, Databricks, Synapse — from raw ingestion to analytics-ready.",
  },
  {
    icon: "Code2",
    title: "Python Development",
    desc: "Clean, tested Python for data apps, APIs (FastAPI/Flask) and automation scripts.",
  },
  {
    icon: "BarChart3",
    title: "Power BI Dashboards",
    desc: "Executive-ready dashboards and data models that turn metrics into decisions.",
  },
  {
    icon: "DatabaseZap",
    title: "SQL Optimization",
    desc: "Query tuning, schema design and warehouse modeling for fast, reliable analytics.",
  },
  {
    icon: "MessagesSquare",
    title: "Interview Preparation",
    desc: "Mock interviews and targeted prep for data science, ML and data engineering roles.",
  },
  {
    icon: "Compass",
    title: "Career Guidance",
    desc: "Portfolio reviews, resume feedback and roadmaps for breaking into data & AI.",
  },
];

// ---------------------------------------------------------------------------
// Testimonials — sample placeholders. Replace with real quotes (with permission).
// ---------------------------------------------------------------------------

export const testimonials = [
  {
    quote:
      "Priyanka took our messy document workflow and turned it into an automated AI pipeline. Clear communication, rigorous engineering, and she always explained the trade-offs in business terms.",
    name: "Client",
    title: "Product Lead, FinTech (sample testimonial)",
  },
  {
    quote:
      "Her SQL and Python tutoring completely changed how I approach interviews. Patient, structured, and every session ended with a concrete practice plan.",
    name: "Tutoring Student",
    title: "Data Analyst (sample testimonial)",
  },
  {
    quote:
      "Rare combination of hands-on ML engineering and Scrum leadership. Our sprints got faster and our dashboards finally told a story stakeholders understood.",
    name: "Client",
    title: "Engineering Manager, Analytics (sample testimonial)",
  },
];



