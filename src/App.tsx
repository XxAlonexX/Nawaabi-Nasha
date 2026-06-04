import { useState } from 'react';

const logoImage = new URL('../Nawaabi-Nasha/Green-Logo-HighQ-WHite.png', import.meta.url).href;
const heroImage = new URL('../Nawaabi-Nasha/Worker.png', import.meta.url).href;
const bgImage = new URL('../Nawaabi-Nasha/bg.png', import.meta.url).href;
const shopImage = new URL('../Nawaabi-Nasha/Shop.png', import.meta.url).href;
const heroBackdrop = new URL('../Nawaabi-Nasha/Gold-bg-High-log.png', import.meta.url).href;

const paymentMethods = [
  { id: 'card', label: 'Card', icon: '▭' },
  { id: 'upi', label: 'UPI', icon: '◫' },
  { id: 'netbanking', label: 'Net Banking', icon: '⌂' },
];


const trustMarks = ['Bank-grade security', 'SSL encrypted', 'PCI compliant'];


type Screen = 'home' | 'waitlist' | 'royal' | 'heritage' | 'darbar';

type HomeProps = {
  onJoinWaitlist: () => void;
  onNavigate: (s: Screen) => void;
};

type WaitlistProps = {
  onBack: () => void;
  onNavigate: (s: Screen) => void;
};

type HeaderProps = {
  onNavigate: (s: Screen) => void;
  onPrimaryAction: () => void;
  primaryLabel?: string;
};

function AppHeader({ onNavigate, onPrimaryAction, primaryLabel = 'Secure Your Seat' }: HeaderProps) {
  return (
    <header className="site-topbar">
      <button className="site-brand-button" type="button" onClick={() => onNavigate('home')} aria-label="Go to home">
        <img className="brand-logo" src={logoImage} alt="Nawaabi Nasha" />
      </button>

      <nav className="site-nav" aria-label="Primary">
        <a
          href="#stores"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('darbar');
          }}
        >
          The Darbaars
        </a>
        <a
          href="#collections"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('royal');
          }}
        >
          Royal Selection
        </a>
        <a
          href="#story"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('heritage');
          }}
        >
          Heritage
        </a>
        <a
          href="#membership"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('waitlist');
          }}
        >
          The Inner Circle
        </a>
      </nav>

      <button className="site-cta" type="button" onClick={onPrimaryAction}>
        {primaryLabel}
      </button>
    </header>
  );
}

function HomeScreen({ onJoinWaitlist, onNavigate }: HomeProps) {
  return (
    <div className="home-screen">
      <AppHeader onNavigate={onNavigate} onPrimaryAction={onJoinWaitlist} />

      <section className="hero" id="home" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-overlay" />
        <img className="hero-watermark" src={heroBackdrop} alt="" aria-hidden="true" />

        <div className="hero-content">
          <h1>Secure Your Seat in the Lineage of Taste</h1>
          <p>
            Join the exclusive waitlist for the Nawaabi Nasha flagship experience. A Rs 1
            commitment reserves your place in heritage.
          </p>
          <button className="hero-join" type="button" onClick={onJoinWaitlist}>
            Join the waitlist
          </button>
        </div>

        <a className="hero-scroll" href="#experience" aria-label="Scroll to experience section">
          v
        </a>
      </section>

      <section className="registry-section" id="experience">
        <form
          className="registry-card"
          onSubmit={(event) => {
            event.preventDefault();
            onJoinWaitlist();
          }}
        >
          <p className="registry-eyebrow">Premise Registration</p>
          <h2>The Registry</h2>

          <label>
            Full name
            <input type="text" placeholder="Enter your name" required />
          </label>

          <label>
            Email address
            <input type="email" placeholder="name@email.com" required />
          </label>

          <label>
            Phone number
            <input type="tel" placeholder="+91 000 000 0000" required />
          </label>

          <button className="registry-submit" type="submit">
            Reserve my place - Rs 1
          </button>

          <small>Encrypted and Secure Reservation</small>
        </form>

        <article className="registry-copy" id="story">
          <h2>A Limited Communion</h2>
          <p>
            Nawaabi Nasha is not merely a destination; it is a revival of the senses. Our flagship
            experience in the heart of the city merges Vedic tradition with avant-garde
            presentation. To maintain this sanctity, entry remains invite-only.
          </p>

          <div className="promise-box">
            <h3>Exclusive Tier</h3>
            <p>
              Only 500 seats available for this preview week. Your Rs 1 commitment
              ensures your priority position in our digital queue.
              <br />
              <strong>A symbolic ₹1 reservation helps preserve the integrity of our waitlist, ensuring each invitation is reserved for genuinely interested patrons.</strong>
            </p>
          </div>

          <div className="registry-stats">
            <div>
              <strong>428</strong>
              <span>Seats Taken</span>
            </div>
            <div>
              <strong>72</strong>
              <span>Remaining</span>
            </div>
          </div>
        </article>
      </section>

      {/* Gallery section removed as requested */}
      <Footer />
    </div>
  );
}

