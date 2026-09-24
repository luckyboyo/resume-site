import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsSection() {
  return (
    <section className="py-20 sm:py-28" id="projects">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="项目作品"
            description="围绕多智能体协作、知识检索与生成质量构建的两个实践项目。"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal className="h-full" delay={index * 0.08} key={project.slug}>
              <ProjectCard index={index} project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
