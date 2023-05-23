import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminGenreItem from '../../../components/admin/adminGenreItem/AdminGenreItem';
import { useAddFilmSelfMutation } from '../../../store/api/adminApi';
import { useGetGenresQuery } from '../../../store/api/appApi';
import { TGenreCountriesYears } from '../../../type/type';
import logoCross from './../../../assests/svg/logoCross.svg';
import style from './AdminGenres.module.scss';

const AdminGenres = () => {
  const navigate = useNavigate();
  const { data: genres, refetch } = useGetGenresQuery('');
  const [addFilmSelf, {}] = useAddFilmSelfMutation();
  const checkboxGenre = useMemo(() => {
    return genres?.map((genre: TGenreCountriesYears) => {
      return (
        <AdminGenreItem
          key={genre.id}
          genreId={genre.id}
          genreName={genre.name}
          refetch={refetch}
        />
      );
    });
  }, [genres, refetch]);
  return (
    <div className={style.container}>
      <h2 className={style.title}>Жанры</h2>
      <div className={style.container}>
        <div className={style.table_header}>
          <p className={style.table_header_block}>Название жанра</p>
          <button className={style.add} onClick={() => navigate('/admin/genres/add')}>
            <img className={style.add_logo} src={logoCross} alt="add" />
          </button>
        </div>
        {checkboxGenre}
      </div>
    </div>
  );
};

export default AdminGenres;
