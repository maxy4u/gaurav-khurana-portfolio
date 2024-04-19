import fs from 'node:fs/promises';
import { globSync } from 'glob';
import Image from 'next/image';
import stylesHome from '../Home.module.css';
import { getPlaiceholder } from 'plaiceholder';

const getImages = async (pattern: string) =>
  Promise.all(
    globSync(pattern).map(async (file) => {
      const src = file.replace(/\.*public/, '');
      const buffer = await fs.readFile(file);

      const plaiceholder = await getPlaiceholder(buffer);
      return { ...plaiceholder, img: { src } };
    })
  );

export default async function Portfolio() {
  const images = await getImages('./public/images/portfolio/*.{jpg,png}');

  return (
    <section className={` ${stylesHome.container}`}>
      <ul role='list' className={`fluid`}>
        {images.map(({ base64, img }, ind) => {
          return (
            <li key={`portfolio-img-${ind}`} className={`portfolio-image`}>
              <Image
                {...img}
                alt='Gaurav Khurana Actor'
                loading='lazy'
                placeholder='blur'
                blurDataURL={base64}
                className='image'
                title='Gaurav Khurana Actor'
                fill
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
