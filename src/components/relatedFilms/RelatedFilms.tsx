import style from './RelatedFilms.module.scss';
import { IFilmsList } from '../../type/TFilm';
import CategoriesSlider from '../categoriesSlider/CategoriesSlider';
import { useTranslation } from 'react-i18next';

type TRelatedFilmsProps = {
  title: string;
  relatedFilms: Array<IFilmsList>;
};

const RelatedFilms: React.FC<TRelatedFilmsProps> = ({ relatedFilms, title }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={style.titleBlock}>
        <h2 className={style.title}>
          {t('movie.film')} «{title}» {t('movie.watch')}
        </h2>
      </div>
      {/* <CategoriesSlider items={relatedFilms}></CategoriesSlider> */}
    </div>
  );
};

export default RelatedFilms;
