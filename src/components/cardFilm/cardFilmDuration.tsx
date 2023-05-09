import { ReactNode, useMemo } from 'react';
import style from './cardFilm.module.scss';

type TCardFilmDurationProps = {
  children: ReactNode;
};

const CardFilmDuration: React.FC<TCardFilmDurationProps> = ({ children }) => {
  return <div className={style.imageSection_information_content_duration}>{children}</div>;
};

export default CardFilmDuration;
