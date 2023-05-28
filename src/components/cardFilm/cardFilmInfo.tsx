import { useMemo } from 'react';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import style from './cardFilm.module.scss';

type TCardFilmInfoProps = { filmId: number };

const CardFilmInfo: React.FC<TCardFilmInfoProps> = ({ filmId }) => {
  const { data: film } = useGetOneFilmQuery({ id: String(filmId) });
  const year = film?.year ?? undefined;
  const country = film?.countries[0] ? film?.countries[0].name : undefined;
  const genre = film?.genres[0] ? film?.genres[0].name : undefined;

  const filmInfoTxtContent = useMemo(() => {
    return [year, country, genre].filter((el: string | number | undefined) => el).join(', ');
  }, [year, country, genre]);
  return (
    <div className={style.imageSection_information_content_properties}>{filmInfoTxtContent}</div>
  );
};

export default CardFilmInfo;
