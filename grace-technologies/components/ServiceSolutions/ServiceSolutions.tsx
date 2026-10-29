import Container from '@/components/Container/Container';
import IconBadge from '@/components/IconBadge/IconBadge';
import Reveal from '@/components/Reveal/Reveal';
import Section from '@/components/Section/Section';
import SectionHead from '@/components/SectionHead/SectionHead';
import type { Pair } from '@/lib/types';
import styles from './ServiceSolutions.module.css';

export default function ServiceSolutions({ items }: { items: ReadonlyArray<Pair> }) {
  return (
    <Section labelledBy="solutions-title">
      <Container>
        <SectionHead id="solutions-title" eyebrow="Solutions and capabilities" title="What we can build and run" />
        <div className={styles.grid}>
          {items.map(([name, text]) => (
            <Reveal key={name} className={styles.item}>
              <IconBadge name="Check" size="check" />
              <div>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.text}>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
