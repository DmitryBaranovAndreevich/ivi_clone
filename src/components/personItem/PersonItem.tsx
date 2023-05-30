import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useGetOnePersonQuery } from '../../store/api/personApi';
import { makeWordEnd } from '../../utils/helper';
import Spinner from '../UI/spinner/Spinner';
import style from './PersonItem.module.scss';

type TPersonItemProps = {
  personId: number;
  role?: string;
  addingClass?: string;
  isShowCount?: boolean;
};

const PersonItem: React.FC<TPersonItemProps> = ({ personId, role, addingClass, isShowCount }) => {
  const { data: person, isLoading } = useGetOnePersonQuery({ id: String(personId) });
  const { i18n } = useTranslation();
  const nameArray = person
    ? i18n.language === 'ru'
      ? person.name.split(' ')
      : person.originalName.split(' ')
    : ['', ''];
  const [wordFilm, setWordFilm] = useState('фильм');
  const [wordFilmEn, setWordFilmEn] = useState('movie');
  useEffect(() => {
    const count = !isLoading && person ? person?.films.length : 0;
    setWordFilm(makeWordEnd(count, 'фильм', 'фильма', 'фильмов'));
    if (count > 1) {
      setWordFilmEn('movies');
    }
  }, [person, isLoading]);
  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner size={'big'} />
      </div>
    );
  }
  return (
    <Link className={`${style.person} ${addingClass}`} to={`/person/${person?.id}`}>
      <div className={style.avatarSection}>
        {person?.photo ? (
          <img className={style.avatarSection_img} src={person.photo} />
        ) : (
          <div></div>
        )}
      </div>
      <div className={style.textSection}>
        {nameArray[0] && <span className={style.textSection_name}>{nameArray[0]}</span>}
        {nameArray[1] && <span className={style.textSection_name}>{nameArray[1]}</span>}
        {role && (
          <span className={style.textSection_role}>
            {i18n.language === 'ru' ? role : role === 'актер' ? 'actor' : 'director'}
          </span>
        )}
      </div>
      {isShowCount && person?.films && (
        <p className={style.count}>
          {person.films.length} {i18n.language === 'ru' ? wordFilm : wordFilmEn}
        </p>
      )}
    </Link>
  );
};

export default PersonItem;
