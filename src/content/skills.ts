import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    label: "语言与基础",
    skills: ["Python", "C++", "SQL"],
  },
  {
    label: "AI 应用",
    skills: ["LangGraph", "RAG", "GraphRAG", "Prompt Engineering", "RAGAS"],
  },
  {
    label: "数据与服务",
    skills: ["Flask", "PostgreSQL", "pgvector", "Redis", "Neo4j"],
  },
  {
    label: "工程工具",
    skills: ["Docker Compose", "Git", "ROS2", "URDF"],
  },
];
