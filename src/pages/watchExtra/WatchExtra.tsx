import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import style from './WatchExtra.module.scss';
import logoArrow from './../../assests/svg/logoArrow.svg';
import Spinner from '../../components/UI/spinner/Spinner';
import WatchExtraAside from '../../components/watchExtraAside/WatchExtraAside';
import WatchExtraContent from '../../components/watchExtraContent/WatchExtraContent';
import LinkBack from '../../components/UI/linkStepBack/LinkBack';

const WatchExtra = () => {
  const params = useParams();
  const { data: film, isLoading } = useGetOneFilmQuery({ id: String(params.id) });
  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner size={'big'} />
      </div>
    );
  }
  // const film: IFilm = films;
  if (!film) return <div>Фильм не найден!</div>;
  return (
    <div className={style.container}>
      <LinkBack href={`/watch/${params.id}`} text="К фильму" />
      <WatchExtraContent
        choosenPage={params.page ? params.page : ''}
        filmPoster={film.poster}
        filmTrailer={film.trailer}
        filmName={film.name}
        filmId={film.id}
        reviews={film.reviews}
      />
      <WatchExtraAside
        filmId={film.id}
        poster={film.poster}
        filmName={film.name}
        rating={film.rating}
        year={film.year}
        country={film.countries.length > 0 ? film.countries[0].name : ''}
        genre={film.countries.length > 0 ? film.genres[0].name : ''}
        duration={film.duration}
      />
    </div>
  );
};

export default WatchExtra;
