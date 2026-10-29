import Eyebrow from '@/components/Eyebrow/Eyebrow';
import Faq from '@/components/Faq/Faq';
import Reveal from '@/components/Reveal/Reveal';
import Section from '@/components/Section/Section';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import type { Pair } from '@/lib/types';
import styles from './ServiceFaq.module.css';

export default function ServiceFaq({ items }: { items: ReadonlyArray<Pair> }) {
  return (
    <Section tone="alt" labelledBy="faq-title">
      <TwoColumn>
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="faq-title" className={styles.title}>
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal>
          <Faq items={items} />
        </Reveal>
      </TwoColumn>
    </Section>
  );
}
