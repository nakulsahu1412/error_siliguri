import { useState, useEffect } from 'react';

const Hero = () => {
  const heroImages = [
    'https://customer-assets.emergentagent.com/job_error-luxury-brew/artifacts/t1w186u2_hotcheetozzevents_14050111_170344260.jpg',
    'https://customer-assets.emergentagent.com/job_error-luxury-brew/artifacts/00lt0lk8_hotcheetozzevents_14050111_170338732.jpg',
    'https://customer-assets.emergentagent.com/job_error-luxury-brew/artifacts/adst9r13_Screenshot_20260331_170059.jpg',
    'https://customer-assets.emergentagent.com/job_error-luxury-brew/artifacts/rkv37jw3_Screenshot_20260331_165416.jpg',
    'https://customer-assets.emergentagent.com/job_error-luxury-brew/artifacts/2lrpdhpm_Screenshot_20260331_165431.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section className="relative h-screen w-full overflow-hidden" data-testid="hero-section">
      {heroImages.map((img, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: currentImage === idx ? 1 : 0,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="royal-heading text-4xl sm:text-5xl lg:text-7xl font-bold mb-6" data-testid="hero-headline">
          Where Luxury Meets the Night
        </h1>
        <p className="text-white text-lg sm:text-xl lg:text-2xl mb-10 max-w-2xl font-light" data-testid="hero-subheadline">
          Siliguri's Premier Destination for Craft Brews & Gourmet Dining
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={scrollToBooking} 
            className="btn-gold-fill"
            data-testid="reserve-vip-table-btn"
          >
            Reserve a VIP Table
          </button>
          <button 
            onClick={scrollToContact}
            className="btn-gold-outline"
            data-testid="hero-contact-btn"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;