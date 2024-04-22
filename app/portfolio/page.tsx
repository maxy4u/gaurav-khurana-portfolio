import Image from 'next/image';
import stylesHome from '../Home.module.css';
import { portfolioImages } from '../../constants';

export default async function Portfolio() {
  return (
    <section className={` ${stylesHome.container}`}>
      <ul role='list' className={`fluid`}>
        {portfolioImages.map((src, ind) => {
          return (
            <li key={`portfolio-img-${ind}`} className='relative md:basis-[50%] px-0 py-1em'>
              <Image
                src={`/images/portfolio/${src}`}
                alt='Gaurav Khurana Actor'
                loading='lazy'
                className='image'
                title='Gaurav Khurana Actor'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
