import React, { ReactNode, useMemo, useState } from 'react';
import { IFilm } from '../../type/TFilm';
import { TPersonEnglishName, TPersonName } from '../../type/type';
import PersonItem from '../personItem/PersonItem';
import ButtonWithoutBgc from '../UI/buttonWithoutBgc/ButtonWithoutBgc';
import style from './WatchPerson.module.scss';

type TWatchPersonTypeProps = {
  filmId?: number;
  film: IFilm;
  typePerson: TPersonName;
  typePersonEnglish: TPersonEnglishName;
};

const WatchPersonType: React.FC<TWatchPersonTypeProps> = ({
  film,
  typePerson,
  typePersonEnglish,
}) => {
  const [isShowAll, setIsShowAll] = useState(false);
  const personsBlock: Array<ReactNode> = useMemo((): Array<ReactNode> => {
    return film[typePersonEnglish].map((person) => {
      return (
        <li role="WatchPersonType-item" className={style.item} key={person.id}>
          <PersonItem
            personId={person.id}
            role={''}
            addingClass={style.person}
            isShowCount={true}
          />
        </li>
      );
    });
  }, [film, typePersonEnglish]);

  return (
    <div className={style.typeBlock}>
      <h4 className={style.title}>{typePerson}</h4>
      <ul className={style.list}>
        {isShowAll ? personsBlock : personsBlock.slice(0, 16)}
        {personsBlock.length > 16 && !isShowAll && (
          <div className={style.showMore}>
            <ButtonWithoutBgc addingClass={style.showMore} onClick={() => setIsShowAll(true)}>
              Показать еще
            </ButtonWithoutBgc>
          </div>
        )}
      </ul>
    </div>
  );
};

export default WatchPersonType;
