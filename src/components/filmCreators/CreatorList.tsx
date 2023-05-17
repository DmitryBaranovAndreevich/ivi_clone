import React, { ReactNode, useMemo } from 'react';
import { IActors, IDirectors, IProducers, IWriters } from '../../type/TFilm';
import PersonItem from '../personItem/PersonItem';
import style from './FilmCreators.module.scss';

type TPersonListProps = {
  personList: Array<IDirectors> | Array<IActors> | Array<IProducers> | Array<IWriters>;
  role: 'режиссер' | 'актер';
};

const CreatorList: React.FC<TPersonListProps> = ({ personList, role }) => {
  const personBlock: Array<ReactNode> = useMemo(() => {
    return personList.map((person) => {
      return (
        <PersonItem
          key={person.originalName}
          addingClass={style.person}
          personId={person.id}
          role={role}
        />
      );
    });
  }, [personList, role]);
  return <>{personBlock}</>;
};

export default CreatorList;