function WaitlistScreen({ onBack, onNavigate }: WaitlistProps) {
  return (
    <div className="waitlist-screen">
      <AppHeader onNavigate={onNavigate} onPrimaryAction={onBack} primaryLabel="Back to Home" />
      <main className="inner-circle-empty page-shell">
        <div className="empty-message">
          <h1>Coming soon to your city</h1>
          <p className="subtle">We’re opening Darbaars in key cities — stay tuned for updates.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-left">
        <img className="footer-brand" src={logoImage} alt="Nawaabi Nasha" />
        <p className="footer-desc">Elevating the essence of Indian hospitality through a lens of modern luxury.</p>

        <nav className="footer-links" aria-label="Footer links">
          <a href="https://docs.google.com/document/d/1CWff7dJP3Q8vV6zS-aL6E0Gj_wNBv_P-ViawzMVnYkc/edit?usp=sharing" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          <a href="https://docs.google.com/document/d/1Jbqi8Hwmwhxlb8IuPkEEqJQIlmlBNzHE_BJwgjp4yiQ/edit?usp=sharing" target="_blank" rel="noreferrer">
            Terms of Service
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className="footer-right">
        <div className="socials">
          <a className="social-btn" href="#instagram" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#17382B" strokeWidth="1.2" fill="#fff"/><circle cx="12" cy="12" r="3.2" stroke="#17382B" strokeWidth="1.2" fill="none"/><circle cx="17.5" cy="6.5" r="0.6" fill="#17382B"/></svg>
          </a>

          <a className="social-btn" href="#twitter" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#17382B" strokeWidth="1.2" fill="#fff"/><path d="M19 7.5c-.5.2-1 .3-1.5.4.5-.3.9-.8 1-1.4-.5.3-1 .6-1.6.8C16 6.7 15.3 6.4 14.6 6.4c-1 0-1.9.8-1.9 1.8 0 .2 0 .4.1.6C10.6 8.7 9 7.7 7.9 6.4c-.2.4-.3.8-.3 1.2 0 .7.3 1.3.8 1.6-.4 0-.8-.1-1.1-.3v.1c0 1.1.7 2 1.7 2.2-.2.1-.4.1-.6.1-.1 0-.2 0-.3-.1.2 1 1.1 1.7 2.1 1.7-1 .8-2.2 1.2-3.5 1.2h-.7c1.3.9 2.9 1.4 4.5 1.4 5.4 0 8.4-4.6 8.4-8.6v-.4c.6-.4 1-.9 1.3-1.5-.5.2-1 .3-1.5.4z" stroke="#17382B" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <div className="copyright">© 2026 Nawaabi Nasha. All rights reserved.</div>
      </div>
    </footer>
  );
}

