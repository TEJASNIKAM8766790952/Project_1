// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Payal1 from './assets/Payal1.PNG';
import Payal2 from './assets/Payal2.PNG';
import Payal3 from './assets/Payal3.PNG';
import Payal4 from './assets/Payal4.PNG';
import Payal5 from './assets/Payal5.PNG';
import Payal6 from './assets/Payal6.PNG';
import Payal7 from './assets/Payal7.PNG';
import Payal8 from './assets/Payal8.PNG';
import Payal9 from './assets/Payal9.PNG';
import Payal10 from './assets/Payal10.PNG';
import Payal11 from './assets/Payal11.PNG';
import Payal12 from './assets/Payal12.PNG';
import Payal14 from './assets/Payal14.PNG';
import Payal16 from './assets/Payal16.PNG';
import Payal17 from './assets/Payal17.PNG';
import Payal18 from './assets/Payal18.png';
import Payal20 from './assets/Payal20.png';
import Payal23 from './assets/Payal23.png';
import Payal24 from './assets/Payal24.png';
import Payal25 from './assets/Payal25.png';
import Payal26 from './assets/Payal26.PNG';
import Payal27 from './assets/Payal27.PNG';
import Payal28 from './assets/Payal28.PNG';
import Payal29 from './assets/Payal29.PNG';
import Payal32 from './assets/Payal32.PNG';
import Payal33 from './assets/Payal33.PNG';
import Payal35 from './assets/Payal35.PNG';
import Payal36 from './assets/Payal36.PNG';
import Payal37 from './assets/Payal37.PNG';
import Payal38 from './assets/Payal38.PNG';
import Payal39 from './assets/payal39.PNG';
import Payal40 from './assets/payal40.PNG';
import Payal41 from './assets/payal41.PNG';
import Payal42 from './assets/payal42.PNG';
import Payal43 from './assets/payal43.PNG';
import Payal44 from './assets/payal44.PNG';
import Payal45 from './assets/payal45.PNG';
import Payal46 from './assets/payal46.PNG';
import Payal47 from './assets/payal47.PNG';
import Payal48 from './assets/payal48.PNG';
import Payal49 from './assets/payal49.PNG';
import Payal50 from './assets/payal50.PNG';
import Payal51 from './assets/payal51.PNG';
import Payal52 from './assets/payal52.PNG';
import Payal53 from './assets/payal53.PNG';
import Payal55 from './assets/payal55.PNG';


