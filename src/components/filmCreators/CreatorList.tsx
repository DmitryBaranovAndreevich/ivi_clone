import React, { ReactNode, useMemo } from 'react';
import { IActors, IDirectors, IProducers, IWriters } from '../filmContent/TFilm';
import PersonItem from '../personItem/PersonItem';
import style from './FilmCreators.module.scss';

type TPersonListProps = {
  personList: Array<IDirectors> | Array<IActors> | Array<IProducers> | Array<IWriters>;
  role: 'director' | 'actor';
};

const CreatorList: React.FC<TPersonListProps> = ({ personList, role }) => {
  debugger;
  const personBlock: Array<ReactNode> = useMemo(() => {
    return personList.map((person) => {
      return (
        <PersonItem
          key={person.originalName}
          addingClass={style.person}
          name={person.name}
          originalName={person.originalName}
          photo={person.photo}
          id={person.id}
          role={role}
        />
      );
    });
  }, [personList, role]);
  return <>{personBlock}</>;
};

export default CreatorList;
