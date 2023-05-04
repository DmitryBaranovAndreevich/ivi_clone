import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useGetFilmsQuery } from '../../store/api/filmApi';
import { sortList } from '../../utils/helperWithSort';
import { IFilm } from '../filmContent/TFilm';
import ButtonShowMore from '../UI/buttonShowMore/ButtonShowMore';
import MoviesList from './MoviesList';
import style from './MoviesListBlock.module.scss';

const MoviesListBlock = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(2);
  const location = useLocation();
  const { data: filmFilter } = useGetFilmsQuery(
    { pathName: location.pathname.replace(/\/movies/, ''), search: location.search },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const [filmSort, setFilmSort] = useState(filmFilter);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setFilmSort(sortList(String(searchParams.get('sort')), filmFilter));
  }, [filmFilter, searchParams]);
  return (
    <div className={style.movies}>
      {filmFilter && (
        <MoviesList filmSort={filmSort && filmSort.slice(0, pageSize * currentPage)} />
      )}
      <div className={style.showMore}>
        <ButtonShowMore currentPage={currentPage} setCurrentPage={setCurrentPage}>
          Показать еще
        </ButtonShowMore>
      </div>
    </div>
  );
};

export default MoviesListBlock;
