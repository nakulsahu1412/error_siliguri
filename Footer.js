import { Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gold py-12 px-4" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left" data-testid="footer-error-info">
            <h3 className="royal-heading text-2xl font-bold mb-2">Error Brew & Pub</h3>
            <p className="text-gray-400">Where Luxury Meets the Night</p>
            <p className="text-gray-400 mt-2">4th Floor, ML Acropolis Mall, Siliguri</p>
          </div>
          
          <div className="flex flex-col items-center gap-4" data-testid="footer-social">
            <a
              href="https://www.instagram.com/error_siliguri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 instagram-icon"
              data-testid="footer-error-instagram"
            >
              <Instagram size={32} />
              <span className="text-lg font-semibold">@error_siliguri</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center" data-testid="footer-developer-credit">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by</span>
            <a
              href="https://www.instagram.com/_nakulll_14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors font-semibold flex items-center gap-2"
              data-testid="developer-instagram-link"
            >
              <span>Nakul Sahu</span>
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;