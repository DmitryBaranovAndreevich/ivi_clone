import React, { ReactNode, useMemo } from 'react';
import { TParamListMovie } from '../../../../type/type';
import UILink from '../../../UI/Link/UILink';
import style from './FilmInfoList.module.scss';

type TFilmInfoListProps = {
  paramsList: Array<TParamListMovie>;
  modify?: 'withDot';
  addingClass?: string;
};

const FilmInfoList: React.FC<TFilmInfoListProps> = ({ paramsList, modify, addingClass }) => {
  const items: Array<ReactNode> = useMemo((): Array<ReactNode> => {
    return paramsList.map((item: TParamListMovie) => {
      return (
        <li className={`${style.item} ${modify === 'withDot' && style.item_dot}`} key={item.title}>
          {item.link ? (
            <UILink href={`${item.link}`} title={item.title} addingClass={style.item_link} />
          ) : (
            <p className={item.type === 'likeButton' ? style.btn : style.text}>
              {item.icon && <img className={style.logo} src={item.icon}></img>}
              {item.title}
            </p>
          )}
        </li>
      );
    });
  }, [paramsList, modify]);
  return <ul className={`${style.watchList} ${addingClass}`}>{items}</ul>;
};

export default FilmInfoList;
