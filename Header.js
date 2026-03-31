import { Instagram } from 'lucide-react';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky-header" data-testid="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center" data-testid="logo-container">
          <img 
            src="https://customer-assets.emergentagent.com/job_error-luxury-brew/artifacts/9kg7sggb_error_siliguri_14050111_170755821.jpg" 
            alt="Error Brew & Pub" 
            className="h-12 sm:h-14 w-auto"
            data-testid="error-logo"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
          <button onClick={() => scrollToSection('menu')} className="nav-link" data-testid="nav-menu">Menu</button>
          <button onClick={() => scrollToSection('booking')} className="nav-link" data-testid="nav-booking">Book Table</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link" data-testid="nav-contact">Contact</button>
          <button onClick={() => scrollToSection('location')} className="nav-link" data-testid="nav-location">Location</button>
        </nav>
        
        <a 
          href="https://www.instagram.com/error_siliguri" 
          target="_blank" 
          rel="noopener noreferrer"
          className="instagram-icon"
          data-testid="error-instagram-link"
        >
          <Instagram size={28} />
        </a>
      </div>
    </header>
  );
};

export default Header;