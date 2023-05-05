import logoBookmark from '../../assests/svg/logoBookmark.svg';
import logoMagic from '../../assests/svg/logoMagic.svg';
import logoStarLight from '../../assests/svg/logoStarLight.svg';
import logoCircle from '../../assests/svg/logoCircle.svg';
import style from './cardFilm.module.scss';
import { useMemo, useState } from 'react';
import { IFilmsList } from '../../type/TFilm';

type TRelatedFilmsProps = {
  relatedFilms: Array<IFilmsList>;
};

const RelatedFilms: React.FC<TRelatedFilmsProps> = ({ relatedFilms }) => {
  return <div></div>;
};

export default RelatedFilms;
