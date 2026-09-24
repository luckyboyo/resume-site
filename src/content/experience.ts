import type { ExperienceItem } from "@/types/content";

export const experience: ExperienceItem[] = [
  {
    company: "科大讯飞",
    role: "嵌入式软件开发实习生",
    location: "中国合肥",
    period: "2025.04 — 2025.06",
    summary:
      "参与企业文档智能问答系统建设，围绕文档解析、GraphRAG、混合检索和可追溯回答完善端到端链路。",
    highlights: [
      "基于 Flask 搭建文档处理与问答服务，支持 PDF、Word 文档上传、知识库管理、智能检索及 RESTful API 调用。",
      "使用 Neo4j 与 Cypher 构建领域知识图谱，并结合 BGE Embedding 向量召回形成 Hybrid Retrieval 链路。",
      "将向量片段与图谱关系组织为 Grounded Context 注入 Qwen，通过提示约束降低回答幻觉风险。",
      "实现文件校验、MD5 指纹、线程安全读写、过期数据清理、统一日志和异常处理。",
    ],
    technologies: [
      "Python",
      "Flask",
      "GraphRAG",
      "Neo4j",
      "Cypher",
      "BGE",
      "Qwen",
      "PyMuPDF",
    ],
  },
];
