import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonWithHoverBgc from '../buttonWithHoverBgc/ButtonWithHoverBgc';
import style from './BreadCrumbs.module.scss';

type PropsType = {
  children: React.ReactNode;
};

const BreadCrumbs: React.FC = ({}) => {
  const navigate = useNavigate();
  return (
    <div className={style.breadCrumbs}>
      <ul className={style.list}>
        <li className={style.item}>
          <ButtonWithHoverBgc
            title="Другие"
            addingClass={style.button}
            onClick={() => navigate('https://www.ivi.tv/profile/subscriptio')}
          />
        </li>
        <li className={style.item}>
          <ButtonWithHoverBgc
            title="Другие"
            addingClass={style.button}
            onClick={() => navigate('https://www.ivi.tv/profile/subscriptio')}
          />
        </li>
        <li className={style.item}>
          <ButtonWithHoverBgc
            title="Другие"
            addingClass={style.button}
            onClick={() => navigate('https://www.ivi.tv/profile/subscriptio')}
          />
        </li>
      </ul>
    </div>
  );
};
export default BreadCrumbs;
