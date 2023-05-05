import React from 'react';
import { useParams } from 'react-router-dom';
import FilmContent from '../../components/filmContent/FilmContent';
import FilmCreators from '../../components/filmCreators/FilmCreators';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import { IFilm } from '../../type/TFilm';
import styles from './Watch.module.scss';
import films from './../../components/filmContent/films.json';
import ReviewCard from '../../components/reviewCard/ReviewCard';

const Watch = () => {
  const params = useParams();
  // const { data: film } = useGetOneFilmQuery({ id: params.id });
  const film: IFilm = films;
  return (
    <div className={styles.container}>
      {film ? (
        <React.Fragment>
          <FilmContent film={film} />
          Блок похожих фильмом
          <FilmCreators
            directors={film.directors}
            actors={film.actors}
            producers={film.producers}
            writers={film.writers}
          />
          <ReviewCard title="Топ коммент" text="Мне понравился фильм." />
        </React.Fragment>
      ) : (
        <p>Фильм не найден</p>
      )}
    </div>
  );
};

export default Watch;
