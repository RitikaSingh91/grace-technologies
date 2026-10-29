import CardGrid from '@/components/CardGrid/CardGrid';
import Container from '@/components/Container/Container';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Section from '@/components/Section/Section';
import SectionHead from '@/components/SectionHead/SectionHead';
import { PROJECTS, SERVICES } from '@/data/site';

export default function ProjectsSection() {
  return (
    <Section id="projects" tone="alt" labelledBy="projects-title">
      <Container>
        <SectionHead
          id="projects-title"
          eyebrow="Projects and case studies"
          title="How we would approach it"
          text="Selected project work and case studies delivered by Grace Technologies."
        />
        <CardGrid columns={2}>
          {PROJECTS.map((project) => {
            const relatedSlug = project.relatedSlug ?? 'web-development';
            return <ProjectCard key={project.id ?? project.t} project={project} relatedSlug={relatedSlug} related={SERVICES[relatedSlug]} />;
          })}
        </CardGrid>
      </Container>
    </Section>
  );
}
