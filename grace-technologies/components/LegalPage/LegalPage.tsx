import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Container from '@/components/Container/Container';
import Notice from '@/components/Notice/Notice';
import type { Pair } from '@/lib/types';
import styles from './LegalPage.module.css';

interface LegalPageProps {
  title: string;
  sections: ReadonlyArray<Pair>;
}

export default function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <section className={styles.page}>
      <Container>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: title }]} />
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>
          <Notice>Draft for review by a qualified professional before launch.</Notice>
          {sections.map(([heading, text]) => (
            <div key={heading}>
              <h2 className={styles.heading}>{heading}</h2>
              <p className={styles.text}>{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
