import React, { useState } from 'react';
import style from './FilterSelect.module.scss';

type TFilterPlankProps = {
  list: Array<string>;
};

const FilterList: React.FC<TFilterPlankProps> = ({ list }) => {
  return (
    <div className={style.list}>
      <div></div>
    </div>
  );
};

export default FilterList;
