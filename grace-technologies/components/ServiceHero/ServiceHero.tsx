import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import EnquireButton from '@/components/EnquireButton/EnquireButton';
import Eyebrow from '@/components/Eyebrow/Eyebrow';
import { ILLUSTRATIONS } from '@/components/Illustrations/Illustrations';
import Reveal from '@/components/Reveal/Reveal';
import type { Service } from '@/lib/types';
import styles from './ServiceHero.module.css';

export default function ServiceHero({ service }: { service: Service }) {
  const Illustration = ILLUSTRATIONS[service.k];
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <Reveal>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/#services' }, { label: service.nav }]} />
          <Eyebrow>Service</Eyebrow>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.lead}>{service.lead}</p>
          <div className={styles.actions}>
            <EnquireButton service={service.nav}>Enquire Now</EnquireButton>
            <Button href="/#projects" variant="ghost">
              View projects
            </Button>
          </div>
        </Reveal>
        <Reveal className={styles.art}>
          <Illustration />
        </Reveal>
      </Container>
    </section>
  );
}
