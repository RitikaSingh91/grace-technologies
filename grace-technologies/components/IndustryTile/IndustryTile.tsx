import IconBadge from '@/components/IconBadge/IconBadge';
import Reveal from '@/components/Reveal/Reveal';
import type { Industry } from '@/lib/types';
import styles from './IndustryTile.module.css';

export default function IndustryTile({ industry }: { industry: Industry }) {
  return (
    <Reveal className={styles.tile}>
      <IconBadge name={industry.icon} size="md" />
      <span className={styles.label}>{industry.label}</span>
    </Reveal>
  );
}
