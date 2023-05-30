import React, { ReactNode, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { IActors } from '../../../../type/TFilm';
import ModalReview from '../../../modalReview/ModalReview';
import UIModal from '../../../UI/modal/UIModal';
import style from './FilmInfoStickers.module.scss';
import StickerCard from './StickerCard';
import { useTranslation } from 'react-i18next';

type TFilmInfoStickersProps = {
  actors: Array<IActors>;
  rating: string;
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
  const { t, i18n } = useTranslation();
  const blockActors: Array<ReactNode> = useMemo(() => {
    return actors?.slice(0, 5).map((actor) => {
      return (
        <li
          key={actor.id}
          className={style.stickerItem}
          onMouseEnter={() => onMouseEnter(actor.name)}
          onMouseLeave={onMouseLeave}
        >
          <Link to={`/person/${actor.id}`} className={style.sticker}>
            <StickerCard
              type="actor"
              caption={i18n.language === 'ru' ? actor.name : actor.originalName}
              avatar={actor.photo}
              hover={hover}
            />
          </Link>
        </li>
      );
    });
  }, [actors, hover, i18n.language]);
  return (
    <ul className={style.stickersList}>
      <li
        className={style.stickerItem}
        onMouseEnter={() => onMouseEnter(t('movie.rating'))}
        onMouseLeave={onMouseLeave}
        onClick={() => setIsShowModal(true)}
      >
        <div className={style.sticker}>
          <StickerCard type="rating" rating={rating} caption={t('movie.rating')} hover={hover} />
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
