import React, { ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TGenreCountriesYears } from '../../../type/type';
import UILink from '../../UI/Link/UILink';
import style from './DropdownFilms.module.scss';

type TDropdownBlockProps = {
  title: string;
  titleRu: 'Жанры' | 'Страны' | 'Годы';
  listItems: Array<TGenreCountriesYears> | undefined;
};

const DropdownBlock: React.FC<TDropdownBlockProps> = ({ title, titleRu, listItems }) => {
  const { i18n } = useTranslation();
  const itemsBlock: Array<ReactNode> | undefined = useMemo((): Array<ReactNode> | undefined => {
    if (titleRu === 'Годы' || titleRu === 'Страны') {
      return listItems?.slice(0, 4).map((item: TGenreCountriesYears): ReactNode => {
        let title = item.name;
        if (i18n.language === 'ru') {
          title = titleRu === 'Годы' ? `Фильмы ${item.name} года` : item.name;
        } else {
          title = titleRu === 'Годы' ? `Films of ${item.englishName}` : item.englishName;
        }
        return (
          <div className={style.block_items_item} key={item.id}>
            <UILink addingClass={style.link} title={title} href={`/movies/${item.englishName}`} />
          </div>
        );
      });
    } else {
      return listItems?.map((item: TGenreCountriesYears): ReactNode => {
        return (
          <div className={style.block_items_item} key={item.id}>
            <UILink
              addingClass={style.link}
              title={i18n.language === 'ru' ? item.name : item.englishName}
              href={`/movies/${item.englishName}`}
            />
          </div>
        );
      });
    }
  }, [listItems, i18n.language, titleRu]);
  return (
    <div className={style.block}>
      <h3 className={style.block_title}>{title}</h3>
      <div className={style.block_items}>{itemsBlock}</div>
    </div>
  );
};

export default DropdownBlock;
