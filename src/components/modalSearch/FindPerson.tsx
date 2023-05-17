import React from 'react';
import { Link } from 'react-router-dom';
import logoUserRed from './../../assests/svg/logoUserRed.svg';
import style from './ModalSearch.module.scss';

type TFindPersonProps = {
  namePerson: string;
  role: string;
};

const FindPerson: React.FC<TFindPersonProps> = ({ namePerson, role }) => {
  return (
    <div className={style.findItem}>
      <Link to="#" className={style.link}>
        <div className={style.iconBlock}>
          <img className={style.iconBlock_img} src={logoUserRed} alt={role} />
        </div>
        <div className={style.textBlock}>
          <p className={style.textBlock_title}>{namePerson}</p>
          <p className={style.textBlock_role}>{role}</p>
        </div>
      </Link>
    </div>
  );
};

export default FindPerson;
