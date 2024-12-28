import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import gsap from 'gsap';
import '../css/mobileNavbar.css';

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (language) => {
    setIsMenuOpen(false);
    i18n.changeLanguage(language);
  };

  return (
    <div className='hamburger-menu sm:relative md:hidden z-10' ref={menuRef}>
      {/* Hamburger Button */}
      <button className='hamburger-button' onClick={toggleMenu}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className='menu-dropdown'>
          <ul className='menu-list'>
            <li>
              <Link href={'/register'} onClick={() => setIsMenuOpen(false)}>
                {t('Register')}
              </Link>
            </li>
            <li>
              <Link href={'/login'} onClick={() => setIsMenuOpen(false)}>
                {t('Login')}
              </Link>
            </li>
            <li className='menu-language'>
              <button onClick={() => handleLanguageChange('en')}>
                {t('English')}
              </button>
              <button onClick={() => handleLanguageChange('es')}>
                {t('Spanish')}
              </button>
              <button onClick={() => handleLanguageChange('pt')}>
                {t('Portuguese')}
              </button>
            </li>
            <li>
              <Link href={'#'} onClick={() => setIsMenuOpen(false)}>
                {t('Download')}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
