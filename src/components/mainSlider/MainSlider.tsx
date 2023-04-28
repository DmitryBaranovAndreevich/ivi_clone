import styles from './mainSlider.module.scss';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import SliderButton from '../UI/sliderButton/SliderButton';
import { useEffect, useState } from 'react';
import { mediaQuery } from '../../service/constans';

const MainSlider = () => {
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
    dragEnded: () => setTimeout(() => setDark(true), 480),
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
        <div className={`${styles.slide} keen-slider__slide`}>1</div>
        <div className={`${styles.slide} keen-slider__slide`}>2</div>
        <div className={`${styles.slide} keen-slider__slide`}>3</div>
        <div className={`${styles.slide} keen-slider__slide`}>4</div>
        <div className={`${styles.slide} keen-slider__slide`}>5</div>
        <div className={`${styles.slide} keen-slider__slide`}>6</div>
      </div>
    </>
  );
};

export default MainSlider;
