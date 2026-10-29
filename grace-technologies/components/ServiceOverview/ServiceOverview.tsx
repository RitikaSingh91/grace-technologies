import CheckList from '@/components/CheckList/CheckList';
import Eyebrow from '@/components/Eyebrow/Eyebrow';
import Notice from '@/components/Notice/Notice';
import Reveal from '@/components/Reveal/Reveal';
import Section from '@/components/Section/Section';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import type { Service } from '@/lib/types';
import styles from './ServiceOverview.module.css';

export default function ServiceOverview({ service }: { service: Service }) {
  return (
    <Section tone="alt" labelledBy="overview-title">
      <TwoColumn>
        <Reveal>
          <Eyebrow>Overview</Eyebrow>
          <h2 id="overview-title" className={styles.title}>
            What this service is
          </h2>
          {service.intro.map((paragraph) => (
            <p key={paragraph} className={styles.text}>
              {paragraph}
            </p>
          ))}
          {service.note ? <Notice>{service.note}</Notice> : null}
        </Reveal>
        <Reveal>
          <CheckList items={service.feat} />
        </Reveal>
      </TwoColumn>
    </Section>
  );
}
