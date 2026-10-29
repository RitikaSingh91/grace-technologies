import Link from 'next/link';
import Container from '@/components/Container/Container';
import EnquireButton from '@/components/EnquireButton/EnquireButton';
import Logo from '@/components/Logo/Logo';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Container>
          <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" aria-label="Grace Technologies home" className={styles.logoLink}>
              <Logo size="lg" />
            </Link>
            <p className={styles.about}>
              Technology and digital solutions for businesses in the UK and the USA: software, AI automation, merchant account support
              and digital marketing.
            </p>
            <div className={styles.action}>
              <EnquireButton>Enquire Now</EnquireButton>
            </div>
          </div>
          <nav aria-label="Quick links">
            <p className={styles.heading}>Quick Links</p>
            <ul className={styles.list}>
              <li><Link className={styles.link} href="/">Home</Link></li>
              <li><Link className={styles.link} href="/#about">About</Link></li>
              <li><Link className={styles.link} href="/#services">Services</Link></li>
              <li><Link className={styles.link} href="/#projects">Our Work</Link></li>
              <li><Link className={styles.link} href="/#contact">Contact</Link></li>
              <li><Link className={styles.link} href="/admin">Admin</Link></li>
              <li><Link className={styles.link} href="/privacy">Privacy Policy</Link></li>
              <li><Link className={styles.link} href="/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </nav>
          <nav aria-label="Our Services">
            <p className={styles.heading}>Our Services</p>
            <ul className={styles.list}>
              <li><Link className={styles.link} href="/services/web-mobile-development">Web &amp; Mobile App Development</Link></li>
              <li><Link className={styles.link} href="/services/merchant-account-management">Merchant Account Management</Link></li>
              <li><Link className={styles.link} href="/services/ai-workflow-automation">Agentic AI &amp; Workflow Automation</Link></li>
              <li><Link className={styles.link} href="/services/digital-marketing">Digital Marketing</Link></li>
            </ul>
          </nav>
          <div>
            <p className={styles.heading}>Contact</p>
            <ul className={styles.list}>
              <li><a className={styles.link} href="mailto:contact@gracetechnologies.uk">contact@gracetechnologies.uk</a></li>
              <li><address className={styles.address}>Grace Technologies Ltd.<br />398 Whalebone Lane South<br />Romford, Greater London RM6 6HP<br />United Kingdom</address></li>
              <li><Link className={styles.link} href="/us-addresses">US Addresses</Link></li>
              <li><EnquireButton size="sm">Let&apos;s Talk</EnquireButton></li>
            </ul>
          </div>
          </div>
        </Container>
      </div>
      <div className={styles.partnershipBand}>
        <Container>
          <div className={styles.partnershipLayout}>
            <div>
              <p className={styles.heading}>Working in Partnership</p>
              <p className={styles.partnership}>Grace Technologies Ltd. and ANK Square Pvt. Ltd. work together, combining our teams&apos; expertise to deliver thoughtful technology and business solutions across the UK, USA, and India.</p>
            </div>
            <div className={styles.partnerIdentity} aria-label="Grace Technologies and ANK Square Pvt. Ltd.">
              <div className={styles.partnerBrand}>
                <Logo size="lg" />
              </div>
              <span className={styles.partnerPlus}>+</span>
              <div className={styles.ankSquareBrand}>
                <img className={styles.ankSquareLogo} src="/images/ank-square-logo.svg" alt="Ank Square logo" />
              </div>
            </div>
            <ul className={styles.partnerContact}>
              <li><a className={styles.link} href="mailto:contact@anksquare.com">contact@anksquare.com</a></li>
              <li><a className={styles.link} href="tel:+919939337638">+91-9939337638</a></li>
              <li><address className={styles.address}>Ank Square Pvt. Ltd., Ramjaipal Road, Opp. Gola Road, Near Hotel Magadh Palace, Patna, Bihar, India - 801503</address></li>
            </ul>
          </div>
        </Container>
      </div>
      <div className={styles.socialBand}>
        <Container>
          <div className={styles.socialLayout}>
            <div>
              <p className={styles.heading}>Connect With Us</p>
              <p className={styles.partnership}>Follow us for technology updates, projects, and company news.</p>
            </div>
            <SocialLinks />
          </div>
        </Container>
      </div>
      <Container>
        <div className={styles.legal}>
          <span>© {new Date().getFullYear()} Grace Technologies. All rights reserved.</span>
          <span>Serving businesses in the UK, the USA, and India.</span>
        </div>
      </Container>
    </footer>
  );
}
