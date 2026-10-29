import Button from '@/components/Button/Button';
import CheckList from '@/components/CheckList/CheckList';
import Icon from '@/components/Icon/Icon';
import IconBadge from '@/components/IconBadge/IconBadge';
import Reveal from '@/components/Reveal/Reveal';
import type { Service } from '@/lib/types';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  slug: string;
  service: Service;
}

export default function ServiceCard({ slug, service }: ServiceCardProps) {
  return (
    <Reveal as="article" className={styles.card}>
      <div className={styles.band}>
        <IconBadge name={service.icon} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{service.nav}</h3>
        <p className={styles.text}>{service.short}</p>
        <CheckList size="sm" items={service.sol.slice(0, 3).map(([name]) => name)} />
        <div className={styles.more}>
          <Button href={`/services/${slug}`} variant="ghost" size="sm" ariaLabel={`Learn more about ${service.nav}`}>
            Learn More <Icon name="ArrowForward" />
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
