import { useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { type: 'image', src: '/Showcase1.png', alt: 'Image 1' },
    { type: 'image', src: '/Housing.gif', alt: 'Image 2' },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/-WGNOIzajds?si=A9wwuGQWjyHLy5jq&amp;controls=0',
      alt: 'Video'
    },
    { type: 'image', src: '/path-to-image3.jpg', alt: 'Image 3' }
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='flex flex-row max-w-[1250px] bg-background border-8 border-white my-4 p-4'>
      {/* Slideshow Section */}
      <article className='hidden md:flex w-6/12 shadow-lg border-8 border-white relative'>
        {slides[currentSlide].type === 'image' ? (
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className='w-full h-[372px] object-cover'
          />
        ) : (
          <iframe
            src={`${slides[currentSlide].src}&controls=1&autoplay=1`}
            title='Slide video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='w-full h-full'></iframe>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-white hover:text-black'>
          ❮
        </button>
        <button
          onClick={handleNext}
          className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-white hover:text-black'>
          ❯
        </button>

        {/* Navigation Dots */}
        <div className='absolute p-2 bg-origins/60 bottom-2 w-full flex justify-center gap-2'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-6 h-6 rounded-full ${
                currentSlide === index ? 'bg-button' : 'bg-pageGreen'
              }`}></button>
          ))}
        </div>
      </article>

      {/* Text Content */}
      <article className='p-4 bg-white w-8/12 shadow-lg border-8 border-white'>
        <ul className='text-xl'>
          <li className=''>
            • A new path for the Sprite Messenger to choose: Duskwraith, which
            later can choose between: Soul Reaver or Dark Knight.
          </li>
          <li className='pt-2'>
            • The server is focused on an experience similar to the early days
            of Grand Fantasia. With renewed and new content.
          </li>
          <li className='pt-2'>
            • Lvl caps every 10 levels, starting at lvl cap 30.
          </li>
          <li className='pt-2'>
            • The server is both PvP and PvE, with content focused on both
            modes. To encourage people to join the PvP arena, many useful
            rewards have been implemented. (exclusive dungeon mounts - genkis -
            and more).
          </li>
          <li className='pt-2'>
            • New dungeons with increased difficulty for each level cap (Angor
            Quarry lvl 30 - Branda Root lvl 40). New dungeons will be unlocked
            with the following caps.
          </li>
        </ul>
      </article>
    </section>
  );
}
