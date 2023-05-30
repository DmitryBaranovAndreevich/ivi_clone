import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import style from './AdminModal.module.scss';

type TAdminModalProps = {
  children: ReactNode;
};

const AdminModal: React.FC<TAdminModalProps> = ({ children }) => {
  return createPortal(
    <div className={style.modal}>
      <div className={style.modal_txt}>{children}</div>
    </div>,
    document.body
  );
};

export default AdminModal;
