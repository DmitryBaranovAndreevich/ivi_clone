import React, { useEffect, useState } from 'react';
import { TGenre } from '../../../type/type';
import FilterDropdown from './FilterList/FilterDropdown';
import style from './FilterPlank.module.scss';

type TFilterPlankProps = {
  title: string;
  nameInitialValue: 'genre' | 'country' | 'year';
  listItem: Array<TGenre>;
  choosenValue: Array<string>;
  addingClass: string;
  setFilter: (value: Array<string>) => void;
};

const FilterPlank: React.FC<TFilterPlankProps> = ({
  title,
  nameInitialValue,
  listItem,
  choosenValue,
  addingClass,
  setFilter,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.plank + ' ' + (isOpen && style.plank_active)}>
      <div className={style.button} onClick={() => setIsOpen(!isOpen)}>
        <p className={style.button_text}>{title}</p>
        <div className={style.button_icon}></div>
      </div>
      {isOpen && (
        <FilterDropdown
          addingClass={addingClass}
          listItem={listItem}
          nameInitialValue={nameInitialValue}
          choosenValue={choosenValue}
          setFilter={setFilter}
        />
      )}
    </div>
  );
};

export default FilterPlank;
