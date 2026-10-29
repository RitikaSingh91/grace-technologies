import CardGrid from '@/components/CardGrid/CardGrid';
import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import SectionHead from '@/components/SectionHead/SectionHead';
import { TESTIMONIALS } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" tone="alt" labelledBy="testimonials-title">
      <Container>
        <SectionHead
          id="testimonials-title"
          eyebrow="TESTIMONIALS"
          title="What Our Clients Say"
          text="Discover how our technology solutions help businesses build, innovate, and grow."
        />
        <CardGrid columns={3} className={styles.grid}>
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
