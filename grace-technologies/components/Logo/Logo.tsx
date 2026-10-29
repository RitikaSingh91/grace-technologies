import { cx } from '@/lib/cx';
import styles from './Logo.module.css';

interface LogoProps {
  size?: 'md' | 'lg';
}

/**
 * The logo artwork lives in /public/assets/images/logo.svg and is drawn as a CSS mask,
 * so its colour comes from the --color-text token in globals.css.
 */
export default function Logo({ size = 'md' }: LogoProps) {
  return <span className={cx(styles.logo, size === 'lg' && styles.large)} role="img" aria-label="Grace Technologies" />;
}
