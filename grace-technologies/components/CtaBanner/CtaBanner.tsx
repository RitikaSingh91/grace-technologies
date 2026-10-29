import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import EnquireButton from '@/components/EnquireButton/EnquireButton';
import Icon from '@/components/Icon/Icon';
import Reveal from '@/components/Reveal/Reveal';
import { CONTACT_EMAIL } from '@/data/site';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.banner} aria-labelledby="cta-title">
      <Container className={styles.inner}>
        <Reveal>
          <h2 id="cta-title" className={styles.title}>
            Have a business challenge in mind?
          </h2>
          <p className={styles.text}>Let’s explore how the right digital solution can help your business move forward.</p>
        </Reveal>
        <Reveal className={styles.actions}>
          <EnquireButton>Enquire Now</EnquireButton>
          <Button href={`mailto:${CONTACT_EMAIL}`} variant="ghost">
            <Icon name="Email" />
            Email us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
