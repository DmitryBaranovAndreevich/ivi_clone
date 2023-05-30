import React from 'react';
import { useParams } from 'react-router-dom';
import AdminFilmAddById from '../../../components/admin/adminFilmAddById/AdminFilmAddById';
import AdminFilmAddMain from '../../../components/admin/adminFilmAddMain/AdminFilmAddMain';
import AdminFilmAddSelf from '../../../components/admin/adminFilmAddSelf/AdminFilmAddSelf';
import LinkBack from '../../../components/UI/linkStepBack/LinkBack';
import style from './AdminFilmsAdd.module.scss';

const AdminFilmsAdd: React.FC = () => {
  const params = useParams();
  return (
    <div className={style.container}>
      <LinkBack href={`/admin`} text="Назад" />
      <h2 className={style.title}>Добавление фильма</h2>
      {!params.method && <AdminFilmAddMain />}
      {params.method === 'id' && <AdminFilmAddById />}
      {params.method === 'self' && <AdminFilmAddSelf />}
    </div>
  );
};

export default AdminFilmsAdd;
