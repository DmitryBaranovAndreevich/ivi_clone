import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import style from './UIModal.module.scss';

type TUIModalProps = {
  closeModal?: () => void;
  children: ReactNode;
};

const UIModal: React.FC<TUIModalProps> = ({ children }) => {
  return createPortal(
    <div className={style.modal}>
      <div className={style.bgc}></div>
      {children}
    </div>,
    document.body
  );
};

export default UIModal;
