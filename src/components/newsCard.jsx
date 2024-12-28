import { Link } from 'wouter';
import '../css/navbar.css';

export default function NewsCard({
  date,
  title,
  image,
  description,
  link,
  linkText
}) {
  return (
    <section className='w-full flex-col md:max-w-[400] flex border-8 border-white bg-white'>
      <img
        src={image}
        alt={title}
        width={400}
        height={200}
        className='self-center w-full'
      />
      <div className='flex flex-col justify-between h-full'>
        <h1 className='py-2 text-3xl font-bold'>{title}</h1>
        <p>{description}</p>
        <div className='text-blue-700 mt-auto'>
          <a target='_blank' href={link}>
            {linkText}
          </a>
        </div>
        <span className='px-1 mt-1 text-white date text-md bg-navbar'>
          {date}
        </span>
      </div>
    </section>
  );
}
