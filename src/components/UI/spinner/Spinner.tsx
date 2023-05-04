import { FC } from 'react';
import spinnerStyle from './spinner.module.css';

interface ISpinner {
  size: 'big' | 'small';
}

const Spinner: FC<ISpinner> = ({ size }) => {
  return (
    <div
      className={`{spinnerStyle.spinner} ${
        size === 'big' ? spinnerStyle.spinner_big : spinnerStyle.spinner_small
      }`}
    >
      <i
        className={`${spinnerStyle.spinner__i} ${
          size === 'big' ? spinnerStyle.spinner__i_big : spinnerStyle.spinner__i_small
        }`}
      ></i>
    </div>
  );
};

export default Spinner;
