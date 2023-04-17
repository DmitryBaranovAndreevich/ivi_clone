import { useKeenSlider } from 'keen-slider/react';
import styles from './categoriesSlider.module.scss';
import { FC, useEffect, useState } from 'react';
import SliderButton from '../UI/sliderButton/SliderButton';
import { Link } from 'react-router-dom';

interface ICategoriesSlider {
  title: string;
  size: 'big' | 'medium';
}

const CategoriesSlider: FC<ICategoriesSlider> = ({ title, size }) => {
  const [viewItems, setViewItems] = useState(
    size === 'big'
      ? Math.ceil(window.innerWidth / 400)
      : size === 'medium'
      ? Math.ceil(window.innerWidth / 316)
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
          ? Math.ceil(window.innerWidth / 400)
          : size === 'medium'
          ? Math.ceil(window.innerWidth / 316)
          : 1
      );
    instanceRef.current?.update();
  };
  useEffect(() => {
    window.addEventListener('resize', callback);
    instanceRef.current?.update();
    return () => window.removeEventListener('resize', callback);
  }, []);
  return (
    <div className={styles.wrapper}>
      <Link className={styles.title} to="#">
        {title}
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
          <div className={`${styles.slide} keen-slider__slide`}>1</div>
          <div className={`${styles.slide} keen-slider__slide`}>2</div>
          <div className={`${styles.slide} keen-slider__slide`}>3</div>
          <div className={`${styles.slide} keen-slider__slide`}>4</div>
          <div className={`${styles.slide} keen-slider__slide`}>5</div>
          <div className={`${styles.slide} keen-slider__slide`}>6</div>
          <div className={`${styles.slide} keen-slider__slide`}>7</div>
          <div className={`${styles.slide} keen-slider__slide`}>8</div>
          <div className={`${styles.slide} keen-slider__slide`}>9</div>
          <div className={`${styles.slide} keen-slider__slide`}>10</div>
          <div className={`${styles.slide} keen-slider__slide`}>11</div>
          <div className={`${styles.slide} keen-slider__slide`}>12</div>
          <div className={`${styles.slide} keen-slider__slide`}>13</div>
          <div className={`${styles.slide} keen-slider__slide`}>14</div>
          <div className={`${styles.slide} keen-slider__slide`}>15</div>
          <div className={`${styles.slide} keen-slider__slide`}>16</div>
          <div className={`${styles.slide} keen-slider__slide`}>17</div>
          <div className={`${styles.slide} keen-slider__slide`}>18</div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
