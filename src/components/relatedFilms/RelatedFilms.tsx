import style from './RelatedFilms.module.scss';
import { IFilm, IFilmsList } from '../../type/TFilm';
import CategoriesSlider from '../categoriesSlider/CategoriesSlider';
import { useTranslation } from 'react-i18next';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import { useState } from 'react';
import Spinner from '../UI/spinner/Spinner';

type TRelatedFilmsProps = {
  title: string;
  relatedFilms: Array<IFilmsList>;
};

const RelatedFilms: React.FC<TRelatedFilmsProps> = ({ relatedFilms, title }) => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [relatedList, setRelatedList] = useState<Array<IFilm>>([]);
  const [isSkip, setIsSkip] = useState(false);
  const { data: film, isLoading } = useGetOneFilmQuery(
    { id: String(relatedFilms[index].id) },
    { skip: isSkip }
  );
  if (relatedFilms.length >= index && film && !isLoading) {
    setRelatedList([...relatedList, film]);
    if (relatedFilms.length - 1 > index) {
      setIndex(index + 1);
    } else {
      setIsSkip(true);
    }
  }
  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner size={'big'} />
      </div>
    );
  }
  return (
    <div>
      <div className={style.titleBlock}>
        <h2 className={style.title}>
          {t('movie.film')} «{title}» {t('movie.watch')}
        </h2>
      </div>
      <CategoriesSlider size={'medium'} items={relatedList}></CategoriesSlider>
    </div>
  );
};

export default RelatedFilms;
