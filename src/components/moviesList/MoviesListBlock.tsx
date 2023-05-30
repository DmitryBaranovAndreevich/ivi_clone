import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useGetFilmsQuery } from '../../store/api/filmApi';
import { moviesSort } from '../../store/reducers/MoviesSort';
import { sortList } from '../../utils/helperWithSort';
import ButtonWithoutBgc from '../UI/buttonWithoutBgc/ButtonWithoutBgc';
import MoviesList from './MoviesList';
import style from './MoviesListBlock.module.scss';

const MoviesListBlock = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const indexShowElement = useMemo(() => {
    return pageSize * currentPage;
  }, [pageSize, currentPage]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { data: filmFilter } = useGetFilmsQuery(
    {
      pathName: location.pathname.replace(/\/movies/, ''),
      searchRatingGte: searchParams.get('rating_gte'),
      searchRatingsNumberGte: searchParams.get('ratingsNumber_gte'),
      searchPerson: searchParams.get('person'),
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const [filmSort, setFilmSort] = useState(filmFilter);
  useEffect(() => {
    setFilmSort(sortList(String(searchParams.get('sort')), filmFilter));
  }, [filmFilter, searchParams]);
  const dispatch = useAppDispatch();
  const { setMaxRatingCountOfFilm } = moviesSort.actions;
  useEffect(() => {
    const sorrtArrayFilm = sortList('mark', filmFilter);
    let ratingCount = 0;
    if (sorrtArrayFilm) {
      ratingCount = sorrtArrayFilm[0] && sorrtArrayFilm[0].ratingsNumber;
    }
    dispatch(setMaxRatingCountOfFilm({ ratingCount }));
  }, [filmFilter, setMaxRatingCountOfFilm, dispatch]);

  return (
    <div className={style.movies}>
      {filmFilter && <MoviesList filmSort={filmSort && filmSort} />}
      {filmFilter && filmFilter.length > indexShowElement && (
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

export default MoviesListBlock;
