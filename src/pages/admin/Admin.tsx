import React from 'react';
import style from './Admin.module.scss';
import UILink from './../../components/UI/Link/UILink';

const Admin = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Изменение данных</h2>
      <ul className={style.list}>
        <li className={style.item}>
          <UILink href="/admin/films" title="Фильмы" addingClass={style.link} />
        </li>
        <li className={style.item}>
          <UILink href="/admin/genres" title="Жанры" addingClass={style.link} />
        </li>
      </ul>
    </div>
  );
};

export default Admin;
