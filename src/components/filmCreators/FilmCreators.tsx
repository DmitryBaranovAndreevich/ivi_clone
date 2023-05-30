import React from 'react';
import CreatorList from './CreatorList';
import { IActors, IDirectors, IProducers, IWriters } from '../../type/TFilm';
import style from './FilmCreators.module.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type TFilmCreatorsProps = {
  filmId: number;
  directors: Array<IDirectors>;
  actors: Array<IActors>;
  producers: Array<IProducers>;
  writers: Array<IWriters>;
};

const FilmCreators: React.FC<TFilmCreatorsProps> = ({ filmId, directors, actors }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={style.creator}>
      <div className={style.titleBlock}>
        <h2 className={style.title}>{t('movie.actors')}</h2>
      </div>
      <div className={style.creator_list}>
        <CreatorList personList={directors.slice(0, 1)} role="режиссер" />
        <CreatorList personList={actors.slice(0, 9)} role="актер" />
        <div>
          <button className={style.button} onClick={() => navigate(`/watch/${filmId}/persons`)}>
            <p className={style.button_text}>{t('movie.yet')}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilmCreators;
