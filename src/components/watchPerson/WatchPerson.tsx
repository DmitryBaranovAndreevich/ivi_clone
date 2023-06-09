import React, { ReactNode, useMemo } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import Spinner from '../UI/spinner/Spinner';
import style from './WatchPerson.module.scss';
import WatchPersonType from './WatchPersonType';

type TWatchPersonProps = {
  filmId: number;
};

const WatchPerson: React.FC<TWatchPersonProps> = ({ filmId }) => {
  const { typePersons } = useAppSelector((state) => state.appReducer);
  const { data: film, isLoading } = useGetOneFilmQuery({ id: String(filmId) });
  const typePersonBlock: Array<ReactNode> = useMemo((): Array<ReactNode> => {
    return typePersons.map((type) => {
      if (film && film[type.englishName].length > 0) {
        return (
          <WatchPersonType
            key={type.id}
            filmId={film.id}
            film={film}
            typePerson={type.name}
            typePersonEnglish={type.englishName}
          />
        );
      }
    });
  }, [typePersons, film]);
  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner size={'big'} />
      </div>
    );
  }
  return <div className={style.content}>{typePersonBlock}</div>;
};

export default WatchPerson;
