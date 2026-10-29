import type { ReactNode } from 'react';
import styles from './Notice.module.css';

export default function Notice({ children }: { children: ReactNode }) {
  return <p className={styles.notice}>{children}</p>;
}
