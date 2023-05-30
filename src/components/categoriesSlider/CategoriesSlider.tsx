import { useKeenSlider } from 'keen-slider/react';
import styles from './categoriesSlider.module.scss';
import { FC, useEffect, useState } from 'react';
import SliderButton from '../UI/sliderButton/SliderButton';
import CardFilm from '../cardFilm/cardFilm';
import { IFilm, IFilmsList } from '../../type/TFilm';

export interface ISlider {
  size: 'big' | 'medium';
  title?: string;
}

export interface ICategoriesSlider extends ISlider {
  items: IFilm[] | IFilmsList[];
}

const CategoriesSlider: FC<ICategoriesSlider> = ({ items, size }) => {
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
          ? Math.ceil(window.innerWidth / 300)
          : size === 'medium'
          ? Math.ceil(window.innerWidth / 246)
          : 1
      );
    instanceRef.current?.update();
  };
  useEffect(() => {
    window.addEventListener('resize', callback);
    instanceRef.current?.update();
    return () => window.removeEventListener('resize', callback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    instanceRef.current?.update();
  }, [items, instanceRef]);
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
                  data-testid="CategoriesSlider_slider"
                >
                  <CardFilm
                    filmId={movie.id}
                    image={movie.poster}
                    name={movie.name}
                    enName={movie.originalName}
                    duration={movie.duration}
                    rating={movie.rating}
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
