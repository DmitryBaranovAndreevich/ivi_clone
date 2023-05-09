import { useMemo } from 'react';
import style from './cardFilm.module.scss';

type TCardFilmInfoProps = {
  year: number;
  country: string;
  genre: string;
};

const CardFilmInfo: React.FC<TCardFilmInfoProps> = ({ year, country, genre }) => {
  const filmInfoTxtContent = useMemo(() => {
    return `${year}, ${country}, ${genre}`;
  }, [year, country, genre]);
  return (
    <div className={style.imageSection_information_content_properties}>{filmInfoTxtContent}</div>
  );
};

export default CardFilmInfo;
