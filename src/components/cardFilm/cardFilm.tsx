import logoBookmark from '../../assests/svg/logoBookmark.svg';
import logoMagic from '../../assests/svg/logoMagic.svg';
import logoStarLight from '../../assests/svg/logoStarLight.svg';
import logoCircle from '../../assests/svg/logoCircle.svg';
import style from './cardFilm.module.scss';
import { useMemo, useState } from 'react';
import CardFilmRating from './cardFilmRating';
import CardFilmInfo from './cardFilmInfo';
import CardFilmDuration from './cardFilmDuration';
import { Link } from 'react-router-dom';

type TCardFilmProps = {
  filmId: number;
  name: string;
  year: number;
  country: string;
  genre: string;
  image: string;
  duration: number;
  size: 'big' | 'medium';
};

const CardFilm: React.FC<TCardFilmProps> = ({
  filmId,
  image,
  name,
  year,
  country,
  genre,
  duration,
  size,
}) => {
  const [isMouseOverImageSection, setIsMouseOverImageSection] = useState(false);

  return (
    <Link
      to={`/watch/${filmId}`}
      className={style.card}
      onMouseOver={() => setIsMouseOverImageSection(true)}
      onMouseOut={() => setIsMouseOverImageSection(false)}
    >
      <div
        className={
          style.imageSection + ' ' + (isMouseOverImageSection && style.imageSection_active)
        }
      >
        <div className={style.imageSection_image_wrp}>
          <img
            className={style.imageSection_image}
            src={image}
            alt={name}
            style={size === 'big' ? { minHeight: 450 } : { minHeight: 200 }}
          />
        </div>
        <div
          className={
            style.imageSection_information +
            ' ' +
            (isMouseOverImageSection && style.imageSection_information_show)
          }
        >
          <div className={style.imageSection_information_buttons}>
            <div className={style.imageSection_information_buttons_btn}>
              <img src={logoBookmark} alt="logoBookmark" title="Смотреть позже" />
            </div>
            <div className={style.imageSection_information_buttons_btn}>
              <img src={logoMagic} alt="logoMagic" title="Похожее" />
            </div>
            <div className={style.imageSection_information_buttons_btn}>
              <img src={logoStarLight} alt="logoStarLight" title="Уже смотрел, оценить" />
            </div>
            <div className={style.imageSection_information_buttons_btn}>
              <img src={logoCircle} alt="logoCircle" title="Не нравится такое" />
            </div>
          </div>
          <div className={style.imageSection_information_content}>
            <CardFilmRating ratingsNumber={8.4} />
            <div className={style.imageSection_information_content_rate}>
              <div className={style.imageSection_information_content_rate_name}>Актеры</div>
              <div className={style.imageSection_information_content_rate_range}>
                <div className={style.imageSection_information_content_rate_range_progress}></div>
              </div>
            </div>
            <CardFilmInfo year={year} country={country} genre={genre} />
            <CardFilmDuration>{duration} мин.</CardFilmDuration>
          </div>
        </div>
      </div>
      <div className={style.textSection}>
        <div className={style.textSection_title}>
          <span>{name}</span>
        </div>
        <div className={style.textSection_extra}>
          <span>Бесплатно</span>
        </div>
      </div>
    </Link>
  );
};

export default CardFilm;
