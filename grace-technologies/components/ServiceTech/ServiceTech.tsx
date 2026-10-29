import Container from '@/components/Container/Container';
import Reveal from '@/components/Reveal/Reveal';
import Section from '@/components/Section/Section';
import SectionHead from '@/components/SectionHead/SectionHead';
import styles from './ServiceTech.module.css';

export default function ServiceTech({ tech }: { tech: string[] }) {
  return (
    <Section labelledBy="tech-title">
      <Container>
        <SectionHead id="tech-title" eyebrow="Technologies and tools" title="Typical tools we use" text="Chosen for each project, not fixed in advance." />
        <Reveal as="ul" className={styles.chips}>
          {tech.map((t) => (
            <li key={t} className={styles.chip}>
              {t}
            </li>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
