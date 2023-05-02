import React from 'react';
import { formatDurationFilm } from '../../../hooks/helperFilm';
import UILink from '../../UI/Link/UILink';
import style from './FilmInfo.module.scss';

type TFilmInfoProps = {
  name: string;
  year: number;
  duration: string;
  mpaaRating: string;
};

const FilmInfo: React.FC<TFilmInfoProps> = ({ name, year, duration, mpaaRating }) => {
  return (
    <div className={style.info}>
      <div className={style.titleBlock}>
        <h2 className={style.titleBlock_title}>{name}</h2>
      </div>
      <div>
        <ul>
          <li>
            <UILink href={`/movies/${year}`} title={String(year)} addingClass={style.link} />
          </li>
          <li>{formatDurationFilm(duration)}</li>
          <li>{mpaaRating}</li>
        </ul>
        <ul>
          <li>
            <UILink href={`/movies/`} title={'q'} addingClass={style.link} />
          </li>
          <li>
            <UILink href={`/movies/`} title={'q'} addingClass={style.link} />
          </li>
          <li>
            <UILink href={`/movies/`} title={'q'} addingClass={style.link} />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <div>8.1</div>
            <div>
              <span>Рейтинг</span>
              <span>кинопоиск</span>
            </div>
          </li>
          <li>
            <div>8.1</div>
            <div>
              <span>Рейтинг</span>
              <span>кинопоиск</span>
            </div>
          </li>
          <li>
            <div>8.1</div>
            <div>
              <span>Рейтинг</span>
              <span>кинопоиск</span>
            </div>
          </li>
          <li>
            <div>8.1</div>
            <div>
              <span>Рейтинг</span>
              <span>кинопоиск</span>
            </div>
          </li>
          <li>
            <div>8.1</div>
            <div>
              <span>Рейтинг</span>
              <span>кинопоиск</span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div></div>
        <button></button>
      </div>
      <div>
        <div>8.1</div>
        <div className="ratingMobile__textBlock">
          <div className="ratingMobile__title">Рейтинг Иви</div>
          <div className="ratingMobile__subtitle">Интересный сюжет</div>
          <div className="ratingMobile__extra">203 197 оценок</div>
        </div>
        <div>
          <button>Оценить</button>
        </div>
      </div>
    </div>
  );
};

export default FilmInfo;
