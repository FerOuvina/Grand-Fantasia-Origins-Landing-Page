import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGSAP } from '@gsap/react';
import { Link } from 'wouter';
import gsap from 'gsap';
import '../css/navbar.css';

export default function NavbarSecondary() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { t, i18n } = useTranslation();

  gsap.registerPlugin(useGSAP);
  const navRef = useRef();
  const setIsOpenFunc = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        gsap.fromTo(
          navRef.current,
          {
            opacity: 1,
            y: 7.8
          },
          {
            opacity: 0,
            y: 300,
            duration: 1,
            ease: 'power3',
            onComplete: setIsOpenFunc
          }
        );
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    gsap.fromTo(
      navRef.current,
      {
        y: -30,
        opacity: 0.2,
        duration: 1
      },
      {
        y: 7.8,
        opacity: 1,
        zIndex: 100,
        ease: 'power3'
      }
    );
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    toggleDropdown();
    i18n.changeLanguage(language);
  };

  return (
    <section className='hidden md:flex flex-col w-full max-w-[1250px]'>
      <ul className='flex gap-2 justify-end py-2 w-full'>
        <Link href={'/register'} className='navbarButton'>
          <li>{t('Register')} ▷</li>
        </Link>
        <Link href={'/login'} className='navbarButton'>
          <li>{t('Login')}</li>
        </Link>
        <li className='relative' ref={dropdownRef}>
          <button onClick={toggleDropdown} className='flex gap-2 navbarButton'>
            <img
              src='globe.svg'
              alt='globe'
              width={20}
              height={20}
              title='globe'
              loading='lazy'
            />
            {t('Language')}
          </button>

          {/* Dropdown */}
          <div ref={navRef} className='relative'>
            {isOpen && (
              <ul className='absolute right-0 z-40 bg-white rounded-md border shadow-md navbarDropdown'>
                <li>
                  <button
                    disabled={i18n.resolvedLanguage === 'en'}
                    onClick={() => handleLanguageChange('en')}
                    className='p-2 w-full text-center rounded-t-lg cursor-pointer hover:bg-navbar hover:text-button'>
                    {t('English')}
                  </button>
                </li>
                <li>
                  <button
                    disabled={i18n.resolvedLanguage === 'es'}
                    onClick={() => handleLanguageChange('es')}
                    className='p-2 w-full text-center cursor-pointer hover:bg-navbar hover:text-button'>
                    {t('Spanish')}
                  </button>
                </li>
                <li>
                  <button
                    disabled={i18n.resolvedLanguage === 'pt'}
                    onClick={() => handleLanguageChange('pt')}
                    className='p-2 w-full text-center rounded-b-lg cursor-pointer hover:bg-navbar hover:text-button'>
                    {t('Portuguese')}
                  </button>
                </li>
              </ul>
            )}
          </div>
        </li>
        {/* End Dropdown */}

        <a
          href={
            'https://drive.google.com/file/d/1mRXUyiEW_VIJGmor5oiGxMYR4SyNAMCL/view?usp=sharing'
          }
          target='_blank'
          className='navbarButton'>
          <li>{t('Download')} &#x1f4e5;&#xfe0e;</li>
        </a>
      </ul>

      {/* Second Navbar */}
      <ul className='flex gap-10 relative justify-between items-center navbarSecondary h-16'>
        <div className='absolute'>
          <Link href={'/'}>
            <img
              src={'/logo.jpg'}
              alt='logo'
              width={200}
              height={200}
              loading='lazy'
            />
          </Link>
        </div>

        <ul className='flex gap-10 justify-center w-full text-2xl'>
          <Link href={'/'} className='hover:underline hover:drop-shadow-lg'>
            <li>{t('HomeNav')}</li>
          </Link>
          <Link href='/#news' className='hover:underline hover:drop-shadow-lg'>
            <li>{t('NewsNav')}</li>
          </Link>
          <Link
            href={'/#classes'}
            className='hover:underline hover:drop-shadow-lg'>
            <li>{t('ClassesNav')}</li>
          </Link>
          <Link
            href={'/#features'}
            className='hover:underline hover:drop-shadow-lg'>
            <li>{t('FeaturesNav')}</li>
          </Link>
          <ul className='flex gap-5 self-center'>
            <li>
              <a target='_blank' href={'https://discord.gg/SjVYmebK6P'}>
                <img
                  src={'/discord.svg'}
                  alt='discord'
                  width={30}
                  height={30}
                  title='discord'
                  className='icons'
                  loading='lazy'
                />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href={'https://www.instagram.com/grand.fantasia.awakening/'}>
                <img
                  src={'/instagram.svg'}
                  alt='instagram'
                  width={30}
                  height={30}
                  title='instagram'
                  className='icons'
                  loading='lazy'
                />
              </a>
            </li>
            <li>
              <a target='_blank' href={'#'}>
                <img
                  src={'/youtube.svg'}
                  alt='twitter'
                  width={30}
                  height={30}
                  title='youtube'
                  className='icons'
                  loading='lazy'
                />
              </a>
            </li>
          </ul>
        </ul>
      </ul>
    </section>
  );
}
