import React, { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetOnePersonQuery } from '../../store/api/personApi';
import { makeWordEnd } from '../../utils/helper';
import Spinner from '../UI/spinner/Spinner';
import style from './PersonItem.module.scss';

type TPersonItemProps = {
  personId: number;
  role?: string;
  addingClass: string;
  isShowCount?: boolean;
};

const PersonItem: React.FC<TPersonItemProps> = ({ personId, role, addingClass, isShowCount }) => {
  debugger;
  const { data: person, isLoading } = useGetOnePersonQuery({ id: String(personId) });
  const nameArray = person ? person.name.split(' ') : ['', ''];
  const [wordFilm, setWordFilm] = useState('фильм');
  useEffect(() => {
    const count = !isLoading && person ? person?.films.length : 0;
    setWordFilm(makeWordEnd(count, 'фильм', 'фильма', 'фильмов'));
  }, [person, isLoading]);
  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner size={'big'} />
      </div>
    );
  }
  return (
    <Link className={`${style.person} ${addingClass}`} to={`/person/${person?.originalName}`}>
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
        {role && <span className={style.textSection_role}>{role}</span>}
      </div>
      {isShowCount && person?.films && (
        <p className={style.count}>
          {person.films.length} {wordFilm}
        </p>
      )}
    </Link>
  );
};

export default PersonItem;
