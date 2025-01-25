import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGSAP } from '@gsap/react';
import { Link, useLocation } from 'wouter';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import gsap from 'gsap';
import '../css/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, navigate] = useLocation();
  const dropdownRef = useRef(null);
  const { user, userAP, setUser } = useContext(UserContext);
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
        y: 20.8,
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

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    navigate('/');
  };

  return (
    <section className='md:hidden w-full mt-4 lg:max-w-[1250px] z-20 sticky top-0'>
      <ul className='sm:hidden flex gap-10 justify-between items-center navbarSecondary h-16 text-sm sm:text-lg'>
        <ul className='flex gap-4 justify-center w-full'>
          {user ? (
            <>
              <Link href='/profile'>
                <li className='navbarButton'>{user.name}</li>
              </Link>
              <Link href='/comingSoon'>
                <li className='navbarButton'>
                  {t('yourAP')}
                  {userAP ? userAP.AP : 0}
                </li>
              </Link>
              <li className='navbarButton'>
                <button onClick={handleLogout}>{t('Logout')}</button>
              </li>
            </>
          ) : (
            <>
              <Link href={'/register'} className=''>
                <li>{t('Register')} ▷</li>
              </Link>
              <Link href={'/login'} className=''>
                <li>{t('Login')} </li>
              </Link>
            </>
          )}
          {/* Dropdown */}
          <li className='relative' ref={dropdownRef}>
            <button onClick={toggleDropdown} className='flex gap-2'>
              {t('Language')}
            </button>
          </li>
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
          <a
            href={
              'https://drive.google.com/file/d/1mRXUyiEW_VIJGmor5oiGxMYR4SyNAMCL/view?usp=sharing'
            }
            target='_blank'
            className=''>
            <li>{t('Download')}</li>
          </a>
        </ul>
      </ul>

      <ul className='hidden sm:flex gap-2 justify-end py-2 w-full'>
        {user ? (
          <>
            <Link href='/profile'>
              <li className='navbarButton'>{user.name}</li>
            </Link>
            <Link href='/comingSoon'>
              <li className='navbarButton'>
                {t('yourAP')}
                {userAP ? userAP.AP : 0}
              </li>
            </Link>
            <li className='navbarButton'>
              <button onClick={handleLogout}>{t('Logout')}</button>
            </li>
          </>
        ) : (
          <>
            <Link href={'/register'} className=''>
              <li>{t('Register')} ▷</li>
            </Link>
            <Link href={'/login'} className=''>
              <li>{t('Login')} </li>
            </Link>
          </>
        )}
        <li className='relative' ref={dropdownRef}>
          <button onClick={toggleDropdown} className='flex gap-2 navbarButton'>
            <img
              src='globe.svg'
              alt='globe'
              width={20}
              height={20}
              title='globe'
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
      <ul className='hidden sm:flex gap-10 relative justify-between items-center navbarSecondary h-16'>
        <div className='absolute'>
          <a href={'/'}>
            <img
              src={'/logo.jpg'}
              alt='logo'
              width={150}
              height={150}
              loading='lazy'
            />
          </a>
        </div>

        <ul className='flex gap-10 justify-center w-full text-2xl'>
          <Link href={'/'} className='hover:underline hover:drop-shadow-lg'>
            <li>{t('HomeNav')}</li>
          </Link>
          <li>
            <a
              href={'/#/news'}
              className='hover:underline hover:drop-shadow-lg'>
              {t('NewsNav')}
            </a>
          </li>
          <li>
            <a
              href={'/#/classes'}
              className='hover:underline hover:drop-shadow-lg'>
              {t('ClassesNav')}
            </a>
          </li>
          <li>
            <a
              href={'/#/features'}
              className='hover:underline hover:drop-shadow-lg'>
              {t('FeaturesNav')}
            </a>
          </li>
          <ul className='flex gap-5 self-center'>
            <li>
              <a target='_blank' href={'https://discord.gg/DUpgWc9Gg5'}>
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
              <a target='_blank' href={'https://www.youtube.com/@GFAwakening'}>
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
