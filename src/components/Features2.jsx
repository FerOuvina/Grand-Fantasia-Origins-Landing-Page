import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import '../css/features.css';

export default function Features2() {
  const { t } = useTranslation();
  const images = [
    '/ClassShowcase.gif',
    '/DngShowcase.gif',
    '/CraftShowcase.gif',
    '/GenkiShowcase.gif'
  ];
  const text1 = (
    <article>
      <h1 className='pb-1 font-bold text-2xl'>{t('Feature1Title')}</h1>
      <h2 className='pb-1'>{t('Feature1Description')}</h2>
      <ul>
        <li>
          <span className='font-bold'>{t('Feature1ClassName1')}</span>
          {t('Feature1ClassDescription1')}
        </li>
        <li>
          <span className='font-bold'>{t('Feature1ClassName2')}</span>
          {t('Feature1ClassDescription2')}
        </li>
      </ul>
    </article>
  );
  const text2 = (
    <article>
      <h1 className='pb-1 font-bold text-2xl'>{t('Feature2Title')}</h1>
      <h2 className='pb-1'>{t('Feature2Description')}</h2>
      <ul>
        <li className='pb-1'>
          <span className='font-bold'>{t('Feature2Point1Title')}</span>
          {t('Feature2Point1Description')}
        </li>
        <li>
          <span className='font-bold'>{t('Feature2Point2Title')}</span>
          {t('Feature2Point2Description')}
        </li>
      </ul>
    </article>
  );
  const text3 = (
    <article>
      <h1 className='pb-1 font-bold text-2xl'>{t('Feature3Title')}</h1>
      <h2 className='pb-1'>{t('Feature3Description')}</h2>
      <ul>
        <li className='pb-1'>
          <span className='font-bold'>{t('Feature3Point1Title')}</span>
          {t('Feature3Point1Description')}
        </li>
        <li>
          <span className='font-bold'>{t('Feature3Point2Title')}</span>
          {t('Feature3Point2Description')}
        </li>
      </ul>
    </article>
  );
  const text4 = (
    <article>
      <h1 className='pb-1 font-bold text-2xl'>{t('Feature4Title')}</h1>
      <h2 className='pb-1'>{t('Feature4Description')}</h2>
      <ul>
        <li className='pb-1'>
          <span className='font-bold'>{t('Feature4Point1Title')}</span>
          {t('Feature4Point1Description')}
        </li>
        <li>
          <span className='font-bold'>{t('Feature4Point2Title')}</span>
          {t('Feature4Point2Description')}
        </li>
      </ul>
    </article>
  );
  const texts = [text1, text2, text3, text4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  const swapImage = (index) => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    gsap.to('.image', {
      display: 'none',
      duration: 0,
      opacity: 0,
      ease: 'power2.in'
    });
    setCurrentIndex(index);
    gsap.to(`#image-${index}`, {
      display: 'flex',
      duration: 1,
      opacity: 1,
      ease: 'back.inOut',
      onComplete: () => {
        isAnimating.current = false;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      swapImage(nextIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <section
      id='/features'
      className='h-full border-8 border-white bg-background p-4 w-full'>
      <h1 className='px-4 py-1 w-full text-3xl text-white border-8 border-white bg-navbar'>
        {t('FEATURES')}
      </h1>

      <article className='flex md:gap-10 justify-center px-3 py-5 mt-4 w-full bg-white'>
        {/* Buttons */}
        <ul className='hidden lg:flex flex-col justify-between'>
          {images.map((image, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                currentIndex === index ? '' : 'gray'
              }`}
              onClick={() => swapImage(index)}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                width={70}
                height={70}
                className='border-8 border-button'
                loading='lazy'
              />
            </li>
          ))}
        </ul>

        {/* Images and Text */}
        <ul className='p-2 bg-button'>
          {images.map((image, index) => (
            <li
              key={index}
              className={`image ${
                currentIndex === index ? 'flex' : 'hidden'
              } max-h-fit flex-col md:flex-row`}
              id={`image-${index}`}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                width={400}
                loading='lazy'
              />
              <p className='p-4 max-w-lg bg-button'>{texts[index]}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
