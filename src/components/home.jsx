import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Home() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { type: 'image', src: '/HuntingShowcase.gif', alt: 'Image 1' },
    { type: 'image', src: '/Housing.gif', alt: 'Image 2' },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/-WGNOIzajds?si=A9wwuGQWjyHLy5jq&amp;controls=0',
      alt: 'Video'
    },
    { type: 'image', src: '/MiningShowcase.gif', alt: 'Image 3' }
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='md:flex md:flex-row max-w-[1250px] bg-background border-8 border-white my-4 p-4'>
      {/* Slideshow Section */}
      <article className='hidden lg:flex lg:w-6/12 shadow-lg border-8 border-white relative'>
        {slides[currentSlide].type === 'image' ? (
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className='w-full h-[388px] object-cover'
            loading='lazy'
          />
        ) : (
          <iframe
            src={`${slides[currentSlide].src}&controls=1&autoplay=1`}
            title='Slide video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='w-full h-[388px]'></iframe>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-white hover:text-black'>
          ❮
        </button>
        <button
          onClick={handleNext}
          className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-white hover:text-black'>
          ❯
        </button>

        {/* Navigation Dots */}
        <div className='absolute p-2 bg-origins/60 bottom-2 w-full flex justify-center gap-2'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-6 h-6 rounded-full ${
                currentSlide === index ? 'bg-button' : 'bg-pageGreen'
              }`}></button>
          ))}
        </div>
      </article>

      {/* Text Content */}
      <article className='bg-white lg:w-8/12 shadow-lg border-8 border-white'>
        <ul className='text-xl'>
          <li>
            <h1 className='text-3xl text-center font-bold'>
              {' '}
              {t('HomeTitle')}
            </h1>
            <h2 className='text-2xl pt-1 text-center'>{t('HomeSubtitle')}</h2>
          </li>
          <li className='pt-2'>
            • <span className='font-bold'>{t('HomeItem1B1')}</span>
            {t('HomeItem1N1')}
            <span className='font-bold'>{t('HomeItem1B2')}</span>
            {t('HomeItem1N2')}
            <span className='font-bold'>{t('HomeItem1B3')}</span>{' '}
            {t('HomeItem1N3')}
            <span className='font-bold'>{t('HomeItem1B4')}</span>
          </li>
          <li className='pt-2'>
            • {t('HomeItem2N1')}
            <span className='font-bold'>{t('HomeItem2B1')}</span>
            {t('HomeItem2N2')}
          </li>
          <li className='pt-2'>
            • {t('HomeItem3N1')}
            <span className='font-bold'>{t('HomeItem3B1')}</span>
            {t('HomeItem3N2')}
          </li>
          <li className='py-2'>
            • {t('HomeItem4N1')}
            <span className='font-bold'>{t('HomeItem4B1')}</span>
            {t('HomeItem4N2')}
          </li>
          <li className='lg:hidden'>
            <iframe
              src='https://www.youtube.com/embed/-WGNOIzajds?si=A9wwuGQWjyHLy5jq&amp;controls=0'
              title='Slide video'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
              className='w-full h-[250px] md:h-[350px]'></iframe>
          </li>
        </ul>
      </article>
    </section>
  );
}
