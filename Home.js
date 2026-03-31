import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import BookingSection from '@/components/BookingSection';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Menu />
      <BookingSection />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;