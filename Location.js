const Location = () => {
  return (
    <section id="location" className="reveal-section py-20 px-4 bg-black" data-testid="location-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="royal-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6" data-testid="location-title">
          Find Us
        </h2>
        <p className="text-gray-300 text-lg text-center mb-12" data-testid="location-address">
          4th Floor, ML Acropolis Mall, Sevoke Rd, Siliguri
        </p>
        
        <div className="w-full h-96 rounded-lg overflow-hidden gold-border gold-glow" data-testid="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8757!2d88.4278!3d26.7271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441c5e0d00001%3A0x1!2sML%20Acropolis%20Mall!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Error Brew & Pub Location"
            data-testid="google-maps-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;