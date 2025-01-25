import NavbarSecondary from './navbarSecundary';
import MobileNavbar from './mobileNavbar';
import PaymentMethods from './paymentMethods';
import Footer from './footer';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import ScrollerButton from './scrollerButtons';

export default function FounderBuyPage() {
  const { t } = useTranslation();

  return (
    <main>
      <NavbarSecondary />
      <MobileNavbar />
      <section className='flex flex-col w-full min-w-fit max-w-[1250px] border-8 border-white bg-background mt-4'>
        <h2 className='px-4 py-1 border-8 border-white bg-navbar mt-4 mx-4 text-2xl lg:text-3xl text-white'>
          {t('founderBuyTitle')}
        </h2>

        <article className='flex flex-col md:flex-row gap-5 justify-between items-center border-8 border-white py-4 m-4 md:border-0 md:py-0'>
          {/* Founder 10USD */}
          <div className='flex flex-col gap-10 bg-origins w-full max-w-[300px] justify-center items-center border-8 border-white'>
            <img
              src='/iconBronze.png'
              alt='Bronze Icon'
              width={130}
              className='border-4 rounded-full border-white mt-4'
            />
            <div className='bg-white w-full mt-auto flex flex-col gap-3 text-center'>
              <h2 className='text-2xl font-bold pt-2'>
                {t('founderBuyTitleBronze')}
              </h2>
              <img src='/divider-5318234.svg' alt='' />
              <span className='text-xl'>$10 USD</span>
              <a
                className='navbarButton mt-auto text-center text-2xl'
                href='https://buy.stripe.com/8wM3cqgPt6as2NG8wy'
                target='_blank'>
                Buy
              </a>
              <PaymentMethods />
            </div>
          </div>

          {/* Founder 25USD */}
          <div className='flex flex-col gap-10 bg-origins w-full max-w-[300px] justify-center items-center border-8 border-white'>
            <img
              src='/iconSilver.png'
              alt='Silver Icon'
              width={130}
              className='border-4 rounded-full border-white mt-4'
            />
            <div className='bg-white w-full mt-auto flex flex-col gap-3 text-center'>
              <h2 className='text-2xl font-bold pt-2'>
                {t('founderBuyTitleSilver')}
              </h2>
              <img src='/divider-5318234.svg' alt='' />
              <span className='text-xl'>$25 USD</span>
              <a
                className='navbarButton mt-auto text-center text-2xl'
                href='https://buy.stripe.com/5kAaES56L7ew3RKfYZ'
                target='_blank'>
                Buy
              </a>
              <PaymentMethods />
            </div>
          </div>

          {/* Founder 50USD */}
          <div className='flex flex-col gap-10 bg-origins w-full max-w-[300px] justify-center items-center border-8 border-white'>
            <img
              src='/iconGold.png'
              alt='Gold Icon'
              width={130}
              className='border-4 rounded-full border-white mt-4'
            />
            <div className='bg-white w-full mt-auto flex flex-col gap-3 text-center'>
              <h2 className='text-2xl font-bold pt-2'>
                {t('founderBuyTitleGold')}
              </h2>
              <img src='/divider-5318234.svg' alt='' />
              <span className='text-xl'>$50 USD</span>
              <a
                className='navbarButton mt-auto text-center text-2xl'
                href='https://buy.stripe.com/cN25ky8iX0Q88805kk'
                target='_blank'>
                Buy
              </a>
              <PaymentMethods />
            </div>
          </div>
        </article>

        <article className='border-8 w-auto flex justify-center items-center border-white mx-4'>
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

        <h2 className='px-4 py-1 border-8 border-white bg-navbar mt-4 mx-4 text-3xl text-white'>
          {t('founderBuyTitleArg')}
        </h2>

        <article className='border-8 border-white bg-white text-black p-4 m-4 lg:text-2xl'>
          <span>{t('founderBuyDesc')}</span>
          <a
            href='https://discord.com/channels/1194037105156964437/1309735718255460403'
            target='_blank'
            className='text-blue-500 underline'>
            {t('founderBuyDiscord')}
          </a>
          <span>{t('founderBuyDesc1')}</span>
        </article>

        <h2
          id='/Policies'
          className='px-4 py-1 border-8 border-white bg-navbar mx-4 text-3xl text-white'>
          {t('policyTitle')}
        </h2>

        <article className='px-4 py-1 border-8 border-white bg-white mx-4 my-4 text-black'>
          <ul>
            <li class='text-lg lg:text-2xl font-bold'>{t('policyTitle1')}</li>
            <li className='text-md lg:text-lg'>{t('policySubtitle1')}</li>
            <li class='text-lg lg:text-2xl font-bold'>{t('policyTitle2')}</li>
            <li className='text-md lg:text-lg'>{t('policySubtitle2')}</li>
            <li class='text-lg lg:text-2xl font-bold'>{t('policyTitle3')}</li>
            <li className='text-md lg:text-lg'>{t('policySubtitle3')}</li>
            <li class='text-lg lg:text-2xl font-bold'>{t('policyTitle4')}</li>
            <li className='text-md lg:text-lg'>{t('policySubtitle4')}</li>
            <li class='text-lg lg:text-2xl font-bold'>{t('policyTitle5')}</li>
            <li className='text-md lg:text-lg'>{t('policySubtitle5')}</li>
            <li class='text-lg lg:text-2xl font-bold'>{t('policyTitle6')}</li>
            <li className='text-md lg:text-lg'>
              {t('policySubtitle6')}{' '}
              <a
                href='mailto:contact@gfawakening.com'
                className='hover:underline text-blue-600'>
                {t('policySubtitle6Email')}
              </a>
              {t('policySubtitle6-1')}
            </li>
            <li class='text-lg lg:text-2xl font-bold'>{t('policyTitle7')}</li>
            <li className='text-md lg:text-lg'>{t('policySubtitle7')}</li>
            <li class='text-lg lg:text-2xl font-bold'>{t('policyTitle8')}</li>
            <li className='text-md lg:text-lg'>
              {t('policySubtitle8')}
              <a
                href='mailto:contact@gfawakening.com'
                className='hover:underline text-blue-600'>
                {t('policySubtitle6Email')}
              </a>
              {t('policySubtitle8-1')}
            </li>
            <li className='text-md lg:text-lg'>
              {t('policyInfoNPC')}
              <Link
                href='/founderPackInfo'
                className='hover:underline text-blue-600'>
                {t('policyInfoNPCLink')}
              </Link>
            </li>
          </ul>
        </article>
      </section>

      <ScrollerButton />
      <Footer />
    </main>
  );
}
