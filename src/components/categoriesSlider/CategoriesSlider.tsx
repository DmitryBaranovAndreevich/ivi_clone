import { useKeenSlider } from 'keen-slider/react';
import styles from './categoriesSlider.module.scss';
import { FC, useEffect, useState } from 'react';
import SliderButton from '../UI/sliderButton/SliderButton';
import { Link } from 'react-router-dom';
import { IFilm, IGenre, appApi } from '../../store/api/appApi';
import CardFilm from '../cardFilm/cardFilm';

interface ICategoriesSlider {
  genre: IGenre;
  size: 'big' | 'medium';
}

const CategoriesSlider: FC<ICategoriesSlider> = ({ genre, size }) => {
  const { data: moviesOfGenre } = appApi.useGetMoviesOfGenreQuery(genre.englishName);
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
  }, [moviesOfGenre]);
  return (
    <div className={styles.wrapper}>
      <Link className={styles.title} to="#">
        {genre.name}
      </Link>
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
          {moviesOfGenre &&
            moviesOfGenre.map((movie) => {
              return (
                <div
                  className={`${styles.slide} keen-slider__slide`}
                  key={movie.id}
                  style={size === 'big' ? { height: 400 } : { height: 277 }}
                >
                  <CardFilm
                    size={size}
                    image={movie.poster}
                    name={movie.name}
                    year={movie.year}
                    country="qwerty"
                    genre={genre.name}
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
