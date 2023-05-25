import React from 'react';
import style from './FilmTitleBlock.module.scss';

type TFilmTitleBlockProps = {
  name: string;
};

const FilmTitleBlock: React.FC<TFilmTitleBlockProps> = ({ name }) => {
  return (
    <div className={style.titleBlock}>
      <h2 className={style.titleBlock_title}>Фильм &quot;{name}&quot; смотреть онлайн </h2>
    </div>
  );
};

export default FilmTitleBlock;
