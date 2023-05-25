import React from 'react';
import { useParams } from 'react-router-dom';
import FilmContent from '../../components/filmContent/FilmContent';
import FilmCreators from '../../components/filmCreators/FilmCreators';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import styles from './Watch.module.scss';
import RelatedFilms from '../../components/relatedFilms/RelatedFilms';
import FilmReview from '../../components/filmReview/FilmReview';
import Spinner from '../../components/UI/spinner/Spinner';
import FilmTrailer from '../../components/filmTrailer/FilmTrailer';
import FilmAllDevices from '../../components/filmDevices/FilmAllDevices';

const Watch = () => {
  const params = useParams();
  const { data: film, isLoading } = useGetOneFilmQuery({ id: params.id });
  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner size={'big'} />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {film ? (
        <React.Fragment>
          <FilmContent film={film} />
          {film.relatedFilms.length > 0 && (
            <RelatedFilms title={film.name} relatedFilms={film.relatedFilms}></RelatedFilms>
          )}
          <FilmCreators
            filmId={film.id}
            directors={film.directors}
            actors={film.actors}
            producers={film.producers}
            writers={film.writers}
          />
          <FilmTrailer filmId={film.id} filmPoster={film.poster} trailer={film.trailer} />
          <FilmReview filmId={film.id} nameFilm={film.name} review={film.reviews} />
          <FilmAllDevices filmPoster={film.poster} title={film.name} />
        </React.Fragment>
      ) : (
        <p>Фильм не найден</p>
      )}
    </div>
  );
};

export default Watch;
