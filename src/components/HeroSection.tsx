import "../styles/HeroSection.css";
import heroImage from "../assets/hero_section.png";

const HeroSection = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background decorative elements */}
      <div className="hero__accent-circle hero__accent-circle--top"></div>
      <div className="hero__accent-circle hero__accent-circle--bottom"></div>

      <div className="hero__container">
        <div className="hero__grid">
          {/* Left Content */}
          <div className="hero__content">
            {/* Tagline */}
            <span className="hero__tagline">
              Sales Solutions That Work 24/7
            </span>

            {/* Main Headline */}
            <h1 className="hero__headline">
              Turn Missed Leads Into{" "}
              <span className="hero__highlight">Consistent Sales</span>
            </h1>

            {/* Subheadline */}
            <p className="hero__subheadline">
              Your business deserves a sales system that never stops working.
              Avaris Sales Solutions provides 24/7 outsourced sales support,
              lead management, and structured follow-ups so every opportunity
              gets the attention it deserves.
            </p>

            {/* Supporting Text / Problem-Solution Block */}
            <div className="hero__supporting">
              <div className="hero__problem">
                <p className="hero__text-muted">
                  Many businesses don't struggle because of a lack of leads.
                  They struggle because leads are missed, responses are delayed,
                  and follow-ups never happen.
                </p>
              </div>

              <div className="hero__solution">
                <span className="hero__solution-badge">We fix that.</span>
                <p className="hero__text-body">
                  With Avaris Sales Solutions, your inquiries are handled, your
                  leads are organized, and your sales process runs smoothly —
                  even when you're offline.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero__actions">
              <a
                href="#contact"
                className="hero__cta hero__cta--primary"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Talk to Our Team
                <svg
                  className="hero__cta-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#services"
                className="hero__cta hero__cta--secondary"
                onClick={(e) => scrollToSection(e, "#services")}
              >
                Start Your Sales System
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero__image-wrapper">
            <div className="hero__image-container">
              <img
                src={heroImage}
                alt="Professional business - Avaris Sales Solutions"
                className="hero__image"
              />
              {/* Decorative elements */}
              <div className="hero__image-accent"></div>
            </div>
          </div>
        </div>

        {/* Stats or Trust Indicators */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">24/7</span>
            <span className="hero__stat-label">Sales Support</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Lead Coverage</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">0</span>
            <span className="hero__stat-label">Missed Opportunities</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="hero__gradient"></div>
    </section>
  );
};

export default HeroSection;
