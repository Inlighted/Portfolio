// All projects are presented as freelance work: no company names, no dates.
// `github` / `demo` are optional — leave undefined to hide the button.

export type Project = {
  slug: string;
  title: string;
  featured?: boolean;
  summary: string;
  problem: string;
  impact: string;
  stack: string[];
  features: string[];
  challenges: string[];
  solution: string;
  architecture: string[]; // ordered stages rendered as a flow diagram
  github?: string;
  demo?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer & Interview Preparation Platform",
    featured: true,
    summary:
      "End-to-end GenAI application combining Retrieval-Augmented Generation (RAG), semantic search and Large Language Models to analyze resumes and coach candidates for interviews in real time.",
    problem:
      "Job seekers get rejected by ATS filters before a human ever reads their resume, and they walk into interviews without targeted, role-specific practice. Generic advice doesn't account for the actual resume and the actual job description.",
    impact:
      "Delivers an instant ATS compatibility score, generates tailored technical and HR interview questions from the candidate's own resume, and runs a live AI interviewer that evaluates answers in real time — compressing days of interview prep into a single session.",
    stack: [
      "Python",
      "Streamlit",
      "Google Gemini 2.5 Flash",
      "LangChain",
      "FAISS",
      "HuggingFace Embeddings",
      "PyPDF",
    ],
    features: [
      "ATS Resume Score Analysis with actionable improvement suggestions",
      "Technical Interview Question Generator grounded in the resume + job description",
      "HR / behavioral Interview Question Generator",
      "AI Interviewer with conversational follow-ups",
      "Real-time Answer Evaluation with scoring and feedback",
      "Semantic search over resume chunks via FAISS vector store",
    ],
    challenges: [
      "Grounding LLM output strictly in the uploaded resume to avoid hallucinated experience",
      "Chunking PDFs so semantic retrieval stays precise across varied resume layouts",
      "Keeping latency low enough for a conversational interviewer on a free-tier LLM",
    ],
    solution:
      "A modular RAG architecture: PyPDF extracts text, a recursive splitter chunks it, HuggingFace embeddings index chunks into FAISS, and LangChain orchestrates retrieval + Gemini 2.5 Flash prompts. Each capability (ATS scoring, question generation, interviewing, answer evaluation) is an isolated module behind a Streamlit UI, so features ship independently.",
    architecture: [
      "PDF Upload (PyPDF)",
      "Text Splitter",
      "HuggingFace Embeddings",
      "FAISS Vector Store",
      "LangChain Retrieval",
      "Gemini 2.5 Flash",
      "Streamlit UI",
    ],
    github: "https://github.com/Inlighted",
    demo: "https://streamlit.io/cloud",
    accent: "from-violet-500 via-blue-500 to-cyan-400",
  },
  {
    slug: "kyc-document-intelligence",
    title: "AI-Powered KYC Document Intelligence & Verification System",
    summary:
      "Production-grade document intelligence pipeline that classifies, validates and extracts insights from identity documents — passports, driver's licenses and financial records — using computer vision and Generative AI.",
    problem:
      "Manual KYC review is slow, expensive and error-prone. Compliance teams drown in blurred scans, skewed images and inconsistent OCR output while regulators demand full auditability.",
    impact:
      "Automated document classification with real-time inference, LLM-generated compliance summaries and fraud-risk context, dramatically reducing manual review effort and accelerating verification turnaround in a regulated environment.",
    stack: [
      "Azure Databricks",
      "PySpark",
      "Python",
      "TensorFlow (MobileNetV2)",
      "FastAPI",
      "Docker",
      "MLflow",
      "LangChain",
      "ChromaDB / Pinecone",
      "PostgreSQL",
    ],
    features: [
      "Real-time document classification API (IDs, checks, invoices) with sub-200ms latency",
      "RAG pipeline turning extracted entities into fraud-risk scores and compliance summaries",
      "Automated validation for noisy inputs: blurred scans, skew, OCR inconsistencies",
      "MLflow Model Registry with staged Staging → Production transitions",
      "Prometheus + Grafana monitoring for drift, latency and error rates",
      "Async OCR processing with Celery + Redis to survive heavy upload load",
    ],
    challenges: [
      "Class imbalance across diverse document types",
      "Regulatory demands for auditability, reproducibility and controlled access",
      "Keeping inference cheap without sacrificing accuracy",
    ],
    solution:
      "A fine-tuned MobileNetV2 backbone served via FastAPI + Docker, stratified evaluation with macro F1 and per-class precision/recall, model quantization (TFLite/OpenVINO) to cut compute cost, PySpark pipelines on Databricks for large-batch processing, and OAuth2/RBAC/IAM plus OpenTelemetry observability for governance.",
    architecture: [
      "Document Ingestion (ADLS)",
      "PySpark Cleaning & Features",
      "CV Classifier (MobileNetV2)",
      "Entity Extraction",
      "Vector Store (ChromaDB)",
      "LLM Insights (LangChain)",
      "FastAPI + Monitoring",
    ],
    github: "https://github.com/Inlighted",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    slug: "phishing-intelligence",
    title: "Enterprise Phishing Intelligence & Automated Risk Mitigation",
    summary:
      "Predictive threat-detection ecosystem that shifted security operations from reactive pattern-matching to proactive, ML-driven defense with a strictly controlled false-positive rate.",
    problem:
      "Rule-based email security misses novel zero-day phishing tactics, while aggressive filters flood analysts with false alarms and block legitimate business communication.",
    impact:
      "Reduced breach incidents while protecting employee productivity; SHAP-based 'risk indicators' cut analysts' mean time to remediation, and a financial loss-avoidance model tied model thresholds directly to business cost.",
    stack: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Apache Spark / PySpark",
      "SQL Server",
      "MLflow",
      "Airflow",
      "SHAP",
      "Docker",
      "Tableau",
    ],
    features: [
      "Cascading inference: lightweight heuristic filter routing edge cases to an XGBoost ensemble",
      "Lexical + behavioral features: URL Shannon entropy, domain age, n-gram TF-IDF",
      "Human-in-the-loop retraining loop orchestrated with Airflow to counter concept drift",
      "SHAP explanations for every verdict, ready for audit and analyst triage",
      "Probability calibration (Platt scaling, isotonic regression) for automated blocking policies",
      "Adversarial testing with character-level perturbations to harden the model",
    ],
    challenges: [
      "Concept drift from constantly evolving attacker tactics",
      "Multi-terabyte communication logs requiring distributed processing",
      "Training–serving skew silently degrading production accuracy",
    ],
    solution:
      "Spark ETL pipelines feed a versioned feature store in SQL Server so training and serving share identical feature definitions; Great Expectations validates incoming data; MLflow tracks calibration and drift metrics; and TLS 1.3 + fine-grained IAM keep the pipeline SOC2/GDPR-compliant.",
    architecture: [
      "Email / URL Streams",
      "Spark ETL + Feature Store",
      "Heuristic Pre-filter",
      "XGBoost Ensemble",
      "Calibration Layer",
      "SHAP Explanations",
      "Analyst Dashboard (Tableau)",
    ],
    github: "https://github.com/Inlighted",
    accent: "from-rose-500 to-orange-400",
  },
  {
    slug: "vehicle-complaints-analytics",
    title: "Vehicle Complaints Analytics Platform",
    summary:
      "Cloud-native Azure data platform that turns raw vehicle complaint feeds into governed, analytics-ready datasets and executive Power BI dashboards.",
    problem:
      "Complaint data arrived from scattered source systems in inconsistent formats, making trend analysis, category breakdowns and regional insight nearly impossible for decision-makers.",
    impact:
      "A single automated lake-to-dashboard pipeline: scheduled ingestion, Parquet-optimized storage, serverless querying without data movement, and self-serve Power BI dashboards for complaint trends, categories and locations.",
    stack: [
      "Azure Data Factory",
      "ADLS Gen2",
      "Azure Databricks",
      "PySpark",
      "Azure Synapse (Serverless SQL Pools)",
      "SQL",
      "Python",
      "Parquet",
      "Power BI",
    ],
    features: [
      "ADF-orchestrated ingestion with scheduling and pipeline automation",
      "Parquet storage on ADLS Gen2 for cheap, fast large-scale querying",
      "External tables on Synapse Serverless SQL Pools — query the lake in place",
      "Fact/dimension modeling designed for reporting workloads",
      "SQL + Python cleansing: nulls, duplicates, structural normalization",
      "Power BI dashboards for trends, categories and geographic hotspots",
    ],
    challenges: [
      "Balancing storage cost against query performance at scale",
      "Designing a schema simple enough for analysts, rigorous enough for governance",
    ],
    solution:
      "A medallion-style flow — raw → cleansed → modeled — where ADF handles orchestration, Spark handles transformation, Synapse serverless exposes curated Parquet as external tables, and Power BI consumes a clean star schema. Delivered while also serving as Scrum Master for the team.",
    architecture: [
      "Source Systems",
      "Azure Data Factory",
      "ADLS Gen2 (Parquet)",
      "Databricks / PySpark",
      "Synapse Serverless SQL",
      "Star Schema Models",
      "Power BI",
    ],
    github: "https://github.com/Inlighted",
    accent: "from-cyan-400 to-emerald-400",
  },
  {
    slug: "geospatial-valuation-engine",
    title: "Geospatial Valuation Engine & Real Estate Risk Analytics",
    summary:
      "High-fidelity automated valuation model (AVM) predicting residential property values across diverse regional markets, with explainable, regulator-friendly outputs.",
    problem:
      "Traditional OLS-based valuation models break down in high-volatility markets and can't explain their numbers — a dealbreaker for stakeholders and compliance alike.",
    impact:
      "Reduced mean absolute percentage error versus baseline institutional models, produced SHAP 'reason codes' for every prediction (+$10k school district, −$5k property age) and gave stakeholders drill-down geospatial dashboards for localized market trends.",
    stack: [
      "Python",
      "XGBoost",
      "CatBoost",
      "LightGBM",
      "Scikit-learn",
      "Statsmodels",
      "SHAP",
      "SQL",
      "Azure Data Factory",
      "Tableau",
      "Power BI",
    ],
    features: [
      "Stacked gradient-boosted ensemble capturing non-linear market dynamics",
      "Spatially aware features: neighborhood price/sqft trends, target-encoded pin codes",
      "Time-series split validation to prevent leakage into future market conditions",
      "Quantile regression producing valuation bands, not just point estimates",
      "Isolation Forest anomaly detection catching 'fat-finger' listings pre-training",
      "Champion–challenger shadow-mode framework for safe production promotion",
    ],
    challenges: [
      "Valuation bias across demographic and geographic slices",
      "Heteroscedasticity between luxury and entry-level segments",
      "Multicollinearity threatening the integrity of feature importances",
    ],
    solution:
      "Rigorous statistical hygiene — VIF diagnostics, hypothesis testing, log transforms and weighted least squares — combined with Boruta/RFE/Lasso feature selection, SMOTE for rare events, Optuna Bayesian tuning and ADF/ADLS ETL for alternative geospatial data (crime, transit, schools).",
    architecture: [
      "Geospatial + CRM Data",
      "ADF / ADLS ETL",
      "Feature Engineering",
      "GBT Ensemble (XGB/CatBoost)",
      "SHAP Reason Codes",
      "Quantile Risk Bands",
      "Tableau / Power BI",
    ],
    github: "https://github.com/Inlighted",
    accent: "from-amber-400 to-rose-500",
  },
  {
    slug: "enterprise-reporting-automation",
    title: "Enterprise Reporting & Database Automation Suite",
    summary:
      "Centralized SQL Server reporting system with fully automated ingestion, reconciliation and standardized self-serve reports for executive decision-making.",
    problem:
      "Teams loaded data manually, numbers disagreed between systems, and every stakeholder question became a one-off data request.",
    impact:
      "Moved the organization to automated daily refreshes, recovered misallocated costs through source-to-target audits, eliminated one-off report requests with a parameterized SSRS library, and cut hours of weekly manual data preparation with Python automation.",
    stack: ["SQL Server (T-SQL)", "SSIS", "SSRS", "Python (Pandas)", "Excel", "Jira"],
    features: [
      "Scheduled SSIS packages replacing manual data loads",
      "Source-to-target reconciliation scripts with root-cause analysis",
      "Parameterized SSRS report library (filter by date, region)",
      "Pandas-based cleaning of raw files before database load",
      "Daily data profiling for missing values and duplicates",
      "Documented data dictionaries from business requirements",
    ],
    challenges: [
      "Undocumented source systems with silent calculation errors",
      "Building trust in published figures across departments",
    ],
    solution:
      "Systematic automation plus auditing: every pipeline scheduled, every figure reconciled to source, every anomaly root-caused and tracked in Jira, and every report validated with business users through structured UAT.",
    architecture: [
      "Flat Files / Sources",
      "Python Cleansing",
      "SSIS Packages",
      "SQL Server DWH",
      "Reconciliation & QA",
      "SSRS Report Library",
    ],
    github: "https://github.com/Inlighted",
    accent: "from-slate-400 to-blue-500",
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const otherProjects = projects.filter((p) => !p.featured);

export const featuredProjectStructure = [
  "app.py",
  "ai_interviewer.py",
  "ats_score.py",
  "interview_generator.py",
  "answer_evaluator.py",
  "ats_analyzer.py",
  "embeddings.py",
  "gemini_helper.py",
  "interview_questions.py",
  "pdf_loader.py",
  "text_splitter.py",
  "vector_store.py",
  "requirements.txt",
  "README.md",
];

export const featuredProjectSnippet = `# vector_store.py — semantic index over resume chunks
from langchain_community.vectorstores import FAISS
from embeddings import get_embeddings

def build_vector_store(chunks: list[str]) -> FAISS:
    """Embed resume chunks and index them for semantic retrieval."""
    embeddings = get_embeddings()  # HuggingFace sentence-transformers
    return FAISS.from_texts(chunks, embedding=embeddings)

def retrieve_context(store: FAISS, query: str, k: int = 4) -> str:
    docs = store.similarity_search(query, k=k)
    return "\\n\\n".join(d.page_content for d in docs)`;
