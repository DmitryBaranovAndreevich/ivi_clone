import logoBookmark from '../../assests/svg/logoBookmark.svg';
import logoMagic from '../../assests/svg/logoMagic.svg';
import logoStarLight from '../../assests/svg/logoStarLight.svg';
import logoCircle from '../../assests/svg/logoCircle.svg';
import style from './cardFilm.module.scss';
import { useMemo, useState } from 'react';

type TCardFilmProps = {
  image: string;
  name: string;
  year: number;
  country: string;
  genre: string;
};

const CardFilm: React.FC<TCardFilmProps> = ({ image, name, year, country, genre }) => {
  const [isMouseOverImageSection, setIsMouseOverImageSection] = useState(false);
  const rateInteger = 8;
  const rateFraction = 4;

  const filmInfoTxtContent = useMemo(() => {
    return `${year}, ${country}, ${genre}`;
  }, [year, country, genre]);

  return (
    <div
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
          <img className={style.imageSection_image} src={image} alt={name} />
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
            <div className={style.imageSection_information_content_value}>
              <div className={style.imageSection_information_content_value_integer}>
                {rateInteger}
              </div>
              <div className={style.imageSection_information_content_value_defraction}>
                ,{rateFraction}
              </div>
            </div>
            <div className={style.imageSection_information_content_rate}>
              <div className={style.imageSection_information_content_rate_name}>Актеры</div>
              <div className={style.imageSection_information_content_rate_range}>
                <div className={style.imageSection_information_content_rate_range_progress}></div>
              </div>
            </div>
            <div className={style.imageSection_information_content_properties}>
              {filmInfoTxtContent}
            </div>
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
    </div>
  );
};

export default CardFilm;
