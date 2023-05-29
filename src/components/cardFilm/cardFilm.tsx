import logoBookmark from '../../assests/svg/logoBookmark.svg';
import logoMagic from '../../assests/svg/logoMagic.svg';
import logoStarLight from '../../assests/svg/logoStarLight.svg';
import logoCircle from '../../assests/svg/logoCircle.svg';
import style from './cardFilm.module.scss';
import { useState } from 'react';
import CardFilmRating from './cardFilmRating';
import CardFilmInfo from './cardFilmInfo';
import CardFilmDuration from './cardFilmDuration';
import { Link } from 'react-router-dom';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import { useTranslation } from 'react-i18next';

type TCardFilmProps = {
  filmId: number;
  name: string;
  image: string;
  duration: number;
  rating: string;
};

const CardFilm: React.FC<TCardFilmProps> = ({ filmId, image, name, duration, rating }) => {
  const [isMouseOverImageSection, setIsMouseOverImageSection] = useState(false);
  const { t } = useTranslation();
  return (
    <Link
      to={`/watch/${filmId}`}
      className={style.card}
      onMouseOver={() => setIsMouseOverImageSection(true)}
      onMouseOut={() => setIsMouseOverImageSection(false)}
      data-testid="CardFilm_link"
    >
      <div
        className={
          style.imageSection + ' ' + (isMouseOverImageSection && style.imageSection_active)
        }
      >
        <div className={style.imageSection_image_wrp}>
          <img className={style.imageSection_image} src={image} alt={name} />
        </div>
        <div
          className={
            style.imageSection_information +
            ' ' +
            (isMouseOverImageSection && style.imageSection_information_show)
          }
          data-testid="CardFilm_information"
        >
          <div className={style.imageSection_information_buttons}>
            <div className={style.imageSection_information_buttons_btn}>
              <img src={logoBookmark} alt="logoBookmark" title={t('cardFilm.watchLater') ?? ''} />
            </div>
            <div className={style.imageSection_information_buttons_btn}>
              <img src={logoMagic} alt="logoMagic" title={t('cardFilm.similar') ?? ''} />
            </div>
            <div className={style.imageSection_information_buttons_btn}>
              <img
                src={logoStarLight}
                alt="logoStarLight"
                title={t('cardFilm.alreadyWatched') ?? ''}
              />
            </div>
            <div className={style.imageSection_information_buttons_btn}>
              <img src={logoCircle} alt="logoCircle" title={t('cardFilm.notLike') ?? ''} />
            </div>
          </div>
          <div className={style.imageSection_information_content}>
            <CardFilmRating rating={rating} />
            <div className={style.imageSection_information_content_rate}>
              <div className={style.imageSection_information_content_rate_name}>
                {t('cardFilm.actors')}
              </div>
              <div className={style.imageSection_information_content_rate_range}>
                <div className={style.imageSection_information_content_rate_range_progress}></div>
              </div>
            </div>
            <CardFilmInfo filmId={filmId} />
            <CardFilmDuration>
              {duration} {t('cardFilm.min')}
            </CardFilmDuration>
          </div>
        </div>
      </div>
      <div className={style.textSection}>
        <div className={style.textSection_title}>
          <span>{name}</span>
        </div>
        <div className={style.textSection_extra}>
          <span>{t('cardFilm.free')}</span>
        </div>
      </div>
    </Link>
  );
};

export default CardFilm;
