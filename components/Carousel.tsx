import React, {
  memo,
  useRef,
  useState,
  useCallback,
  useMemo,
  SyntheticEvent,
  MouseEvent,
  MouseEventHandler
} from 'react';
import { TCards, TCard } from '../constants';
import { useAppContext } from '../context';

export type TCardComp = TCard & {
  handleCardClick: (index: number) => void;
  current: number;
};

export type TCarousel = {
  cards: TCards;
};

type TCardControl = {
  type: string;
  title: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

//-----------------------------
// Card Component
//-----------------------------

function Card({ src, index, current, handleCardClick, headline }: TCardComp): JSX.Element {
  const {
    state: { theme }
  } = useAppContext();
  const cardRef = useRef<HTMLLIElement>(null);
  const handleMouseMove = useCallback((e: MouseEvent<HTMLLIElement>) => {
    if (cardRef?.current) {
      const el: HTMLLIElement = cardRef?.current;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--x', `${e.clientX - (r.left + Math.floor(r.width / 2))}`);
      el.style.setProperty('--y', `${e.clientY - (r.top + Math.floor(r.height / 2))}`);
    }
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (cardRef?.current) {
      const el: HTMLLIElement = cardRef.current;
      el.style.setProperty('--x', '0');
      el.style.setProperty('--y', '0');
    }
  }, []);
  const handleCardClickClb = useCallback(() => {
    handleCardClick(index);
  }, [index]);

  const imageLoaded = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = '1';
  };

  let classNames = 'slide';

  if (current === index) classNames += ' slide--current';
  else if (current - 1 === index) classNames += ' slide--previous';
  else if (current + 1 === index) classNames += ' slide--next';

  return (
    <li
      ref={cardRef}
      className={classNames}
      onClick={handleCardClickClb}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className='slide__image-wrapper'>
        <img className='slide__image' alt={headline} src={src} onLoad={imageLoaded} />
      </div>

      <article className='slide__content'>
        <h2 className={`${theme} slide__headline`}>{headline}</h2>
      </article>
    </li>
  );
}

//-----------------------------
// CardControl component
//-----------------------------

const CardControl = ({ type, title, handleClick }: TCardControl) => {
  const {
    state: { theme }
  } = useAppContext();
  return (
    <button className={`${theme} btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className='icon' viewBox='0 0 24 24'>
        <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
      </svg>
    </button>
  );
};

//-----------------------------
// Carousel Main Component
//-----------------------------
const Carousel = ({ cards }: TCarousel) => {
  const [current, setCurrent] = useState(0);
  const wrapperTransform = useMemo(
    () => ({
      transform: `translateX(-${current * (100 / cards.length)}%)`
    }),
    [current]
  );
  const handlePrevClick = useCallback(() => {
    const previous = current - 1;
    const value = (previous < 0 && cards.length - 1) || previous;
    setCurrent(value);
  }, [current]);
  const handleNextClick = useCallback(() => {
    const next = current + 1;
    const value = next === cards.length ? 0 : next;
    setCurrent(value);
  }, [current, cards]);
  const handleCardClick = useCallback(
    (index: number) => {
      current !== index && setCurrent(index);
    },
    [current]
  );

  return (
    <div className='slider'>
      <ul className='slider__wrapper' style={wrapperTransform}>
        {cards.map((card) => {
          return <Card key={card.index} current={current} handleCardClick={handleCardClick} {...card} />;
        })}
      </ul>

      <div className='slider__controls'>
        <CardControl type='previous' title='Go to previous slide' handleClick={handlePrevClick} />

        <CardControl type='next' title='Go to next slide' handleClick={handleNextClick} />
      </div>
    </div>
  );
};

export default memo(Carousel);
