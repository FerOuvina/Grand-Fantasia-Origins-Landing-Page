import Footer from './footer';
import NavbarSecondary from './navbarSecundary';
import Features2 from './Features2';
import DiscordWidget from './discordWidget';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../context/UserContext';
import { postLogin } from '../services/auth';
import { Link } from 'wouter';
import '../css/navbar.css';

const MySwal = withReactContent(Swal);

export default function Login() {
  const { t } = useTranslation();
  const usernameError = t('usernameError');
  const passwordErrorNone = t('passwordErrorNone');
  const passwordErrorLength = t('passwordErrorLength');
  const validationError = t('validationError');
  const { setUser, setUserAP } = useContext(UserContext);
  const [message, setMessage] = useState();
  const [formData, setFormData] = useState({
    username: '',
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

    if (!formData.username) {
      errorMessages.push(username);
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

  const handleLogin = async () => {
    try {
      const result = await postLogin(formData);

      // Save the token in localStorage
      localStorage.setItem('authToken', result.token);
      setUser({ name: result.user.username, email: result.user.email });
      const resultAP = await getUserAP(result.token);
      setUserAP({ AP: result.pvalues });

      MySwal.fire({
        icon: 'success',
        title: t('LoginOK'),
        text: t('LoginRedirect'),
        position: 'center',
        showConfirmButton: true,
        timer: 3000,
        timerProgressBar: true
      });
      // Update app state or navigate to the dashboard
      setMessage('Login successful!');
    } catch (error) {
      setMessage(error.message || 'Login failed');
      MySwal.fire({
        icon: 'error',
        title: t('LoginError'),
        html: error.response ? error.response?.data?.error : t('tryAgainLater'),
        position: 'center',
        showConfirmButton: true,
        timer: 10000,
        timerProgressBar: true,
        background: '#f8d7da',
        iconColor: '#dc3545'
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleLogin();
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <section className='flex flex-col w-full max-w-[1250px] justify-center items-center bg-green h-full'>
      <NavbarSecondary />
      <article className='my-4 w-full border-8 border-white bg-background'>
        <div className='flex gap-4 justify-center items-center py-4'>
          <div className='h-[313.4px] flex flex-col items-center my-4 border-8 border-white w-fit'>
            <h1 className='px-4 py-2 w-full text-3xl text-white bg-origins'>
              {t('loginTitle')}
            </h1>

            <hr className='w-full border-4 border-white' />

            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-3 justify-center items-center px-4 py-2 w-full h-full text-xl text-white bg-origins'>
              <div className='grid relative grid-cols-2 gap-3 pr-4 w-full'>
                <label htmlFor='username' className='text-right'>
                  {t('usernameField')}
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  className='inputField'
                />
              </div>
              <div className='grid relative grid-cols-2 gap-3 pr-4 w-full'>
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
              <div className='grid grid-cols-2 gap-3 pr-4 mt-2 w-full'>
                <button type='button' className='navbarButton'>
                  <Link href='/comingSoon'>{t('forgotPassword')}</Link>
                </button>
                <button type='submit' className='navbarButton'>
                  {t('loginButton')}
                </button>
              </div>
            </form>
          </div>

          <DiscordWidget />
        </div>
      </article>
      <Features2 />
      <Footer />
    </section>
  );
}
