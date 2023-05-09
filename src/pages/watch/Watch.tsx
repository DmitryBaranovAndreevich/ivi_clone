import React from 'react';
import { useParams } from 'react-router-dom';
import FilmContent from '../../components/filmContent/FilmContent';
import FilmCreators from '../../components/filmCreators/FilmCreators';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import { IFilm, IFilmsList } from '../../type/TFilm';
import styles from './Watch.module.scss';
import films from './../../components/filmContent/films.json';
import filmsList from './../../components/filmContent/filmsList.json';
import ReviewCard from '../../components/reviewCard/ReviewCard';
import RelatedFilms from '../../components/relatedFilms/RelatedFilms';
import FilmReview from '../../components/filmReview/FilmReview';
import UIModal from '../../components/UI/modal/UIModal';

const Watch = () => {
  const params = useParams();
  const { data: film } = useGetOneFilmQuery({ id: params.id });
  // const film: IFilm = films;
  return (
    <div className={styles.container}>
      {film ? (
        <React.Fragment>
          <FilmContent film={film} />
          <RelatedFilms title={film.name} relatedFilms={film.relatedFilms}></RelatedFilms>
          <FilmCreators
            directors={film.directors}
            actors={film.actors}
            producers={film.producers}
            writers={film.writers}
          />
          <FilmReview
            nameFilm={film.name}
            title="Топ коммент kkdcmseknrsvdc jkrelkncjmelrknvsdc rejlnvck."
            text="Мне понравился фильмf fr jjfkencx jekcmkxn fn4lemkc flkek."
          />
        </React.Fragment>
      ) : (
        <p>Фильм не найден</p>
      )}
    </div>
  );
};

export default Watch;
