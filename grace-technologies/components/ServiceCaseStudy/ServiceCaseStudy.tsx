import CheckList from '@/components/CheckList/CheckList';
import IllustrationFrame from '@/components/IllustrationFrame/IllustrationFrame';
import { ILLUSTRATIONS } from '@/components/Illustrations/Illustrations';
import Reveal from '@/components/Reveal/Reveal';
import Section from '@/components/Section/Section';
import Tag from '@/components/Tag/Tag';
import TwoColumn from '@/components/TwoColumn/TwoColumn';
import type { Service } from '@/lib/types';
import styles from './ServiceCaseStudy.module.css';

export default function ServiceCaseStudy({ service }: { service: Service }) {
  const { cs } = service;
  const Illustration = ILLUSTRATIONS[service.k];
  return (
    <Section labelledBy="case-title">
      <TwoColumn>
        <Reveal>
          <Tag>Illustrative case study</Tag>
          <h2 id="case-title" className={styles.title}>
            {cs.t}
          </h2>
          <p className={styles.text}>
            <strong>Problem.</strong> {cs.p}
          </p>
          <p className={styles.text}>
            <strong>Solution.</strong> {cs.s}
          </p>
          <p className={styles.text}>{cs.o}</p>
          <div className={styles.list}>
            <CheckList items={cs.f} />
          </div>
        </Reveal>
        <IllustrationFrame reveal>
          <Illustration />
        </IllustrationFrame>
      </TwoColumn>
    </Section>
  );
}
