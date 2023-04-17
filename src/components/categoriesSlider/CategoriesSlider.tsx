import { useKeenSlider } from 'keen-slider/react';
import styles from './categoriesSlider.module.scss';
import { FC } from 'react';

interface ICategoriesSlider {
  title: string;
  size: 'big' | 'medium';
}

const CategoriesSlider: FC<ICategoriesSlider> = ({ title, size }) => {
  const viewItems = size === 'big' ? 5 : size === 'medium' ? 7 : 1;

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: viewItems,
      spacing: 20,
    },
  });
  return (
    <>
      <p className={styles.title}>{title}</p>
      <div ref={sliderRef} className={'keen-slider'}>
        <div className={`${styles.slide} keen-slider__slide`}>1</div>
        <div className={`${styles.slide} keen-slider__slide`}>2</div>
        <div className={`${styles.slide} keen-slider__slide`}>3</div>
        <div className={`${styles.slide} keen-slider__slide`}>4</div>
        <div className={`${styles.slide} keen-slider__slide`}>5</div>
        <div className={`${styles.slide} keen-slider__slide`}>6</div>
        <div className={`${styles.slide} keen-slider__slide`}>7</div>
        <div className={`${styles.slide} keen-slider__slide`}>8</div>
        <div className={`${styles.slide} keen-slider__slide`}>9</div>
      </div>
    </>
  );
};

export default CategoriesSlider;
