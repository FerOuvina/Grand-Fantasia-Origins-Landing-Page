import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import '../css/navbar.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='flex flex-col w-full bg-white max-w-[1250px]'>
      <section className='flex justify-evenly p-4 bg-origins'>
        <Link href={'/register'} className='p-2 text-xl text-center Button'>
          {t('Register')}
        </Link>
        <a
          href={
            'https://drive.google.com/file/d/1mRXUyiEW_VIJGmor5oiGxMYR4SyNAMCL/view?usp=sharing'
          }
          target='_blank'
          className='p-2 text-xl text-center Button'>
          {t('Download')}
        </a>
      </section>
      <section className='flex justify-center'>
        <ul className='flex justify-evenly items-center w-full'>
          <li>
            <Link href={'/'} className='hidden md:inline-block'>
              <img
                src={'/logo.jpg'}
                alt='Random'
                width={100}
                height={100}
                loading='lazy'
              />
            </Link>

            <Link href={'/'} className='md:hidden inline-block'>
              <img
                src={'/logo.jpg'}
                alt='Random'
                width={50}
                height={50}
                loading='lazy'
              />
            </Link>
          </li>
          <ul className='flex flex-col items-center'>
            <li className='text-[9px] md:text-lg'>{t('Copyright')}</li>
            <li>
              <a
                href='mailto:contact@gfawakening.com'
                className='hover:underline text-blue-600 text-[12px] md:text-lg'>
                contact@gfawakening.online
              </a>
            </li>
          </ul>
          <ul className='hidden md:flex gap-5'>
            <li>
              <a target='_blank' href={'https://discord.gg/DUpgWc9Gg5'}>
                <img
                  src={'/discord.svg'}
                  alt='discord'
                  width={40}
                  height={40}
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
                  width={40}
                  height={40}
                  title='instagram'
                  className='icons'
                  loading='lazy'
                />
              </a>
            </li>
            <li>
              <a href={'https://www.youtube.com/@GFAwakening'}>
                <img
                  src={'/youtube.svg'}
                  alt='twitter'
                  width={40}
                  height={40}
                  title='youtube'
                  className='icons'
                  loading='lazy'
                />
              </a>
            </li>
          </ul>

          <ul className='flex md:hidden gap-2'>
            <li>
              <a target='_blank' href={'https://discord.gg/DUpgWc9Gg5'}>
                <img
                  src={'/discord.svg'}
                  alt='discord'
                  width={20}
                  height={20}
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
                  width={20}
                  height={20}
                  title='instagram'
                  className='icons'
                  loading='lazy'
                />
              </a>
            </li>
            <li>
              <a href={'https://www.youtube.com/@GFAwakening'}>
                <img
                  src={'/youtube.svg'}
                  alt='twitter'
                  width={20}
                  height={20}
                  title='youtube'
                  className='icons'
                  loading='lazy'
                />
              </a>
            </li>
          </ul>
        </ul>
      </section>
    </footer>
  );
}
