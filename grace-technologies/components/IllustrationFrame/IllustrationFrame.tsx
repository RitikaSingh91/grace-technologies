import type { ReactNode } from 'react';
import Reveal from '@/components/Reveal/Reveal';
import styles from './IllustrationFrame.module.css';

export default function IllustrationFrame({ children, reveal = false }: { children: ReactNode; reveal?: boolean }) {
  if (reveal) return <Reveal className={styles.frame}>{children}</Reveal>;
  return <div className={styles.frame}>{children}</div>;
}
