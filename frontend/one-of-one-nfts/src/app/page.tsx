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
              alt="OneOfOneNFTs" 
              width={40} 
              height={40} 
              priority 
            />
            <span className="logo-text">OneOfOneNFTs</span>
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
            <span className="badge-icon">⚡</span>
            <span>Powered by Blockchain Technology</span>
          </div>
          
          <h1 className="hero-title">
            Next-Generation
            <br />
            <span className="gradient-text">OneOfOneNFTs Testing System</span>
          </h1>
          
          <p className="hero-subtitle">
            Leverage decentralized infrastructure for transparent, tamper-proof OneOfOneNFTs testing.
            <br />
            Build trust with your users through verifiable on-chain experiments.
          </p>

          <div className="hero-cta">
            <ConnectButton />
            <button className="btn-secondary">
              <span>Learn More</span>
              <span className="arrow">→</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">Transparent</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value">On-Chain</div>
              <div className="stat-label">Verification</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value">Secure</div>
              <div className="stat-label">By Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose OneOfOneNFTs?</h2>
          <p className="section-subtitle">
            Combining the power of blockchain with modern OneOfOneNFTs testing methodologies
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper blue">
              <span className="feature-icon">🔒</span>
            </div>
            <h3 className="feature-title">Immutable Results</h3>
            <p className="feature-text">
              All test results are recorded on-chain, ensuring complete transparency and preventing data manipulation.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper purple">
              <span className="feature-icon">⚡</span>
            </div>
            <h3 className="feature-title">Real-Time Analytics</h3>
            <p className="feature-text">
              Monitor your experiments in real-time with instant on-chain data updates and comprehensive dashboards.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper green">
              <span className="feature-icon">🌐</span>
            </div>
            <h3 className="feature-title">Decentralized</h3>
            <p className="feature-text">
              No single point of failure. Your testing infrastructure runs on a global, distributed network.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper orange">
              <span className="feature-icon">✍️</span>
            </div>
            <h3 className="feature-title">Cryptographic Signatures</h3>
            <p className="feature-text">
              Sign and verify test configurations with your wallet, ensuring authenticity and authorization.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper pink">
              <span className="feature-icon">📊</span>
            </div>
            <h3 className="feature-title">Smart Analytics</h3>
            <p className="feature-text">
              Advanced statistical models running on-chain provide accurate, verifiable test results.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper teal">
              <span className="feature-icon">🔗</span>
            </div>
            <h3 className="feature-title">Easy Integration</h3>
            <p className="feature-text">
              Simple SDK and REST API make it easy to integrate with your existing tech stack.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="demo-section">
        <div className="section-header">
          <h2 className="section-title">Try It Now</h2>
          <p className="section-subtitle">
            Experience the power of decentralized OneOfOneNFTs testing
          </p>
        </div>

        <div className="demo-grid">
          <div className="demo-card">
            <div className="demo-card-header">
              <h3>Sign Messages</h3>
              <span className="demo-badge">Interactive</span>
            </div>
            <p className="demo-description">
              Test wallet signing functionality with cryptographic message verification
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
              View real-time connection information and network status
            </p>
            <div className="demo-content compact">
              <InfoList />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">
            Connect your wallet and start running transparent, verifiable A/B tests today
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
                alt="OneOfOneNFTs" 
                width={32} 
                height={32} 
              />
              <span className="logo-text">OneOfOneNFTs</span>
            </div>
            <p className="footer-tagline">
              Decentralized OneOfOneNFTs for the Modern Web
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
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
            </div>

            <div className="footer-section">
              <h4>Community</h4>
              <a href="#">GitHub</a>
              <a href="#">Discord</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 OneOfOneNFTs. Built with ❤️ using Web3 technology.</p>
        </div>
      </footer>
    </div>
  );
}