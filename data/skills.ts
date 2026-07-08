export type SkillCategory = {
  title: string;
  icon: string; // lucide icon name mapped in the Skills component
  accent: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code2",
    accent: "from-violet-500 to-blue-500",
    skills: ["Python", "SQL", "PySpark", "Java"],
  },
  {
    title: "Data Engineering",
    icon: "Database",
    accent: "from-blue-500 to-cyan-400",
    skills: [
      "Apache Spark",
      "Azure Databricks",
      "Azure Data Factory",
      "Azure Synapse Analytics",
      "ADLS Gen2 (Data Lake)",
      "Delta Lake",
      "ETL / ELT Pipelines",
      "Data Modeling (Star / Snowflake)",
      "Parquet",
      "Airflow",
    ],
  },
  {
    title: "Machine Learning",
    icon: "BrainCircuit",
    accent: "from-fuchsia-500 to-violet-500",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "XGBoost",
      "LightGBM",
      "Random Forest",
      "Anomaly Detection",
      "Time-Series Forecasting",
      "SHAP / Explainability",
      "MLflow & MLOps",
    ],
  },
  {
    title: "GenAI & LLMs",
    icon: "Sparkles",
    accent: "from-cyan-400 to-emerald-400",
    skills: [
      "RAG Pipelines",
      "LangChain",
      "FAISS",
      "Google Gemini",
      "Hugging Face",
      "Prompt Engineering",
      "Vector Databases (ChromaDB, Pinecone)",
      "LLM Evaluation & Guardrails",
      "Azure OpenAI",
    ],
  },
  {
    title: "BI & Visualization",
    icon: "BarChart3",
    accent: "from-amber-400 to-orange-500",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    title: "Cloud & Tools",
    icon: "Cloud",
    accent: "from-sky-400 to-blue-600",
    skills: [
      "Microsoft Azure",
      "Azure DevOps & CI/CD",
      "Docker",
      "Git & GitHub",
      "REST APIs (FastAPI, Flask)",
      "Streamlit",
      "PostgreSQL / SQL Server / MongoDB",
    ],
  },
  {
    title: "Soft Skills",
    icon: "Users",
    accent: "from-rose-400 to-pink-600",
    skills: [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Critical Thinking",
      "Mentoring",
      "Agile / Scrum Master",
    ],
  },
];
