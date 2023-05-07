import * as React from 'react';
import styles from './infiniteSlider.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { IFilm } from '../../type/TFilm';

const animation = { duration: 20000, easing: (t: number) => t };

interface IInfiniteSlider {
  items: IFilm[];
  rtl?: boolean;
}

const InfiniteSlider: React.FC<IInfiniteSlider> = ({ items, rtl = false }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: rtl,
    renderMode: 'performance',
    drag: false,
    slides: {
      perView: 2,
      spacing: 5,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className={styles.container}>
      <div ref={sliderRef} className="keen-slider">
        {items &&
          items.map((el) => (
            <img
              src={el.poster}
              className={`${styles.slide} keen-slider__slide`}
              key={el.id}
              onClick={() => console.log('click')}
            />
          ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