function RoyalSelectionScreen({ onBack, onNavigate }: WaitlistProps) {
  return (
    <div className="menu-page">
      <AppHeader onNavigate={onNavigate} onPrimaryAction={onBack} primaryLabel="Back to Home" />

      <main className="menu-container">
        <div className="menu-card">
          <div className="menu-header">
            <div className="menu-brand">Nawaabi Nasha</div>
            <p className="menu-tag">A Mouthful of Heritage</p>
          </div>

          <section className="collection">
            <h3>Collection I</h3>
            <h4>Signature Paan</h4>
            <p className="collection-desc">Timeless flavours, crafted to perfection.</p>

            <div className="menu-item">
              <div className="item-name">Meetha Paan</div>
              <div className="item-price">₹250</div>
            </div>
            <p className="item-desc">The timeless classic with hand-pressed gulkand, aromatic saunf, and fine-shredded coconut.</p>

            <div className="menu-item">
              <div className="item-name">Fire Paan</div>
              <div className="item-price">₹450</div>
            </div>
            <p className="item-desc">A theatrical blend of warm spices and cooling sweetness, ignited to awaken the senses.</p>

            <div className="menu-item">
              <div className="item-name">Chocolate Paan</div>
              <div className="item-price">₹650</div>
            </div>
            <p className="item-desc">A decadent fusion of dark cocoa ganache and traditional digestive herbs.</p>

            <div className="menu-item">
              <div className="item-name">Dry Fruit Paan</div>
              <div className="item-price">₹950</div>
            </div>
            <p className="item-desc">A lavish assortment of premium almonds, cashews, and pistachios in a betel embrace.</p>
          </section>

          <section className="collection">
            <h3>Collection II</h3>
            <h4>Premium Paan</h4>
            <p className="collection-desc">Exquisite ingredients for a regal experience.</p>

            <div className="menu-item">
              <div className="item-name">Royal Nawaabi Paan</div>
              <div className="item-price">₹1500</div>
            </div>
            <p className="item-desc">An entry into Mughal legacy featuring rare saffron, kesar, and genuine silver vark.</p>

            <div className="menu-item">
              <div className="item-name">Shahi Zarda Paan</div>
              <div className="item-price">₹3500</div>
            </div>
            <p className="item-desc">Traditional Mughlai zarda blended with vintage mewa and secret aromatic essences.</p>

            <div className="menu-item">
              <div className="item-name">Maharaja Paan</div>
              <div className="item-price">₹5500</div>
            </div>
            <p className="item-desc">The ultimate indulgence. Our masterpiece crafted with the world's rarest heritage ingredients.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function HeritageScreen({ onBack, onNavigate }: WaitlistProps) {
  return (
    <div className="heritage-screen page-shell">
      <AppHeader onNavigate={onNavigate} onPrimaryAction={onBack} primaryLabel="Back to Home" />

      <main className="heritage-layout">
        <section className="heritage-hero" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="heritage-hero-overlay" />
          <div className="heritage-hero-content">
            <p className="heritage-kicker">Established in Tradition</p>
            <h1>A Legacy in Every Leaf</h1>
            <p>
              Reviving the Mughal-era sophistication of paan through a lens of modern
              minimal precision, Nawaabi Nasha is a tribute to the deliberate pace of heritage.
            </p>
          </div>
        </section>

        <section className="heritage-story">
          <div className="heritage-story-left">
            <p className="section-caption">The Craftsmanship</p>
            <h2>The Art of the Betel</h2>
          </div>
          <div className="heritage-story-right">
            <p>
              True luxury cannot be rushed. It resides in the deliberate pace of manual labor
              and the gentle hand-pressing of gulkand made from sun-dried roses, paired with
              carefully selected vintage mewa and aromatic saunf.
            </p>
            <p>
              Our betel leaves are sourced from heritage groves where the soil is tended with
              organic compost and water is filtered through copper channels, ensuring a leaf of
              unparalleled suppleness and flavor profile.
            </p>
          </div>
        </section>

        <section className="heritage-lineage">
          <h2>The Lineage</h2>
          <div className="heritage-timeline">
            <article>
              <span>19th Century Origins</span>
              <h3>The Inspiration</h3>
              <p>Drawing from royal courts where paan was a symbol of hospitality and high culture.</p>
            </article>
            <article>
              <span>Modern Evolution</span>
              <h3>The Renaissance</h3>
              <p>Reimagining the ritual through a botanical core that prioritizes health and sensory clarity.</p>
            </article>
            <article>
              <span>Global Horizons</span>
              <h3>The Vision</h3>
              <p>Nawaabi Nasha becomes a language of fine finishing for the most discerning palates.</p>
            </article>
          </div>
        </section>

        <section className="heritage-quote">
          <div className="heritage-quote-mark">◌</div>
          <blockquote>
            “Purity is our only mandate; heritage is our only guide.”
          </blockquote>
          <p>
            Our commitment to the leaf is absolute. We do not compromise on provenance, or on the
            time required to create a single wrap. It is a slow luxury for a fast world.
          </p>
          <button type="button" className="heritage-button" onClick={() => onNavigate('royal')}>
            Explore the Collection
          </button>
        </section>

        <Footer />
      </main>
    </div>
  );
}

function DarbarScreen({ onBack, onNavigate }: WaitlistProps) {
  return (
    <div className="darbar-screen page-shell">
      <AppHeader onNavigate={onNavigate} onPrimaryAction={onBack} primaryLabel="Back to Home" />

      <main className="darbar-layout">
        <section className="darbar-hero">
          <p className="darbar-kicker">Expansion Manifesto</p>
          <h1>The Royal Expansion</h1>
          <p>
            A cartography of taste. We are meticulously curating the next generation of Darbars
            across India’s most historic enclaves.
          </p>
          <div className="darbar-list">
            <article>
              <span className="darbar-label">Mumbai</span>
              <h2>Colaba, Mumbai</h2>
            </article>
            <article>
              <span className="darbar-label">New Delhi</span>
              <h2>Lutyens, Delhi</h2>
            </article>
            <article>
              <span className="darbar-label">Hyderabad</span>
              <h2>Jubilee Hills, Hyderabad</h2>
            </article>
            <article>
              <span className="darbar-label">Jaipur</span>
              <h2>Civil Lines, Jaipur</h2>
            </article>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState<Screen>('home');

  const navigateTo = (nextScreen: Screen) => {
    setScreen(nextScreen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const moveToWaitlist = () => {
    navigateTo('waitlist');
  };

  const moveToHome = () => {
    navigateTo('home');
  };

  const moveToRoyal = () => {
    navigateTo('royal');
  };

  return (
    <div className="app-shell">
      {screen === 'home' ? (
        <HomeScreen onJoinWaitlist={moveToWaitlist} onNavigate={navigateTo} />
      ) : screen === 'waitlist' ? (
        <div className="page-shell">
          <WaitlistScreen onBack={moveToHome} onNavigate={navigateTo} />
        </div>
      ) : (
        screen === 'royal' ? (
          <div className="page-shell">
            <RoyalSelectionScreen onBack={moveToHome} onNavigate={navigateTo} />
          </div>
        ) : screen === 'heritage' ? (
          <HeritageScreen onBack={moveToHome} onNavigate={navigateTo} />
        ) : (
          <DarbarScreen onBack={moveToHome} onNavigate={navigateTo} />
        )
      )}
    </div>
  );
}

export default App;