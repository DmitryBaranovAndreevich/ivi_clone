import React, { useMemo, useState } from 'react';
import AdminFilmItem from '../../../components/admin/adminFilmItem/AdminFilmItem';
import ButtonWithoutBgc from '../../../components/UI/buttonWithoutBgc/ButtonWithoutBgc';
import Spinner from '../../../components/UI/spinner/Spinner';
import { useGetFilmsQuery } from '../../../store/api/filmApi';
import { IFilm } from '../../../type/TFilm';
import style from './AdminFilms.module.scss';
import logoCross from './../../../assests/svg/logoCross.svg';
import { useNavigate } from 'react-router-dom';

const AdminFilms = () => {
  // const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(2);
  const indexShowElement = useMemo(() => {
    return pageSize * currentPage;
  }, [pageSize, currentPage]);
  const {
    data: films,
    isLoading,
    refetch,
  } = useGetFilmsQuery(
    { pathName: null, searchRatingGte: null, searchRatingsNumberGte: null },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const filmsBlock = useMemo(() => {
    return films?.map((film: IFilm) => {
      return (
        <AdminFilmItem
          key={film.id}
          filmId={film.id}
          filmPoster={film.poster}
          filmName={film.name}
          filmOriginalName={film.originalName}
          refetch={refetch}
        />
      );
    });
  }, [films, refetch]);
  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner size={'big'} />
      </div>
    );
  }
  return (
    <div className={style.container}>
      <div className={style.table}>
        <h2 className={style.table_title}>Фильмы</h2>
        <div className={style.table_header}>
          <p className={style.table_header_block}></p>
          <p className={style.table_header_block}>Название (русское)</p>
          <p className={style.table_header_block}>Название (английское)</p>
          <p></p>
          <button className={style.add} onClick={() => navigate('/admin/films/add')}>
            <img className={style.add_logo} src={logoCross} alt="add" />
          </button>
        </div>
        {filmsBlock?.slice(0, indexShowElement)}
      </div>
      {films && films.length > indexShowElement && (
        <div className={style.showMore}>
          <ButtonWithoutBgc
            addingClass={style.showMore}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Показать еще
          </ButtonWithoutBgc>
        </div>
      )}
    </div>
  );
};

export default AdminFilms;
