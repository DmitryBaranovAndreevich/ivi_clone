import styles from './mainSlider.module.scss';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import SliderButton from '../UI/sliderButton/SliderButton';
import { useEffect } from 'react';

const MainSlider = () => {
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
    breakpoints: {
      '(max-width: 850px)': {
        slides: {
          origin: 'center',
          perView: 1.2,
          spacing: 42,
        },
      },
      '(max-width: 550px)': {
        slides: {
          origin: 'center',
          perView: 1.2,
          spacing: 32,
        },
      },
      '(max-width: 450px)': {
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
      <div ref={sliderRef} className={`${styles.container} keen-slider`}>
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
