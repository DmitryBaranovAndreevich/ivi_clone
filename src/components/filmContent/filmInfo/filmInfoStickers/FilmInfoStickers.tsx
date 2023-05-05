import React, { ReactNode, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TParamListMovie } from '../../../../type/type';
import UILink from '../../../UI/Link/UILink';
import { IActors } from '../../TFilm';
import style from './FilmInfoStickers.module.scss';
import StickerCard from './StickerCard';

type TFilmInfoStickersProps = {
  actors: Array<IActors>;
  rating: number;
};

const FilmInfoStickers: React.FC<TFilmInfoStickersProps> = ({ actors, rating }) => {
  const blockActors: Array<ReactNode> = useMemo(() => {
    return actors?.map((actor) => {
      return (
        <li key={actor.id} className={style.stickerItem}>
          <Link to={`/person/${actor.name}`} className={style.sticker}>
            <StickerCard type="actor" caption={actor.name} avatar={actor.photo} />
          </Link>
        </li>
      );
    });
  }, [actors]);
  return (
    <ul className={style.stickersList}>
      <li className={style.stickerItem}>
        <div className={style.sticker}>
          <StickerCard type="rating" rating={rating} caption="Рейтинг Кинопоиск" />
        </div>
      </li>
      {blockActors}
    </ul>
  );
};

export default FilmInfoStickers;
