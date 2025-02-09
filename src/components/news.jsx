import NewsCard from './newsCard';
import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();

  return (
    <section
      id='/news'
      className='flex flex-col justify-center items-center px-4 w-full'
    >
      <h1 className='px-4 py-1 mt-4 w-full text-3xl text-white border-8 border-white bg-navbar'>
        {t('News')}
      </h1>

      <article className='flex flex-col max-sm:w-80 md:flex-row gap-4 md:justify-around my-4 md:w-full md:h-full'>
        <NewsCard
          title={t('Title')}
          description={t('Description')}
          image={'/KissEmote.gif'}
          date={'6/02/2025'}
          link={t('link')}
          linkText={t('linkText')}
        />
        <NewsCard
          title={t('Title1')}
          description={t('Description1')}
          image={'/DancingGM.gif'}
          date={'06/01/2025'}
          link={t('link1')}
          linkText={t('linkText1')}
        />
        <NewsCard
          title={t('Title2')}
          description={t('Description2')}
          image={'/SuprisedEmote.gif'}
          date={'03/01/2025'}
          link={t('link2')}
          linkText={t('linkText2')}
        />
      </article>
    </section>
  );
}
