import { useTranslation } from 'react-i18next';

export default function AwardScale() {
  const { t } = useTranslation();

  return (
    <section className='flex flex-col justify-center items-center px-4 w-full pb-4'>
      <h1 className='px-4 py-1 mt-4 w-full text-3xl text-white border-8 border-white bg-navbar'>
        {t('AwardScaleTitle')}
      </h1>
      <article className='px-4 pt-1 pb-2 border-8 border-white bg-origins my-4 text-white'>
        <p className='text-2xl w-full'>{t('AwardScaleSubtitle')}</p>
      </article>
      <article className='border-8 border-white'>
        <a href='https://discord.com/channels/1194037105156964437/1309735718255460403'>
          <img src={t('AwardScaleIMG')} alt='AwardScaleIMG' />
        </a>
      </article>
    </section>
  );
}
