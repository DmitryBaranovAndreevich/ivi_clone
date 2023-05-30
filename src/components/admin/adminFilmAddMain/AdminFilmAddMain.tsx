import React, { useState } from 'react';
import UILink from '../../UI/Link/UILink';
import style from './AdminFilmAddMain.module.scss';

const AdminFilmAddMain = () => {
  return (
    <div>
      <h5 className={style.subtitle}>Выберете способ добавления фильма</h5>
      <ul className={style.list}>
        <li className={style.item}>
          <UILink
            addingClass={style.link}
            title={'С помощью id фильма на кинопоиске'}
            href={'/admin/films/add/id'}
          />
        </li>
        <li className={style.item}>
          <UILink
            addingClass={style.link}
            title={'Самостоятельное добавление'}
            href={'/admin/films/add/self'}
          />
        </li>
      </ul>
    </div>
  );
};

export default AdminFilmAddMain;
