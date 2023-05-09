import React, { ReactNode, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { string } from 'yup';
import { IActors } from '../../../../type/TFilm';
import { TParamListMovie } from '../../../../type/type';
import ModalReview from '../../../modalReview/ModalReview';
import UILink from '../../../UI/Link/UILink';
import UIModal from '../../../UI/modal/UIModal';
import style from './FilmInfoStickers.module.scss';
import StickerCard from './StickerCard';

type TFilmInfoStickersProps = {
  actors: Array<IActors>;
  rating: number;
};

const FilmInfoStickers: React.FC<TFilmInfoStickersProps> = ({ actors, rating }) => {
  const [hover, setHover] = useState<null | string>(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const onMouseEnter = (caption: string) => {
    setHover(caption);
  };
  const onMouseLeave = () => {
    setHover(null);
  };
  const blockActors: Array<ReactNode> = useMemo(() => {
    return actors?.slice(0, 5).map((actor) => {
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
  }, [actors, hover]);
  return (
    <ul className={style.stickersList}>
      <li
        className={style.stickerItem}
        onMouseEnter={() => onMouseEnter('Рейтинг Кинопоиск')}
        onMouseLeave={onMouseLeave}
        onClick={() => setIsShowModal(true)}
      >
        <div className={style.sticker}>
          <StickerCard type="rating" rating={rating} caption="Рейтинг Кинопоиск" hover={hover} />
        </div>
      </li>
      {blockActors}
      {isShowModal && (
        <UIModal>
          <ModalReview closeModal={() => setIsShowModal(false)} />
        </UIModal>
      )}
    </ul>
  );
};

export default FilmInfoStickers;
