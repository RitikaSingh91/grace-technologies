import type { ReactNode } from 'react';
import styles from './GradientText.module.css';

export default function GradientText({ children }: { children: ReactNode }) {
  return <span className={styles.gradient}>{children}</span>;
}
