import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';

export default function FounderPack() {
  const { t } = useTranslation();

  return (
    <section className='flex flex-col justify-center items-center px-4 w-full pb-4'>
      <h1 className='px-4 py-1 mt-4 w-full text-3xl text-white border-8 border-white bg-navbar'>
        {t('FounderTitle')}
      </h1>

      <article className='px-4 pt-1 pb-2 border-8 border-white bg-origins my-4 text-white'>
        <h2 className='text-2xl'>{t('FounderSubtitle')}</h2>
        <p className='text-xl py-1'>{t('FounderDescription')}</p>
        <Link
          href='/founderPackInfo'
          className={'hidden lg:inline-block navbarButton text-xl'}>
          {t('FounderBtn')}
        </Link>
        <Link
          href='/founderPackInfo'
          className={'lg:hidden inline-block navbarButton text-xl'}>
          {t('FounderBtnMobile')}
        </Link>
      </article>

      <article className='border-8 border-white'>
        <img
          src={t('founderPackImg')}
          className='hidden md:inline-block'
          alt='FounderPackImg'
          loading='lazy'
        />
        <img
          src={t('founderPackImgMobile')}
          className='md:hidden inline-block'
          alt='FounderPackImg'
          loading='lazy'
        />
      </article>
    </section>
  );
}
