import { Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const phoneNumber = '+918918457221';
  const whatsappNumber = '918918457221';

  return (
    <section id="contact" className="reveal-section py-20 px-4 bg-black" data-testid="contact-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="royal-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="contact-title">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-lg mb-12" data-testid="contact-subtitle">
          Have questions or special requests? We're here to help.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={`tel:${phoneNumber}`}
            className="btn-gold-fill flex items-center gap-3 text-lg"
            data-testid="call-now-btn"
          >
            <Phone size={24} />
            <div className="text-left">
              <div className="text-sm font-normal">Call Us Now</div>
              <div className="font-bold">+91 89184 57221</div>
            </div>
          </a>
          
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello%20Error%20Brew%20%26%20Pub%2C%20I%20would%20like%20to%20inquire%20about...`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline flex items-center gap-3 text-lg"
            data-testid="whatsapp-btn"
          >
            <MessageCircle size={24} />
            <div className="text-left">
              <div className="text-sm font-normal">WhatsApp Us</div>
              <div className="font-bold">+91 89184 57221</div>
            </div>
          </a>
        </div>
        
        <div className="mt-12 text-gray-400" data-testid="contact-hours">
          <p className="text-lg font-semibold text-gold mb-2">Operating Hours</p>
          <p>Monday: 12:00 PM – 12:00 AM</p>
          <p>Tuesday – Sunday: 12:00 PM – 2:00 AM</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;