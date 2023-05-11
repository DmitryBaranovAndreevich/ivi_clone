import React, { ReactNode, useMemo, useState } from 'react';
import CrossButton from '../UI/crossButton/CrossButton';
import style from './ModalReview.module.scss';

type TModalReviewProps = {
  closeModal: () => void;
};

const ModalReview: React.FC<TModalReviewProps> = ({ closeModal }) => {
  const [rateValue] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const valueBlock: Array<ReactNode> = useMemo(() => {
    return rateValue.map((value) => {
      return (
        <div className={style.rate} key={value}>
          <button className={style.button}>
            <div className={style.button_value}>{value}</div>
          </button>
        </div>
      );
    });
  }, [rateValue]);
  return (
    <div className={style.wrapper}>
      <CrossButton closeModal={closeModal} addingClass={style.cross} />
      <div className={style.content}>
        <h2 className={style.title}>Ваша оценка</h2>
        <p className={style.text}>Оценки улучшают рекомендации</p>
        <div className={style.ratingBlock}>
          <div className={style.rating}>{valueBlock}</div>
          <div className={style.labelBlock}>
            <p className={style.labelBlock_text}>очень плохо</p>
            <p className={style.labelBlock_text}>отлично</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReview;
