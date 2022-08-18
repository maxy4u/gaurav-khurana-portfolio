import React, { memo, useRef, useState, useCallback, useMemo } from "react";

//-----------------------------
// Card Component
//-----------------------------

function Card({ src, index, current, handleCardClick, headline }) {
  const cardRef = useRef();
  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", e.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty("--y", e.clientY - (r.top + Math.floor(r.height / 2)));
  }, []);
  const handleMouseLeave = useCallback((e) => {
    const el = cardRef.current;
    el.style.setProperty("--x", 0);
    el.style.setProperty("--y", 0);
  }, []);
  const handleCardClickClb = useCallback((e) => {
    handleCardClick(index);
  }, []);

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  let classNames = "slide";

  if (current === index) classNames += " slide--current";
  else if (current - 1 === index) classNames += " slide--previous";
  else if (current + 1 === index) classNames += " slide--next";

  return (
    <li
      ref={cardRef}
      className={classNames}
      onClick={handleCardClickClb}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={headline}
          src={src}
          onLoad={imageLoaded}
        />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
      </article>
    </li>
  );
}

//-----------------------------
// CardControl component
//-----------------------------

const CardControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

//-----------------------------
// Carousel Main Component
//-----------------------------
const Carousel = ({ cards }) => {
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
    (index) => {
      current !== index && setCurrent(index);
    },
    [current]
  );

  return (
    <div className="slider">
      <ul className="slider__wrapper" style={wrapperTransform}>
        {cards.map((card) => {
          return (
            <Card
              key={card.index}
              current={current}
              handleCardClick={handleCardClick}
              {...card}
            />
          );
        })}
      </ul>

      <div className="slider__controls">
        <CardControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePrevClick}
        />

        <CardControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default memo(Carousel);
