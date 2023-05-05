import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './PersonItem.module.scss';

type TPersonItemProps = {
  name: string;
  originalName: string;
  photo: string;
  id: number;
  role: string;
  addingClass: string;
};

const PersonItem: React.FC<TPersonItemProps> = ({ name, originalName, photo, id, role }) => {
  const nameArray = name.split(' ');
  return (
    <Link className={style.person} to={`/person/${originalName}`}>
      <div className={style.avatarSection}>
        <img className={style.avatarSection_img} src={photo} />
      </div>
      <div className={style.textSection}>
        {nameArray[0] && <span className={style.textSection_name}>{nameArray[0]}</span>}
        {nameArray[1] && <span className={style.textSection_name}>{nameArray[1]}</span>}
        <span className={style.textSection_role}>{role}</span>
      </div>
    </Link>
  );
};

export default PersonItem;
