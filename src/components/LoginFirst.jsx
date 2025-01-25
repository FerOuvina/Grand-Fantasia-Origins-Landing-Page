import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';

export default function LoginFirst() {
  const { t } = useTranslation();
  return (
    <main>
      <section className='h-svh flex flex-col w-full max-w-[1250px] border-8 border-white bg-background justify-center items-center'>
        <article className='flex flex-col h-full'>
          <Link href='/'>
            <img src='/logo.jpg' alt='logo' width={400} />
          </Link>

          <div className='mt-auto'>
            <div className='w-full bg-white p-4 flex flex-col gap-4 items-center'>
              <h1 className='text-center text-3xl text-red-500 font-bold'>
                {t('LoginFirstError')}
              </h1>
              <img src={'/divider-5318234.svg'} width={350} height={10} />
              <h2 className='text-xl text-center'>
                {t('LoginFirstErrorLater')}
              </h2>
            </div>

            <div className='w-full p-4 bg-origins text-center'>
              <Link href='/' className={'navbarButton text-center text-3xl'}>
                {t('goHome')}
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
