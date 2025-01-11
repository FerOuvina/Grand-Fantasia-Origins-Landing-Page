import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import ClassesCard from './classesCard';
import '../css/classes.css';

export default function Classes() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  const showClass = (index) => {
    if (isAnimating.current) return; // If animation is in progress, do not proceed

    isAnimating.current = true; // Set animation flag to true
    setTimeout(() => {
      gsap.to('.class-card', {
        display: 'none',
        duration: 0,
        opacity: 0,
        x: -100,
        ease: 'power2.in'
      });
      setCurrentIndex(index);
    }, 1);
    gsap.to(`#class-${index}`, {
      display: 'flex',
      duration: 1,
      opacity: 1,
      x: 0,
      ease: 'back.inOut',
      onComplete: () => {
        isAnimating.current = false; // Reset animation flag
      }
    });
  };

  return (
    <section id='/classes' className='flex flex-col justify-center px-4 w-full'>
      <h1 className='px-4 py-1 mt-4 w-full text-3xl text-white border-8 border-white bg-navbar'>
        {t('Classes')}
      </h1>

      <section className='flex justify-center py-4 mt-4 w-full h-full bg-white'>
        <article
          className={`flex justify-center class-card warrior`}
          id='class-0'>
          <ClassesCard
            path1={t('BERSERKER')}
            path2={t('PALADIN')}
            job={t('FIGHTER')}
            image={'/classes/warrior.png'}
            hometown={'Kaslow'}
            description={t('ClassDescFighter')}
          />
        </article>

        <article
          className={`hidden justify-center class-card archer`}
          id='class-1'>
          <ClassesCard
            path1={t('RANGER')}
            path2={t('ASSASSIN')}
            job={t('HUNTER')}
            image={'/classes/archer.png'}
            hometown={'Jale'}
            description={t('ClassDescHunter')}
          />
        </article>

        <article
          className={`hidden justify-center class-card priest`}
          id='class-2'>
          <ClassesCard
            path1={t('CLERIC')}
            path2={t('SAGE')}
            job={t('ACOLYTE')}
            image={'/classes/priest.png'}
            hometown={'Ilya'}
            description={t('ClassDescAcolyte')}
          />
        </article>

        <article
          className={`hidden justify-center class-card mage`}
          id='class-3'>
          <ClassesCard
            path1={t('WIZARD')}
            path2={t('NECROMANCER')}
            job={t('SORCERER')}
            image={'/classes/mage.png'}
            hometown={'Ilya'}
            description={t('ClassDescSorcerer')}
          />
        </article>

        <article
          className={`hidden justify-center class-card mechanic`}
          id='class-4'>
          <ClassesCard
            path1={t('DEMOLITIONIST')}
            path2={t('ENGINEER')}
            job={t('MECHANIC')}
            image={'/classes/mechanic.png'}
            hometown={t('HometownGS')}
            description={t('ClassDescMechanic')}
          />
        </article>

        <article
          className={`hidden justify-center class-card traveler`}
          id='class-5'>
          <ClassesCard
            path1={t('TIME TRAVELER')}
            path2={t('VOID RUNNER')}
            job={t('DRIFTER')}
            image={'/classes/wanderer.png'}
            hometown={'Ilya'}
            description={t('ClassDescDrifter')}
          />
        </article>
      </section>

      {/* Classes slider */}
      <article className='flex justify-center my-4 border-8 border-white bg-navbar'>
        <ul className='flex gap-5'>
          <li
            onClick={() => showClass(0)}
            className={`cursor-pointer ${currentIndex === 0 ? '' : 'gray'}`}>
            <img
              src={'/classes/warrior-thumbs.png'}
              alt={'Warrior'}
              width={100}
              height={100}
            />
          </li>
          <li
            onClick={() => showClass(1)}
            className={`cursor-pointer ${currentIndex === 1 ? '' : 'gray'}`}>
            <img
              src={'/classes/archer-thumbs.png'}
              alt={'Archer'}
              width={100}
              height={100}
            />
          </li>
          <li
            onClick={() => showClass(2)}
            className={`cursor-pointer ${currentIndex === 2 ? '' : 'gray'}`}>
            <img
              src={'/classes/priest-thumbs.png'}
              alt={'Priest'}
              width={100}
              height={100}
            />
          </li>
          <li
            onClick={() => showClass(3)}
            className={`cursor-pointer ${currentIndex === 3 ? '' : 'gray'}`}>
            <img
              src={'/classes/mage-thumbs.png'}
              alt={'Mage'}
              width={100}
              height={100}
            />
          </li>
          <li
            onClick={() => showClass(4)}
            className={`cursor-pointer ${currentIndex === 4 ? '' : 'gray'}`}>
            <img
              src={'/classes/machinist-thumbs.png'}
              alt={'Machinist'}
              width={100}
              height={100}
            />
          </li>
          <li
            onClick={() => showClass(5)}
            className={`cursor-pointer ${currentIndex === 5 ? '' : 'gray'}`}>
            <img
              src={'/classes/traveler-thumbs.png'}
              alt={'Warrior'}
              width={100}
              height={100}
            />
          </li>
        </ul>
      </article>
    </section>
  );
}
