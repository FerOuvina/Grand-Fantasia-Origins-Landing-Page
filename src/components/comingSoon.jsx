import { Link } from 'wouter';

export default function ComingSoon() {
  return (
    <main className='h-screen'>
      <section className='min-h-svh flex flex-col items-center w-full max-w-[1250px] border-8 border-white bg-background'>
        <h1 className='px-4 py-1 border-8 border-white bg-navbar mt-4 mx-4 text-lg sm:text-2xl lg:text-3xl text-white'>
          This section is not yet available
        </h1>

        <Link href='/'>
          <img
            src={'/logo.jpg'}
            alt='logo'
            className='w-[300px] lg:w-[350px]'
          />
        </Link>

        <div className='w-full mt-auto flex flex-col items-center justify-center bg-white gap-2'>
          <h2 className='text-2xl py-2 w-full text-center text-black px-4'>
            Please come back later
          </h2>
          <img src={'/divider-5318234.svg'} width={350} height={10} />

          <div className='bg-origins w-full flex items-center justify-center p-4'>
            <Link
              href='/'
              className='navbarButton text-xl sm:text-2xl lg:text-3xl'>
              Go back to the main page.
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
