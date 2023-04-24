import React, { useState } from 'react';
import style from './FilterSelect.module.scss';

type TFilterPlankProps = {
  addingClass: string;
  list: Array<string>;
};

const FilterPlank: React.FC<TFilterPlankProps> = ({ addingClass }) => {
  return (
    <div className={style.dropdown + ' ' + addingClass}>
      <div className={style.list}>
        <ul></ul>
      </div>
    </div>
  );
};

export default FilterPlank;
