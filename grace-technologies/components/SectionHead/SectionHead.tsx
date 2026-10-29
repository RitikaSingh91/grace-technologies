import Eyebrow from '@/components/Eyebrow/Eyebrow';
import Reveal from '@/components/Reveal/Reveal';
import styles from './SectionHead.module.css';

interface SectionHeadProps {
  id?: string;
  eyebrow: string;
  title: string;
  text?: string;
}

export default function SectionHead({ id, eyebrow, title, text }: SectionHeadProps) {
  return (
    <Reveal className={styles.head}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {text ? <p className={styles.text}>{text}</p> : null}
    </Reveal>
  );
}
