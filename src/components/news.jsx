import NewsCard from './newsCard';
import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();

  return (
    <section
      id='news'
      className='flex flex-col justify-center items-center px-4 w-full'
    >
      <h1 className='px-4 py-1 mt-4 w-full text-3xl text-white border-8 border-white bg-navbar'>
        {t('News')}
      </h1>

      <article className='flex flex-row gap-4 justify-around my-4 w-full h-full'>
        <NewsCard
          title={t('Title')}
          description={t('Description')}
          image={'/Random-1822.jpg'}
          date={'12/12/12'}
        />
        <NewsCard
          title={t('Title1')}
          description={t('Description1')}
          image={'/Random-1822.jpg'}
          date={'12/12/12'}
        />
        <NewsCard
          title={t('Title2')}
          description={t('Description2')}
          image={'/Random-1822.jpg'}
          date={'12/12/12'}
        />
      </article>
    </section>
  );
}
