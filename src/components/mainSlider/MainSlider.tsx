import styles from './mainSlider.module.scss';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import SliderButton from '../UI/sliderButton/SliderButton';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { mediaQuery } from '../../service/constans';
import RedButton from '../UI/redButton/RedButton';
import { IFilm } from '../../type/TFilm';

interface IMainSlider {
  items: IFilm[];
}

const MainSlider: FC<IMainSlider> = ({ items }) => {
  const [dark, setDark] = useState(true);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 1,
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 1.2,
      spacing: 60,
    },
    defaultAnimation: {
      duration: 1000,
    },
    animationStarted: () => setDark(false),
    dragEnded: () => setTimeout(() => setDark(true), 280),
    breakpoints: {
      [mediaQuery.$laptop]: {
        slides: {
          origin: 'center',
          perView: 1.2,
          spacing: 42,
        },
      },
      [mediaQuery.$phones]: {
        slides: {
          origin: 'center',
          perView: 1.2,
          spacing: 32,
        },
      },
      [mediaQuery.$tablets]: {
        slides: {
          origin: 'center',
          perView: 1.2,
          spacing: 22,
        },
      },
    },
  });

  const callback = () => {
    instanceRef.current?.update();
  };

  useEffect(() => {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  }, []);

  return (
    <>
      <div
        ref={sliderRef}
        className={`${styles.container} keen-slider ${dark && styles.container_darkBackground}`}
      >
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
        {items.map((movie) => (
          <div
            className={`${styles.slide} keen-slider__slide`}
            style={{ '--image': `url(${movie.poster})` } as CSSProperties}
            key={movie.id}
          >
            <p className={styles.moviesName}>{movie.name}</p>
            <p className={styles.description}>{movie.description}</p>
            <div>
              <RedButton addingClass={styles.button} text={'Смотреть по подписке'} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainSlider;
