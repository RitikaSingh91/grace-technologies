import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import SectionHead from '@/components/SectionHead/SectionHead';
import styles from './page.module.css';

export const metadata = {
  title: 'US Addresses',
  description: 'Grace Technologies US address information.',
};

export default function USAddressesPage() {
  return (
    <Section id="us-addresses" labelledBy="us-addresses-title">
      <Container>
        <SectionHead id="us-addresses-title" eyebrow="Addresses" title="US Addresses" text="Confirmed US address information for Grace Technologies." />
        <div className={styles.addresses}>
          <article className={styles.addressCard}>
            <h2>US Address</h2>
            <p>No confirmed US address has been provided.</p>
          </article>
        </div>
      </Container>
    </Section>
  );
}
