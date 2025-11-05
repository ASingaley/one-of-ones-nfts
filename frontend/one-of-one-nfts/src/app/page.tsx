// ./src/app/page.tsx
import { ConnectButton } from "@/components/ConnectButton";
import { InfoList } from "@/components/InfoList";
import { ActionButtonList } from "@/components/ActionButtonList";
import { SignMessage } from "@/components/SignMessage";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Image 
              src="/reown.svg" 
              alt="One Of One NFTs" 
              width={40} 
              height={40} 
              priority 
            />
            <span className="logo-text">One Of One NFTs</span>
          </div>
          <div className="nav-actions">
            <ConnectButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🎨</span>
            <span>Living, Breathing Digital Art</span>
          </div>
          
          <h1 className="hero-title">
            NFTs That Evolve
            <br />
            <span className="gradient-text">With Your World</span>
          </h1>
          
          <p className="hero-subtitle">
            Experience Unique One Of One NFTs that transform based on weather, time of day, and your interactions.
            <br />
            Each piece is unique, alive, and stored permanently on-chain.
          </p>

          <div className="hero-cta">
            <ConnectButton />
            <button className="btn-secondary">
              <span>View Gallery</span>
              <span className="arrow">→</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">Dynamic</div>
              <div className="stat-label">Metadata</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value">Real-Time</div>
              <div className="stat-label">Updates</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value">Unique</div>
              <div className="stat-label">Art Pieces</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why One Of One NFTs?</h2>
          <p className="section-subtitle">
            A new generation of NFTs that respond to the world around you
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper blue">
              <span className="feature-icon">🌤️</span>
            </div>
            <h3 className="feature-title">Weather-Reactive</h3>
            <p className="feature-text">
              Your NFT transforms based on real-world weather conditions, creating unique visual experiences that match the environment.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper purple">
              <span className="feature-icon">🌅</span>
            </div>
            <h3 className="feature-title">Time-Aware</h3>
            <p className="feature-text">
              Watch your NFT shift through morning, afternoon, evening, and night phases with distinct visual styles for each time period.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper green">
              <span className="feature-icon">🎮</span>
            </div>
            <h3 className="feature-title">Interactive</h3>
            <p className="feature-text">
              Perform actions that permanently affect your NFT's state and appearance, creating a unique history for each token.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper orange">
              <span className="feature-icon">🎨</span>
            </div>
            <h3 className="feature-title">Generated Art</h3>
            <p className="feature-text">
              Every NFT features dynamically generated SVG artwork that updates in real-time based on multiple environmental factors.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper pink">
              <span className="feature-icon">🔗</span>
            </div>
            <h3 className="feature-title">Fully On-Chain</h3>
            <p className="feature-text">
              All metadata and state changes are stored directly on the blockchain, ensuring permanence and true ownership.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper teal">
              <span className="feature-icon">🔄</span>
            </div>
            <h3 className="feature-title">Evolving Rarity</h3>
            <p className="feature-text">
              Your NFT&apos;s rarity and characteristics evolve over time based on weather patterns, usage, and age.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="demo-section">
        <div className="section-header">
          <h2 className="section-title">Try It Now</h2>
          <p className="section-subtitle">
            Connect your wallet and interact with unique one of one NFTs
          </p>
        </div>

        <div className="demo-grid">
          <div className="demo-card">
            <div className="demo-card-header">
              <h3>Sign Messages</h3>
              <span className="demo-badge">Interactive</span>
            </div>
            <p className="demo-description">
              Test wallet signing functionality to verify ownership and authorize actions
            </p>
            <div className="demo-content">
              <SignMessage />
            </div>
          </div>

          <div className="demo-card">
            <div className="demo-card-header">
              <h3>Connection Details</h3>
              <span className="demo-badge">Live Data</span>
            </div>
            <p className="demo-description">
              View your wallet connection status and network information
            </p>
            <div className="demo-content compact">
              <InfoList />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">How Unique One Of One NFTs Work</h2>
          <p className="section-subtitle">
            Understanding the technology behind living digital art
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper blue">
              <span className="feature-icon">1️⃣</span>
            </div>
            <h3 className="feature-title">Mint Your NFT</h3>
            <p className="feature-text">
              Connect your wallet and mint a unique One Of One NFT. Each token starts with initial weather and time conditions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper purple">
              <span className="feature-icon">2️⃣</span>
            </div>
            <h3 className="feature-title">Environmental Updates</h3>
            <p className="feature-text">
              Update your NFT with current weather data or time of day. The visual appearance transforms based on these conditions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper green">
              <span className="feature-icon">3️⃣</span>
            </div>
            <h3 className="feature-title">Interact & Evolve</h3>
            <p className="feature-text">
              Perform user actions that increment counters and modify your NFT&apos;s state, creating a unique interaction history.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Own Living Art?</h2>
          <p className="cta-subtitle">
            Connect your wallet and start collecting Unique One Of One NFTs that evolve with the world around you
          </p>
          <div className="cta-buttons">
            <ConnectButton />
            <ActionButtonList />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image 
                src="/reown.svg" 
                alt="One Of One NFTs" 
                width={32} 
                height={32} 
              />
              <span className="logo-text">One Of One NFTs</span>
            </div>
            <p className="footer-tagline">
              Unique One Of One NFTs That Respond to the Real World
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Technology</h4>
              <a href="https://reown.com" target="_blank" rel="noopener noreferrer">
                Reown
              </a>
              <a href="https://wagmi.sh" target="_blank" rel="noopener noreferrer">
                Wagmi
              </a>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <a href="#">Smart Contracts</a>
              <a href="#">API Documentation</a>
            </div>

            <div className="footer-section">
              <h4>Community</h4>
              <a href="#">GitHub</a>
              <a href="#">Discord</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 One Of One NFTs. Dynamic art powered by blockchain technology.</p>
        </div>
      </footer>
    </div>
  );
}