const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorHovering, setIsCursorHovering] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Sample portfolio items - replace images with your own
 const portfolioItems = [
  { id: 1, category: 'fashion', title: 'Look 1', image: Payal1, description: 'Fashion shoot' },
  { id: 2, category: 'editorial', title: 'Look 2', image: Payal2, description: 'Editorial shoot' },
  { id: 3, category: 'beauty', title: 'Look 3', image: Payal3, description: 'Beauty shoot' },
  { id: 4, category: 'fashion', title: 'Look 4', image: Payal4, description: 'Fashion shoot' },
  { id: 5, category: 'editorial', title: 'Look 5', image: Payal5, description: 'Editorial shoot' },
  { id: 6, category: 'beauty', title: 'Look 6', image: Payal6, description: 'Beauty shoot' },
  { id: 7, category: 'fashion', title: 'Look 7', image: Payal7, description: 'Fashion shoot' },
  { id: 9, category: 'beauty', title: 'Look 9', image: Payal9, description: 'Beauty shoot' },
  { id: 10, category: 'fashion', title: 'Look 10', image: Payal10, description: 'Fashion shoot' },
  { id: 11, category: 'editorial', title: 'Look 11', image: Payal11, description: 'Editorial shoot' },
  { id: 12, category: 'beauty', title: 'Look 12', image: Payal12, description: 'Beauty shoot' },
  { id: 14, category: 'editorial', title: 'Look 14', image: Payal14, description: 'Editorial shoot' },
  { id: 16, category: 'fashion', title: 'Look 16', image: Payal16, description: 'Fashion shoot' },
  { id: 17, category: 'editorial', title: 'Look 17', image: Payal17, description: 'Editorial shoot' },
  { id: 18, category: 'beauty', title: 'Look 18', image: Payal18, description: 'Beauty shoot' },
  { id: 23, category: 'editorial', title: 'Look 23', image: Payal23, description: 'Editorial shoot' },
  { id: 25, category: 'fashion', title: 'Look 25', image: Payal25, description: 'Fashion shoot' },
  { id: 26, category: 'editorial', title: 'Look 26', image: Payal26, description: 'Editorial shoot' },
  { id: 27, category: 'beauty', title: 'Look 27', image: Payal27, description: 'Beauty shoot' },
  { id: 28, category: 'fashion', title: 'Look 28', image: Payal28, description: 'Fashion shoot' },
  { id: 29, category: 'editorial', title: 'Look 29', image: Payal29, description: 'Editorial shoot' },
  { id: 32, category: 'editorial', title: 'Look 32', image: Payal32, description: 'Editorial shoot' },
  { id: 33, category: 'beauty', title: 'Look 33', image: Payal33, description: 'Beauty shoot' },
  { id: 35, category: 'editorial', title: 'Look 35', image: Payal35, description: 'Editorial shoot' },
  { id: 36, category: 'beauty', title: 'Look 36', image: Payal36, description: 'Beauty shoot' },
  { id: 38, category: 'editorial', title: 'Look 38', image: Payal38, description: 'Editorial shoot' },
  { id: 40, category: 'fashion', title: 'Look 40', image: Payal40, description: 'Fashion shoot' },
  { id: 41, category: 'editorial', title: 'Look 41', image: Payal41, description: 'Editorial shoot' },
  { id: 42, category: 'beauty', title: 'Look 42', image: Payal42, description: 'Beauty shoot' },
  { id: 43, category: 'fashion', title: 'Look 43', image: Payal43, description: 'Fashion shoot' },
  { id: 44, category: 'editorial', title: 'Look 44', image: Payal44, description: 'Editorial shoot' },
  { id: 45, category: 'beauty', title: 'Look 45', image: Payal45, description: 'Beauty shoot' },
  { id: 46, category: 'fashion', title: 'Look 46', image: Payal46, description: 'Fashion shoot' },
  { id: 47, category: 'editorial', title: 'Look 47', image: Payal47, description: 'Editorial shoot' },
  { id: 48, category: 'beauty', title: 'Look 48', image: Payal48, description: 'Beauty shoot' },
  { id: 49, category: 'fashion', title: 'Look 49', image: Payal49, description: 'Fashion shoot' },
  { id: 50, category: 'editorial', title: 'Look 50', image: Payal50, description: 'Editorial shoot' },
  { id: 51, category: 'beauty', title: 'Look 51', image: Payal51, description: 'Beauty shoot' },
  { id: 52, category: 'fashion', title: 'Look 52', image: Payal52, description: 'Fashion shoot' },
  { id: 53, category: 'editorial', title: 'Look 53', image: Payal53, description: 'Editorial shoot' },
  { id: 55, category: 'fashion', title: 'Look 55', image: Payal55, description: 'Fashion shoot' },
];
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = [
        { id: 'home', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'portfolio', ref: portfolioRef },
        { id: 'contact', ref: contactRef },
      ];
      
      for (let section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => {
      setShowThankYou(false);
    }, 5000);
  };

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="app">
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${isCursorHovering ? 'hovering' : ''}`}
        style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }}
      />
      
      {/* Thank You Message Toast */}
      {showThankYou && (
        <div className="thankyou-toast">
          <div className="toast-content">
            <div className="toast-icon">✨</div>
            <div className="toast-text">
              <h4>Thank You!</h4>
              <p>Your message has been sent successfully. I'll get back to you soon!</p>
            </div>
            <button className="toast-close" onClick={() => setShowThankYou(false)}>×</button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">Bong girl payal</span>
            <div className="logo-dot"></div>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'portfolio', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={() => setIsCursorHovering(true)}
            onMouseLeave={() => setIsCursorHovering(false)}
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="hero-section">
        <div className="hero-bg">
          <div className="hero-bg-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text-container">
            <span className="hero-subtitle animate-slide-up">Welcome to my world</span>
            <h1 className="hero-title animate-slide-up">
              <span className="title-line">Payal </span>
              <span className="title-line">Bakshi</span>
            </h1>
            <div className="hero-description animate-slide-up">
              <p>International Model & Creative Artist</p>
              <div className="hero-line"></div>
            </div>
            <button 
              className="hero-cta animate-slide-up"
              onClick={() => scrollToSection('portfolio')}
              onMouseEnter={() => setIsCursorHovering(true)}
              onMouseLeave={() => setIsCursorHovering(false)}
            >
              View Portfolio
              <span className="cta-arrow">→</span>
            </button>
          </div>
          
          <div className="hero-stats animate-fade-in">
            <div className="stat">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Fashion Shows</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>Magazine Covers</p>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

   {/* About Section */}
<section id="about" ref={aboutRef} className="about-section">
  <div className="section-container">
    <div className="section-header">
      <span className="section-tag">About Me</span>
      <h2>Behind the Lens</h2>
      <div className="section-line"></div>
    </div>
    
    <div className="about-content">
      <div className="about-text">
        <div className="about-quote">
          <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p>
            Modeling is not just about posing for the camera. It's about telling a story, expressing emotions, and creating art that resonates with people around the world.
          </p>
        </div>
        
        <div className="about-details">
          <div className="detail-item">
            <h4>Background</h4>
            <p>
              Born in Paris, raised in Milan, I've been immersed in the fashion world from a young age. My journey began at 16 when I was discovered at a local fashion show.
            </p>
          </div>
          <div className="detail-item">
            <h4>Approach</h4>
            <p>
              I believe in authentic representation and bringing genuine emotion to every shoot. Each photograph tells a unique story.
            </p>
          </div>
          <div className="detail-item">
            <h4>Vision</h4>
            <p>
              To redefine beauty standards and inspire confidence in people of all ages, backgrounds, and body types through my work.
            </p>
          </div>
        </div>
        
        <div className="about-signature">
          <div className="signature-line"></div>
          <p className="signature-name">Payal Bakshi</p>
          <p className="signature-title">Model & Creative Director</p>
        </div>
      </div>
      
      <div className="about-image">
        <div className="image-frame">
          <div className="image-glow"></div>
          <div className="image-wrapper">
            <img 
              src={Payal26}
              alt="Payal Bakshi"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="portfolio-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2>Featured Work</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="portfolio-filters">
            {['all', 'fashion', 'editorial', 'beauty'].map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="portfolio-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`portfolio-item ${!loadedImages[item.id] ? 'loading' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  setSelectedItem(item);
                  setIsCursorHovering(true);
                }}
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                {!loadedImages[item.id] && <div className="image-loader"></div>}
                <img 
                  src={item.image} 
                  alt={item.title}
                  onLoad={() => handleImageLoad(item.id)}
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="view-more">View Project →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Portfolio Items */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>×</button>
            <img src={selectedItem.image} alt={selectedItem.title} />
            <div className="modal-info">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
              <div className="modal-category">{selectedItem.category}</div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Get in Touch</span>
            <h2>Let's Connect</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">📧</div>
                <h4>Email</h4>
                <p>Payalthebonggirl@gmail.com</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📱</div>
                <h4>Phone</h4>
                <p>+91 8777342004</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <div className="input-border"></div>
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <div className="input-border"></div>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <div className="input-border"></div>
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <div className="input-border"></div>
              </div>
              <button 
                type="submit"
                className="submit-btn"
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                Send Message
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
         <div className="footer-social">
  <a 
    href="https://instagram.com/bonggirlpayal" 
    target="_blank" 
    rel="noopener noreferrer"
    onMouseEnter={() => setIsCursorHovering(true)}
    onMouseLeave={() => setIsCursorHovering(false)}
  >
    Instagram (@bonggirlpayal)
  </a>

  <a 
    href="#" 
    onMouseEnter={() => setIsCursorHovering(true)}
    onMouseLeave={() => setIsCursorHovering(false)}
  >
    YouTube
  </a>
</div>
          <div className="footer-copyright">
            <p>&copy; 2024 Payal  Bakshi. All rights reserved.</p>
           <p id="credit" className="credit-line">
            Design & Developed with <span className="heart">❤️</span> by Tejas Nikam
          </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;