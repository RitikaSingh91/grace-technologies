import type { ReactNode } from 'react';
import Container from '@/components/Container/Container';
import styles from './TwoColumn.module.css';

/** Container with two equal columns that stack on small screens. Pass exactly two children. */
export default function TwoColumn({ children }: { children: ReactNode }) {
  return <Container className={styles.two}>{children}</Container>;
}
