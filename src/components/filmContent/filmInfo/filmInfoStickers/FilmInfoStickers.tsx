import React, { ReactNode, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { string } from 'yup';
import { IActors } from '../../../../type/TFilm';
import { TParamListMovie } from '../../../../type/type';
import UILink from '../../../UI/Link/UILink';
import style from './FilmInfoStickers.module.scss';
import StickerCard from './StickerCard';

type TFilmInfoStickersProps = {
  actors: Array<IActors>;
  rating: number;
};

const FilmInfoStickers: React.FC<TFilmInfoStickersProps> = ({ actors, rating }) => {
  const [hover, setHover] = useState<null | string>(null);
  const onMouseEnter = (caption: string) => {
    setHover(caption);
  };
  const onMouseLeave = () => {
    setHover(null);
  };
  const blockActors: Array<ReactNode> = useMemo(() => {
    return actors?.map((actor) => {
      return (
        <li
          key={actor.id}
          className={style.stickerItem}
          onMouseEnter={() => onMouseEnter(actor.name)}
          onMouseLeave={onMouseLeave}
        >
          <Link to={`/person/${actor.name}`} className={style.sticker}>
            <StickerCard type="actor" caption={actor.name} avatar={actor.photo} hover={hover} />
          </Link>
        </li>
      );
    });
  }, [actors, onMouseEnter, onMouseLeave, hover]);
  return (
    <ul className={style.stickersList}>
      <li
        className={style.stickerItem}
        onMouseEnter={() => onMouseEnter('Рейтинг Кинопоиск')}
        onMouseLeave={onMouseLeave}
      >
        <div className={style.sticker}>
          <StickerCard type="rating" rating={rating} caption="Рейтинг Кинопоиск" hover={hover} />
        </div>
      </li>
      {blockActors}
    </ul>
  );
};

export default FilmInfoStickers;
