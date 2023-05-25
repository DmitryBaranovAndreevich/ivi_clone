import { getIntegerAndFractionRate } from '../../utils/helperWithRating';
import style from './cardFilm.module.scss';

type TCardFilmRatingProps = {
  rating: string;
};

const CardFilmRating: React.FC<TCardFilmRatingProps> = ({ rating }) => {
  const { rateInteger, rateFraction } = getIntegerAndFractionRate(rating);
  return (
    <div className={style.imageSection_information_content_value}>
      <div
        className={style.imageSection_information_content_value_integer}
        data-testid="rateInteger"
      >
        {rateInteger}
      </div>
      <div
        className={style.imageSection_information_content_value_defraction}
        data-testid="rateFraction"
      >
        ,{rateFraction}
      </div>
    </div>
  );
};

export default CardFilmRating;
