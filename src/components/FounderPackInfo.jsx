import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import MobileNavbar from './mobileNavbar';
import NavbarSecondary from './navbarSecundary';
import Footer from './footer';

export default function FounderPackInfo() {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(true);

  // Scroll event listener
  useEffect(() => {
    const toggleVisibility = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      if (isAtBottom) {
        setIsVisible(false); // Hide navbar when at the bottom
      } else {
        if (window.scrollY > 300) {
          setIsVisible(true); // Show navbar when scrolled more than 300px
        } else {
          setIsVisible(false); // Hide navbar when scrolled less than 300px
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main>
      <NavbarSecondary />
      <MobileNavbar />

      <section className='flex flex-col w-full max-w-[1250px] border-8 border-white bg-background mt-4'>
        <h2
          id='/FounderInfo'
          className='px-4 py-1 border-8 border-white bg-navbar mt-4 mx-4 text-3xl text-white'>
          {t('founderPacksAdditionalInfoTitle')}
        </h2>
        <article className='px-4 py-1 border-8 border-white bg-white mx-4 my-4 text-black'>
          <ul className='text-xl'>
            <li>
              {t('founderPackPurchaseInfo')}{' '}
              <a
                href='https://discord.com/channels/1194037105156964437/1309735718255460403'
                target='_blank'
                className='text-blue-500 underline'>
                {t('discordServerLink')}
              </a>
              .
            </li>
            <li>{t('founderPackUploadReceiptInfo')}</li>
            <li>{t('founderPackUploadReceiptInfo1')}</li>
            <li>{t('founderPackUploadReceiptInfo2')}</li>
            <li>{t('founderPackUploadReceiptInfo3')}</li>
            <li>{t('founderPackUploadReceiptInfo4')}</li>
            <li>
              {t('tpStonePocketHouseInfo')}{' '}
              <a href='#/PocketHouses' className='text-blue-500 underline'>
                {t('previewLinkText')}
              </a>
            </li>
            <li>{t('genkiSetDescription')}</li>
            <li>{t('genkiSetOldModelsInfo')}</li>
            <li>{t('genkiSetNewModelsInfo')}</li>
            <li>
              {t('dungeonMountsInfo')}{' '}
              <a href='#/DungeonMounts' className='text-blue-500 underline'>
                {t('previewLinkText')}
              </a>
            </li>
            <li>
              {t('combatDungeonMountInfo')}{' '}
              <a
                href='#/CombatDungeonMount'
                className='text-blue-500 underline'>
                {t('previewLinkText')}
              </a>
            </li>
            <li>
              {t('spriteClothingInfo')}{' '}
              <a href='#/SpriteClothing' className='text-blue-500 underline'>
                {t('previewLinkText')}
              </a>
            </li>
            <li className='mt-2'>
              <Link href='/founderBuy' className='navbarButton text-2xl'>
                {t('founderBuyNowBtn')}
              </Link>
            </li>
            <li className='text-sm text-gray-600 mt-4'>
              {t('policiesText1')}{' '}
              <a
                href='#/Policies'
                class='text-blue-500 font-medium hover:underline'>
                {t('policiesLink')}
              </a>{' '}
              {t('policiesText2')}
            </li>
          </ul>
        </article>

        <h2
          id='/NPC'
          className='px-4 py-1 border-8 border-white bg-navbar mx-4 text-3xl text-white'>
          {t('exclusiveNpcInfoTitle')}
        </h2>

        <article className='px-4 py-1 border-8 border-white bg-white mx-4 my-4 text-black'>
          <ul className='text-xl'>
            <li>{t('exclusiveNpcFirst15Users')}</li>
            <li>{t('exclusiveNpcAfter15Users')}</li>
            <li>{t('exclusiveNpcReplaceExample')}</li>
            <li>{t('exclusiveNpcProfessionInfo')}</li>
            <li>
              {t('exclusiveNpcEligibilityInfo')}
              <ul>
                <li>{t('exclusiveNpcNameInfo')}</li>
                <li>{t('exclusiveNpcReplacementInfo')}</li>
                <li>{t('exclusiveNpcFromOtherGameInfo')}</li>
              </ul>
            </li>
            <li className='mt-2'>
              <Link href='/founderBuy' className='navbarButton text-2xl'>
                {t('founderBuyNowBtn')}
              </Link>
            </li>
            <li className='text-sm text-gray-600 mt-2'>
              {t('policiesText1')}{' '}
              <a
                href='#/Policies'
                class='text-blue-500 font-medium hover:underline'>
                {t('policiesLink')}
              </a>{' '}
              {t('policiesText2')}
            </li>
          </ul>
        </article>
        <article className='border-8 border-white mx-4'>
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
          {t('pocketHousesTitle')}
        </h2>
        <article
          id='/PocketHouses'
          className='grid grid-cols-2 lg:grid-cols-4 m-4 gap-4'>
          <img
            src={t('pocketHouseImg1')}
            alt=''
            className='border-8 border-white w-80'
            loading='lazy'
          />
          <img
            src={t('pocketHouseImg2')}
            alt=''
            className='border-8 border-white w-80'
            loading='lazy'
          />
          <img
            src={t('pocketHouseImg3')}
            alt=''
            className='border-8 border-white w-80'
            loading='lazy'
          />
          <img
            src={t('pocketHouseImg4')}
            alt=''
            className='border-8 border-white w-80'
            loading='lazy'
          />
        </article>

        <h2 className='px-4 py-1 border-8 border-white bg-navbar mx-4 text-3xl text-white'>
          {t('dungeonMountsTitle')}
        </h2>
        <article
          id='/DungeonMounts'
          className='grid grid-cols-2 lg:grid-cols-4 m-4 gap-4'>
          <img
            src={t('dungeonMountImg1')}
            alt=''
            className='border-8 border-white w-80'
            loading='lazy'
          />
          <img
            src={t('dungeonMountImg2')}
            alt=''
            className='border-8 border-white w-80'
            loading='lazy'
          />
          <img
            src={t('dungeonMountImg3')}
            alt=''
            className='border-8 border-white w-80'
            loading='lazy'
          />
          <img
            src={t('dungeonMountImg4')}
            alt=''
            className='border-8 border-white w-80'
            loading='lazy'
          />
        </article>

        <h2 className='px-4 py-1 border-8 border-white bg-navbar mx-4 text-3xl text-white'>
          {t('combatDungeonMountTitle')}
        </h2>
        <article
          id='/CombatDungeonMount'
          className='grid grid-cols-1 m-4 gap-4 place-self-center'>
          <img
            src={t('combatDungeonMountImg')}
            alt=''
            className='border-8 border-white w-80'
            loading='lazy'
          />
        </article>

        <h2 className='px-4 py-1 border-8 border-white bg-navbar mx-4 text-3xl text-white'>
          {t('spriteClothingTitle')}
        </h2>
        <article id='/SpriteClothing' className='grid grid-cols-2 mt-4 gap-4'>
          <img
            src={t('spriteClothingImg1')}
            alt=''
            className='border-8 border-white w-80 place-self-end'
            loading='lazy'
          />
          <img
            src={t('spriteClothingImg2')}
            alt=''
            className='border-8 border-white w-80 place-self-start'
            loading='lazy'
          />
        </article>

        <h2
          id='/Policies'
          className='px-4 py-1 border-8 border-white bg-navbar mt-4 mx-4 text-3xl text-white'>
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
              <a href='#/NPC' className='hover:underline text-blue-600'>
                {t('policyInfoNPCLink')}
              </a>
            </li>
          </ul>
        </article>
      </section>

      {/* Back to Top Button */}
      {isVisible && (
        <div className=''>
          <div className='w-full fixed bottom-4 right-0 h-16 bg-origins/90'>
            <button
              onClick={scrollToTop}
              className='hidden fixed bottom-5 right-5 p-4 bg-white text-black rounded-full shadow-lg hover:bg-button hover:text-black transition duration-300 md:flex items-center justify-center'
              aria-label='Scroll to top'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='md:w-6 md:h-6 w-3'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 15l7-7 7 7'
                />
              </svg>
            </button>

            <button
              onClick={scrollToTop}
              className='fixed md:hidden bottom-6 left-5 p-4 bg-white text-black rounded-full shadow-lg hover:bg-button hover:text-black transition duration-300 flex items-center justify-center'
              aria-label='Scroll to top'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='md:w-6 md:h-6 w-3'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 15l7-7 7 7'
                />
              </svg>
            </button>

            <Link
              href='/founderBuy'
              className='navbarButton hidden md:inline-block text-2xl fixed bottom-7 left-5'>
              {t('founderBuyNowBtn')}
            </Link>

            <Link
              href='/founderBuy'
              className='navbarButton md:hidden text-2xl fixed bottom-7 right-5'>
              {t('founderBuyNowBtn')}
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
