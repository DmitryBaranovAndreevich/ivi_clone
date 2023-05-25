import React, { FormEvent } from 'react';
import style from './redButton.module.scss';
import Spinner from '../spinner/Spinner';

type TRedButtonProps = {
  addingClass?: string;
  text: string;
  onClick?: (e: FormEvent) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isLoad?: boolean;
  isDisabled?: boolean;
};

const RedButton: React.FC<TRedButtonProps> = ({
  addingClass,
  text,
  onClick,
  type,
  isLoad = false,
  isDisabled,
}) => {
  return (
    <button
      className={style.btn + ' ' + addingClass}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {isLoad ? (
        <div className={style.spinner}>
          <Spinner size={'small'} />
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default RedButton;
