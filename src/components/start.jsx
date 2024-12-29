import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Home from '../components/home';
import News from '../components/news';
import Classes from '../components/classes';
import Features from '../components/features';
import Footer from '../components/footer';
import MobileNavbar from './mobileNavbar';
import '../css/global.css';

export default function Start() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <MobileNavbar />
      <Navbar />
      <Home />
      <section className='flex flex-col w-full max-w-[1250px] border-8 border-white bg-background'>
        <News />
        <img
          src={'/divider-8557901.svg'}
          alt='divider'
          width={500}
          height={100}
          className='self-center'
        />
        <Classes />
        <img
          src={'/divider-8557901.svg'}
          alt='divider'
          width={500}
          height={100}
          className='self-center'
        />
        <Features />
      </section>
      <Footer />

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-5 right-5 p-4 bg-navbar text-white rounded-full shadow-lg hover:bg-button hover:text-black transition duration-300 flex items-center justify-center'
          aria-label='Scroll to top'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 15l7-7 7 7'
            />
          </svg>
        </button>
      )}
    </>
  );
}
