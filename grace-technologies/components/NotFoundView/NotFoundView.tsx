import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import styles from './NotFoundView.module.css';

export default function NotFoundView() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>The page you are looking for does not exist or has moved.</p>
        <Button href="/">Back to home</Button>
      </Container>
    </section>
  );
}
