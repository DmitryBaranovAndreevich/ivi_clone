import React from 'react';
import CrossButton from '../UI/crossButton/CrossButton';
import style from './ModalTrailer.module.scss';

type TModaTrailerProps = {
  trailer: string;
  closeModal: () => void;
};

const ModalTrailer: React.FC<TModaTrailerProps> = ({ trailer, closeModal }) => {
  return (
    <div className={style.wrapper}>
      <CrossButton onClick={closeModal} addingClass={style.cross} />
      <div className={style.content}>
        <div className={style.video}>
          <iframe className={style.iframe} src={trailer}></iframe>
        </div>
      </div>
    </div>
  );
};

export default ModalTrailer;
