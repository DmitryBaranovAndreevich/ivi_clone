import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import style from './WatchExtra.module.scss';
import logoClock from './../../assests/svg/logoClock.svg';
import { IFilm } from '../../type/TFilm';
import films from '../../components/filmContent/films.json';
import Spinner from '../../components/UI/spinner/Spinner';
import WatchExtraAside from '../../components/watchExtraAside/WatchExtraAside';
import WatchExtraContent from '../../components/watchExtraContent/WatchExtraAside';

// type TWatchExtraPageProps = {
// };

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
      <Link to="#">
        <div></div>
        <div>К фильму</div>
      </Link>
      <WatchExtraContent
        choosenPage={params.page ? params.page : ''}
        filmName={film.name}
        filmId={film.id}
        reviews={film.reviews}
      />
      <WatchExtraAside
        filmId={film.id}
        poster={film.poster}
        filmName={film.name}
        ratingsNumber={film.ratingsNumber}
        year={film.year}
        country={film.countries.length > 0 ? film.countries[0].name : ''}
        genre={film.countries.length > 0 ? film.genres[0].name : ''}
        duration={film.duration}
      />
    </div>
  );
};

export default WatchExtra;