import { FC } from 'react';
import styles from './sliderButton.module.scss';
import useAppMediaQuery from '../../../hooks/useAppMediaQuery';

interface ISliderButton {
  direction: string;
  addClass: string;
  onClick?: () => void;
}

const SliderButton: FC<ISliderButton> = ({ direction, addClass, onClick }) => {
  const { isTablet } = useAppMediaQuery();
  return (
    <div className={`${styles.container} ${addClass}`} onClick={onClick}>
      {direction === 'right' && (
        <svg
          width={isTablet ? '10' : '20'}
          height="68"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.75" d="M1 17L8 9L1 0.999999" stroke="#C7C3C3" strokeWidth="2" />
        </svg>
      )}
      {direction === 'left' && (
        <svg
          width={isTablet ? '10' : '20'}
          height="58"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 1L2 9L9 17" stroke="#C7C3C3" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
};

export default SliderButton;
