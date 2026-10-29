import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import EnquireButton from '@/components/EnquireButton/EnquireButton';
import Eyebrow from '@/components/Eyebrow/Eyebrow';
import GradientText from '@/components/GradientText/GradientText';
import HeroArt from '@/components/HeroArt/HeroArt';
import Icon from '@/components/Icon/Icon';
import Reveal from '@/components/Reveal/Reveal';
import styles from './Hero.module.css';

const HIGHLIGHTS = ['Four focused services', 'Human-supervised AI', 'UK and US clients'];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <Container className={styles.inner}>
        <Reveal>
          <Eyebrow pill>Technology and digital solutions</Eyebrow>
          <h1 className={styles.title}>
            Software, AI and digital growth for <GradientText>ambitious businesses</GradientText>.
          </h1>
          <p className={styles.lead}>
            Grace Technologies helps businesses grow through software development, AI automation, merchant account management and
            digital marketing, with clear communication from first call to launch.
          </p>
          <div className={styles.actions}>
            <Button href="/#services">Explore Our Services</Button>
            <EnquireButton variant="ghost">Enquire Now</EnquireButton>
          </div>
          <ul className={styles.chips}>
            {HIGHLIGHTS.map((h) => (
              <li key={h} className={styles.chip}>
                <Icon name="Check" />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className={styles.art}>
          <HeroArt />
        </Reveal>
      </Container>
    </section>
  );
}
