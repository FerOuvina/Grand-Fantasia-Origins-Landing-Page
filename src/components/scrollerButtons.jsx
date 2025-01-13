import { useState, useEffect } from 'react';

export default function ScrollerButton() {
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
      {/* Back to Top Button */}
      {isVisible && (
        <div>
          <button
            onClick={scrollToTop}
            className='hidden fixed bottom-5 right-5 p-4 bg-origins text-white rounded-full shadow-lg hover:bg-button hover:text-black transition duration-300 md:flex items-center justify-center'
            aria-label='Scroll to top'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='md:w-6 md:h-6 w-3'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 15l7-7 7 7'
              />
            </svg>
          </button>

          <button
            onClick={scrollToTop}
            className='fixed md:hidden bottom-5 left-5 p-4 bg-origins text-white rounded-full shadow-lg hover:bg-button hover:text-black transition duration-300 flex items-center justify-center'
            aria-label='Scroll to top'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='md:w-6 md:h-6 w-3'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 15l7-7 7 7'
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
