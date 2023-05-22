import style from './RelatedFilms.module.scss';
import { IFilmsList } from '../../type/TFilm';

type TRelatedFilmsProps = {
  title: string;
  relatedFilms: Array<IFilmsList>;
};

const RelatedFilms: React.FC<TRelatedFilmsProps> = ({ relatedFilms, title }) => {
  return (
    <div>
      <div className={style.titleBlock}>
        <h2 className={style.title}>С фильмом «{title}» смотрят</h2>
      </div>
      {/* <CategoriesSlider items={relatedFilms}></CategoriesSlider> */}
    </div>
  );
};

export default RelatedFilms;
