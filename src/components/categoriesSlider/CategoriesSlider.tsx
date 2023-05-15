import { useKeenSlider } from 'keen-slider/react';
import styles from './categoriesSlider.module.scss';
import { FC, useEffect, useState } from 'react';
import SliderButton from '../UI/sliderButton/SliderButton';
import CardFilm from '../cardFilm/cardFilm';
import { IFilm } from '../../type/TFilm';

export interface ISlider {
  size: 'big' | 'medium';
  title: string;
}

export interface ICategoriesSlider extends ISlider {
  items: IFilm[];
}

const CategoriesSlider: FC<ICategoriesSlider> = ({ items, size, title }) => {
  const [viewItems, setViewItems] = useState(
    size === 'big'
      ? Math.ceil(window.innerWidth / 300)
      : size === 'medium'
      ? Math.ceil(window.innerWidth / 246)
      : 1
  );

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      origin: 'auto',
      perView: viewItems,
      spacing: 20,
    },
    dragSpeed: 2,
  });
  const callback = () => {
    if (window.innerWidth < 1600)
      setViewItems(
        size === 'big'
          ? Math.ceil(window.innerWidth / 300) //не получается вынести в отдельную переменную, т.к. при создании переменной расчет будет произведен всего 1 раз
          : size === 'medium' // а нам нужно это делать для размера экрана в данный момент
          ? Math.ceil(window.innerWidth / 246)
          : 1
      );
    instanceRef.current?.update();
  };
  useEffect(() => {
    window.addEventListener('resize', callback);
    instanceRef.current?.update();
    return () => window.removeEventListener('resize', callback);
  }, []);

  useEffect(() => {
    instanceRef.current?.update();
  }, [items]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <SliderButton
            direction={'right'}
            addClass={styles.rightButton}
            onClick={() => {
              instanceRef.current?.next();
            }}
          />
          <SliderButton
            direction={'left'}
            addClass={styles.leftButton}
            onClick={() => {
              instanceRef.current?.prev();
            }}
          />
        </div>
        <div ref={sliderRef} className={`${styles.sliderContainer} keen-slider`}>
          {items &&
            items.map((movie) => {
              return (
                <div
                  className={`${styles.slide} keen-slider__slide`}
                  key={movie.id}
                  style={size === 'big' ? { height: 500 } : { height: 350 }}
                >
                  <CardFilm
                    filmId={movie.id}
                    size={size}
                    image={movie.poster}
                    name={movie.name}
                    year={movie.year}
                    country="qwerty"
                    genre={title}
                    duration={movie.duration}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
