import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import style from './cardFilm.module.scss';

type TCardFilmInfoProps = { filmId: number };

const CardFilmInfo: React.FC<TCardFilmInfoProps> = ({ filmId }) => {
  const { data: film } = useGetOneFilmQuery({ id: String(filmId) });
  const { i18n } = useTranslation();
  const year = film?.year ?? undefined;
  const country = film?.countries[0]
    ? i18n.language === 'ru'
      ? film.countries[0].name
      : film.countries[0].englishName
    : undefined;
  const genre = film?.genres[0]
    ? i18n.language === 'ru'
      ? film.genres[0].name
      : film.genres[0].englishName
    : undefined;

  const filmInfoTxtContent = useMemo(() => {
    return [year, country, genre].filter((el: string | number | undefined) => el).join(', ');
  }, [year, country, genre]);
  return (
    <div className={style.imageSection_information_content_properties}>{filmInfoTxtContent}</div>
  );
};

export default CardFilmInfo;
