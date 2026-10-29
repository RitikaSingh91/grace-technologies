import Icon from '@/components/Icon/Icon';
import Reveal from '@/components/Reveal/Reveal';
import type { Testimonial } from '@/data/testimonials';
import styles from './TestimonialsSection.module.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Reveal as="article" className={styles.card}>
      <Icon name="FormatQuote" className={styles.quoteIcon} />
      <p className={styles.quote}>{testimonial.quote}</p>
      <div className={styles.rating} role="img" aria-label="Five stars, sample rating">
        <span aria-hidden="true">★★★★★</span>
      </div>
      <div className={styles.client}>
        <div className={styles.avatar} role="img" aria-label={`Avatar for ${testimonial.name}`}>
          {testimonial.initials}
        </div>
        <div>
          <h3 className={styles.name}>{testimonial.name}</h3>
          <p className={styles.role}>{testimonial.role}</p>
          <span className={styles.service}>{testimonial.service}</span>
        </div>
      </div>
      <span className={styles.sampleLabel}>Sample testimonial</span>
    </Reveal>
  );
}
