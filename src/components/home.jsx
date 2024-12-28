export default function Home() {
  return (
    <section className='relative z-0 my-5 w-full'>
      <article className='hidden md:flex justify-center items-center h-screen max-h-[84vh]'>
        <iframe
          src='https://www.youtube-nocookie.com/embed/-WGNOIzajds?si=rgSiULb3oo9Zm047&amp;controls=0;autoplay=1'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          className='w-full h-full'
        ></iframe>
      </article>

      <article className='sm:flex md:hidden'>
        <iframe
          src='https://www.youtube-nocookie.com/embed/-WGNOIzajds?si=rgSiULb3oo9Zm047&amp;controls=0;autoplay=1'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          className='w-full h-52 z-0'
        ></iframe>
      </article>
    </section>
  );
}
