import Icon from '@/components/Icon/Icon';
import { SOCIALS } from '@/data/socials';
import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  return (
    <ul className={styles.list} aria-label="Grace Technologies on social media">
      {SOCIALS.map(({ name, icon, url }) => (
        <li key={name}>
          <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer me" aria-label={`${name} (opens in a new tab)`}>
            <Icon name={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
