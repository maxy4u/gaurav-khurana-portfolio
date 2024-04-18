import { Carousel } from '../../components';
import stylesHome from '../Home.module.css';
import { cards } from '../../constants';

export default function Gallery() {
  return (
    <section className={`${stylesHome.container}`}>
      <Carousel {...{ cards }} />
    </section>
  );
}
