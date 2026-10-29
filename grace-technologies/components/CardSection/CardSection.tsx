import { useId } from 'react';
import CardGrid from '@/components/CardGrid/CardGrid';
import Container from '@/components/Container/Container';
import InfoCard from '@/components/InfoCard/InfoCard';
import Section from '@/components/Section/Section';
import SectionHead from '@/components/SectionHead/SectionHead';
import type { Pair } from '@/lib/types';
import styles from './CardSection.module.css';

interface CardSectionProps {
  eyebrow: string;
  title: string;
  text?: string;
  items: ReadonlyArray<Pair>;
  columns?: 2 | 3 | 4;
  tone?: 'plain' | 'alt';
  numbered?: boolean;
}

/** Section heading plus a grid of cards: used for challenges, approach and use cases. */
export default function CardSection({ eyebrow, title, text, items, columns = 3, tone = 'plain', numbered = false }: CardSectionProps) {
  const headingId = useId();
  return (
    <Section tone={tone} labelledBy={headingId}>
      <Container className={styles.inner}>
        <SectionHead id={headingId} eyebrow={eyebrow} title={title} text={text} />
        <CardGrid columns={columns}>
          {items.map(([heading, body], i) => (
            <InfoCard key={heading} title={heading} text={body} number={numbered ? `0${i + 1}` : undefined} />
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
