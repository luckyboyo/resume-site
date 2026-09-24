import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "langgraph-software-agent",
    title: "基于 LangGraph 的多智能体软件工程助手",
    category: "Multi-Agent · Software Engineering",
    summary:
      "以状态机编排 Supervisor、Explorer、Coder、Reviewer 与 Executor，构建可审查、可验证的软件工程任务闭环。",
    overview:
      "项目面向代码理解、修改、评审和执行验证等复杂任务，通过显式状态流转组织多个职责清晰的 Agent，并持久化会话状态与执行轨迹。",
    highlights: [
      "设计 Supervisor Orchestration 调度层，完成意图识别、任务拆解、动态路由和结果汇总。",
      "构建 Explorer Agent，结合 ripgrep 聚合目录、定义、依赖和调用关系上下文。",
      "实现 Coder—Reviewer 结构化反馈回路，并通过最大迭代次数约束无效循环。",
      "由 Executor 在隔离环境中运行测试、采集输出和异常栈，形成生成—审查—测试—修复闭环。",
      "使用 Redis 持久化 Checkpoint，以 PostgreSQL 保存任务轨迹和审计日志。",
    ],
    architecture: [
      "Supervisor：任务拆解与路由决策",
      "Explorer：代码检索与上下文聚合",
      "Coder：代码生成与修改",
      "Reviewer：正确性、规范和安全审查",
      "Executor：隔离执行与测试反馈",
    ],
    technologies: [
      "Python",
      "LangGraph",
      "Redis",
      "PostgreSQL",
      "ripgrep",
      "Rich",
      "prompt_toolkit",
    ],
  },
  {
    slug: "rag-knowledge-base",
    title: "RAG 本地知识库智能问答系统",
    category: "RAG · Information Retrieval",
    summary:
      "覆盖文档解析、混合检索、上下文组装、模型生成和质量评估的本地化 RAG Pipeline。",
    overview:
      "项目围绕本地知识库问答的检索质量和可复现部署展开，通过关键词与向量双路召回、查询理解和父子分块提高上下文相关性与完整性。",
    highlights: [
      "融合 BM25 与 pgvector、bge-m3 向量检索，使用 RRF 排序和 Dynamic Top-K 筛选上下文。",
      "通过 Query Rewrite 消解多轮指代，并用 Query Decomposition 拆分复合问题。",
      "采用 Parent—Child 双层分块，在召回精度和生成上下文完整性之间取得平衡。",
      "构建 LLM-as-a-Judge 与 RAGAS 评估流程，覆盖忠实度、答案相关性和上下文精度。",
      "使用 Streamlit 提供上传和流式输出界面，以 Docker Compose 编排数据库服务。",
    ],
    architecture: [
      "文档解析与 Parent—Child 分块",
      "BM25 与向量双路召回",
      "RRF 融合排序与 Dynamic Top-K",
      "Query Rewrite 与 Query Decomposition",
      "LLM 生成与 RAGAS 质量评估",
    ],
    technologies: [
      "Python",
      "RAG",
      "BM25",
      "pgvector",
      "bge-m3",
      "PostgreSQL",
      "Streamlit",
      "Docker Compose",
      "RAGAS",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
