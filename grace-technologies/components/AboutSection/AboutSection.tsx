import CardGrid from '@/components/CardGrid/CardGrid';
import Eyebrow from '@/components/Eyebrow/Eyebrow';
import { TeamIllustration } from '@/components/Illustrations/Illustrations';
import InfoCard from '@/components/InfoCard/InfoCard';
import Reveal from '@/components/Reveal/Reveal';
import Section from '@/components/Section/Section';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import styles from './AboutSection.module.css';

const PILLARS = [
  { title: 'Vision', text: 'Help ambitious businesses use technology with confidence.' },
  { title: 'Approach', text: 'Listen first, plan clearly, build in small steps, keep improving.' },
  { title: 'Commitment', text: 'Quality work, plain communication, no inflated claims.' },
];

export default function AboutSection() {
  return (
    <Section id="about" tone="alt" labelledBy="about-title">
      <TwoColumn>
        <Reveal>
          <Eyebrow>About Grace Technologies</Eyebrow>
          <h2 id="about-title" className={styles.title}>
            Technology that serves the business
          </h2>
          <p className={styles.text}>
            Grace Technologies is a technology and digital solutions company working with businesses in the United Kingdom and the
            United States. We combine software development, AI automation, payment operations support and digital marketing, so the
            pieces of your digital presence work together.
          </p>
          <p className={styles.text}>
            Our aim is practical, well-made technology, explained clearly, with honest limits on what it can do.
          </p>
          <CardGrid columns={3} className={styles.pillars}>
            {PILLARS.map((p) => (
              <InfoCard key={p.title} title={p.title} text={p.text} />
            ))}
          </CardGrid>
        </Reveal>
        <Reveal className={styles.art}>
          <TeamIllustration />
        </Reveal>
      </TwoColumn>
    </Section>
  );
}
