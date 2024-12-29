import Footer from './footer';
import DiscordWidget from './discordWidget';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import NavbarSecondary from './navbarSecundary';
import MobileNavbar from './mobileNavbar';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/navbar.css';

const MySwal = withReactContent(Swal);

export default function Login() {
  const { t } = useTranslation();
  const usernameError = t('usernameError');
  const passwordErrorNone = t('passwordErrorNone');
  const passwordErrorLength = t('passwordErrorLength');
  const validationError = t('validationError');

  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    let errorMessages = [];

    if (!formData.usernameOrEmail) {
      errorMessages.push(usernameError);
      valid = false;
    }

    if (!formData.password) {
      errorMessages.push(passwordErrorNone);
      valid = false;
    } else if (formData.password.length < 8) {
      errorMessages.push(passwordErrorLength);
      valid = false;
    }

    if (errorMessages.length > 0) {
      MySwal.fire({
        icon: 'error',
        title: validationError,
        html: `<ul>${errorMessages
          .map((msg) => `<li>${msg}</li>`)
          .join('')}</ul>`,
        position: 'bottom-right',
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        timerProgressBar: true,
        background: '#f8d7da',
        iconColor: '#dc3545'
      });
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      // Send data to API
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <section className='flex flex-col w-full max-w-[1250px] justify-center items-center bg-green h-full'>
      <div className='hidden md:inline-block w-full'>
        <NavbarSecondary />
      </div>
      <div className='inline-block md:hidden'>
        <MobileNavbar />
      </div>
      <article className='my-4 px-2 md:px-0 w-full border-8 border-white bg-background'>
        <div className='flex gap-4 justify-center items-center py-4'>
          <div className='h-[314px] flex flex-col items-center my-4 border-8 border-white w-fit'>
            <h1 className='px-4 py-2 w-full text-xl md:text-3xl text-white bg-origins'>
              {t('loginTitle')}
            </h1>

            <hr className='w-full border-4 border-white' />

            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-3 justify-center items-center px-4 py-2 w-full h-full text-lg md:text-xl text-white bg-origins'
            >
              <div className='grid relative grid-cols-2 gap-3 md:pr-2 w-full'>
                <label htmlFor='usernameOrEmail' className='text-right'>
                  {t('usernameField')}
                </label>
                <input
                  type='text'
                  id='usernameOrEmail'
                  name='usernameOrEmail'
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                  className='inputField'
                />
              </div>
              <div className='grid relative grid-cols-2 gap-3 md:pr-2 w-full'>
                <label htmlFor='password' className='text-right'>
                  {t('passwordField')}
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className='inputField'
                />
              </div>
              <div className='grid grid-cols-2 gap-3 md:pr-2 mt-2 w-full'>
                <button
                  type='button'
                  className='navbarButton text-sm md:text-lg'
                >
                  {t('forgotPassword')}
                </button>
                <button
                  type='submit'
                  className='navbarButton text-sm md:text-lg'
                >
                  {t('loginButton')}
                </button>
              </div>
            </form>
          </div>

          <div className='hidden md:inline-block'>
            <DiscordWidget />
          </div>
        </div>
      </article>
      <Footer />
    </section>
  );
}
