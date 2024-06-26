export default function Home() {
  return (
    <section className='relative z-0 my-5 w-full'>
      <div className='flex justify-center items-center h-screen max-h-[84vh]'>
        <iframe
          src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=QpyOXilYjzqjoUY9'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
          className='w-full h-full'
        ></iframe>
      </div>
      <a
        href='#'
        className='absolute top-1/2 left-1/2 z-10 p-2 rounded-full shadow-lg backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 bg-black/50 shadow-black/50'
      >
        <img
          className='rounded-full shadow-lg backdrop-blur-sm bg-black/50 shadow-black/50'
          src='/logo.jpg'
          alt='Logo'
          width={300}
          height={300}
          priority
        />
      </a>
    </section>
  );
}
