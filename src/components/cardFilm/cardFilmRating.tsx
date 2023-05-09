import style from './cardFilm.module.scss';

type TCardFilmRatingProps = {
  ratingsNumber: number;
};

const CardFilmRating: React.FC<TCardFilmRatingProps> = ({ ratingsNumber }) => {
  const rateInteger = 8;
  const rateFraction = 4;
  return (
    <div className={style.imageSection_information_content_value}>
      <div className={style.imageSection_information_content_value_integer}>{rateInteger}</div>
      <div className={style.imageSection_information_content_value_defraction}>,{rateFraction}</div>
    </div>
  );
};

export default CardFilmRating;
