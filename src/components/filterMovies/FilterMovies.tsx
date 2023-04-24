import React from 'react';
import style from './FilterMovies.module.scss';
import FilterPlank from './FilterSelect/FilterSelect';

const FilterMovies = () => {
  return (
    <div className={style.filter}>
      {/* <div className={style.selectBlock}>
        <div className={style.selectBlock_item}> */}
      <FilterPlank title="Жанры" />
      {/* </div>
      </div> */}
    </div>
  );
};

export default FilterMovies;
