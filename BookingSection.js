import { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${BACKEND_URL}/api/bookings`, {
        ...formData,
        guests: parseInt(formData.guests)
      });
      
      setShowModal(true);
      setFormData({
        name: '',
        whatsapp: '',
        date: '',
        time: '',
        guests: '',
        occasion: ''
      });
    } catch (error) {
      console.error('Booking error:', error);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="reveal-section py-20 px-4 bg-black" data-testid="booking-section">
      <div className="max-w-2xl mx-auto">
        <h2 className="royal-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6" data-testid="booking-title">
          Reserve Your VIP Experience
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg" data-testid="booking-subtitle">
          Book your table and let us create an unforgettable evening for you
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6" data-testid="booking-form">
          <div>
            <label className="block text-gold mb-2 font-medium" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
              data-testid="booking-name-input"
            />
          </div>
          
          <div>
            <label className="block text-gold mb-2 font-medium" htmlFor="whatsapp">WhatsApp Number</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="input-field"
              required
              data-testid="booking-whatsapp-input"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gold mb-2 font-medium" htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input-field"
                required
                data-testid="booking-date-input"
              />
            </div>
            
            <div>
              <label className="block text-gold mb-2 font-medium" htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="input-field"
                required
                data-testid="booking-time-input"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gold mb-2 font-medium" htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max="50"
              className="input-field"
              required
              data-testid="booking-guests-input"
            />
          </div>
          
          <div>
            <label className="block text-gold mb-2 font-medium" htmlFor="occasion">Special Occasion (Optional)</label>
            <input
              type="text"
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              placeholder="Birthday, Anniversary, etc."
              className="input-field"
              data-testid="booking-occasion-input"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="btn-gold-fill w-full text-lg"
            data-testid="book-table-submit-btn"
          >
            {loading ? 'Submitting...' : 'Book a Table'}
          </button>
        </form>
      </div>
      
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)} data-testid="booking-confirmation-modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="royal-heading text-3xl font-bold mb-4 text-center" data-testid="modal-title">
              Request Received!
            </h3>
            <p className="text-gray-300 text-center mb-6 leading-relaxed" data-testid="modal-message">
              Our team has received your request and will contact you shortly. Upon successful reservation, you will receive a confirmation email from our team.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="btn-gold-fill w-full"
              data-testid="modal-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingSection;