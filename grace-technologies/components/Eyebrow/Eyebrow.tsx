import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: ReactNode;
  pill?: boolean;
}

export default function Eyebrow({ children, pill = false }: EyebrowProps) {
  return <span className={cx(styles.eyebrow, pill && styles.pill)}>{children}</span>;
}
