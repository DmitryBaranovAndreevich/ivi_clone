import React, { ReactNode, useMemo, useState } from 'react';
import CreatorList from './CreatorList';
import { IActors, IDirectors, IProducers, IWriters } from '../../type/TFilm';
import style from './FilmCreators.module.scss';

type TFilmCreatorsProps = {
  directors: Array<IDirectors>;
  actors: Array<IActors>;
  producers: Array<IProducers>;
  writers: Array<IWriters>;
};

const FilmCreators: React.FC<TFilmCreatorsProps> = ({ directors, actors, producers, writers }) => {
  return (
    <div className={style.creator}>
      <div className={style.titleBlock}>
        <h2 className={style.title}>Актеры и создали</h2>
      </div>
      <div className={style.creator_list}>
        <CreatorList personList={directors.slice(0, 1)} role="director" />
        <CreatorList personList={actors.slice(0, 9)} role="actor" />
        <div>
          <button className={style.button}>
            <p className={style.button_text}>Еще</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilmCreators;
