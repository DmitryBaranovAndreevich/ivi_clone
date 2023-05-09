import logoBookmark from '../../assests/svg/logoBookmark.svg';
import logoMagic from '../../assests/svg/logoMagic.svg';
import logoStarLight from '../../assests/svg/logoStarLight.svg';
import logoCircle from '../../assests/svg/logoCircle.svg';
import style from './RelatedFilms.module.scss';
import { useMemo, useState } from 'react';
import { IFilmsList } from '../../type/TFilm';
import CategoriesSlider from '../categoriesSlider/CategoriesSlider';

type TRelatedFilmsProps = {
  title: string;
  relatedFilms: Array<IFilmsList>;
};

const RelatedFilms: React.FC<TRelatedFilmsProps> = ({ relatedFilms, title }) => {
  return (
    <div>
      <div className={style.titleBlock}>
        <h2 className={style.title}>С фильмом «{title}» смотрят</h2>
      </div>
      {/* <CategoriesSlider items={relatedFilms}></CategoriesSlider> */}
    </div>
  );
};

export default RelatedFilms;
