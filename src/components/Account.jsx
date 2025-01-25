import NavbarSecondary from './navbarSecundary';
import MobileNavbar from './mobileNavbar';
import Footer from './footer';
import News from './news';
import ScrollerButton from './scrollerButtons';
import { UserContext } from '../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import '../css/navbar.css';

export default function Account() {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const [location, navigate] = useLocation();
  const [selectedImage, setSelectedImage] = useState(
    '/classes/archer-thumbs.png'
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const profileImages = [
    '/classes/warrior-thumbs.png',
    '/classes/archer-thumbs.png',
    '/classes/priest-thumbs.png',
    '/classes/mage-thumbs.png',
    '/classes/machinist-thumbs.png',
    '/classes/traveler-thumbs.png'
  ];

  // Load image from localStorage on mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  }, []);

  // Save image to localStorage when changed
  const handleImageSelect = (image) => {
    setSelectedImage(image);
    localStorage.setItem('profileImage', image);
    setDropdownOpen(false);
  };

  // If the user goes to the profile section and the user is not logged in, return them to the main page
  useEffect(() => {
    user ? null : navigate('/loginFirst');
  }, []);

  return (
    <main className='w-full max-w-[1250px]'>
      <NavbarSecondary />
      <MobileNavbar />

      <section className='flex flex-col w-full max-w-[1250px] border-8 border-white bg-background mt-4'>
        <h2 className='px-4 py-1 border-8 border-white bg-navbar mt-4 mx-4 text-3xl text-white'>
          {t('AccountTitle')}
        </h2>
        <article className='flex flex-col md:flex-row gap-4 md:gap-0 justify-evenly p-4 m-4 mb-0 border-8 border-white'>
          <div className='relative flex flex-col items-center border-8 border-white'>
            <img
              src={selectedImage}
              alt='Profile'
              className='w-64 object-cover'
            />

            <div className='flex flex-col bg-white w-full mt-auto'>
              <ul className='flex flex-col gap-2 px-4 py-2'>
                <li className='text-2xl text-center'>Welcome back</li>
                <li className='text-2xl text-center'>
                  • {user ? user.name : ''}
                </li>
              </ul>
            </div>

            <div className='bg-origins w-full text-center p-4'>
              <button
                className='text-2xl navbarButton'
                onClick={() => setDropdownOpen(!dropdownOpen)}>
                {t('AccountChangeImgBtn')}
              </button>
            </div>
            {dropdownOpen && (
              <div className='absolute grid grid-cols-3 bg-white border rounded shadow-lg right-50 bottom-16 md:right-[7px] md:top-[230px]'>
                {profileImages.map((image, index) => (
                  <div
                    key={index}
                    className='p-2 hover:bg-gray-200 cursor-pointer'
                    onClick={() => handleImageSelect(image)}>
                    <img
                      src={image}
                      alt={`Option ${index + 1}`}
                      className='w-16 h-16 object-cover'
                      loading='lazy'
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className='flex flex-col border-8 border-white'>
            <h2 className='text-3xl bg-navbar text-white p-4 border-b-8 border-white'>
              {t('AccountDetailsTitle')}
            </h2>
            <div className='flex my-auto flex-col gap-4 p-4'>
              <ul className='text-2xl'>
                <li>{t('AccountUserName')}</li>
                <li className='border-b-2 border-white'>
                  {user ? user.name : ''}
                </li>
                <li className='mt-4'>{t('AccountEmail')}</li>
                <li className='border-b-2 border-white'>
                  {user ? user.email : ''}
                </li>
              </ul>
            </div>

            <div className='mt-auto w-full flex flex-col bg-origins p-4 gap-4'>
              <Link
                href='/comingSoon'
                className='p-2 text-xl text-center Button'>
                {t('AccountChangePassword')}
              </Link>
              <Link
                href='/comingSoon'
                className='p-2 text-xl text-center Button'>
                {t('AccountBuyAP')}
              </Link>
              <Link
                href='/comingSoon'
                className='p-2 text-xl text-center Button'>
                {t('AccountTransactionHistoryBtn')}
              </Link>
            </div>
          </div>
        </article>

        <News />
      </section>

      <ScrollerButton />
      <Footer />
    </main>
  );
}
