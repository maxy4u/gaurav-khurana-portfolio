import fs from 'node:fs/promises';
import path from 'node:path';
import Image from 'next/image';
import stylesHome from '../Home.module.css';
import { getPlaiceholder } from 'plaiceholder';

const getImages = async () => {
  const imageDirectory = path.join(process.cwd(), 'public/images/portfolio');
  const filenames = await fs.readdir(imageDirectory);

  return Promise.all(
    filenames.map(async (file) => {
      const src = '/images/portfolio/' + file;
      const filePath = path.join(imageDirectory, file);
      const buffer = await fs.readFile(filePath);

      const plaiceholder = await getPlaiceholder(buffer);
      return { ...plaiceholder, img: { src } };
    })
  );
};

export default async function Portfolio() {
  const images = await getImages();

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
