import type { Pair } from '@/lib/types';
import styles from './Faq.module.css';

/** Accessible accordion built on native <details>, so it works without JavaScript. */
export default function Faq({ items }: { items: ReadonlyArray<Pair> }) {
  return (
    <div>
      {items.map(([question, answer]) => (
        <details key={question} className={styles.item}>
          <summary className={styles.question}>{question}</summary>
          <p className={styles.answer}>{answer}</p>
        </details>
      ))}
    </div>
  );
}
