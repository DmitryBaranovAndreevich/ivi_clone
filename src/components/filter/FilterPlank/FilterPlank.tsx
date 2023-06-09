import React, { useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { TObjWithParamsUrl } from '../../../hooks/useNavigation';
import { TGenreCountriesYears } from '../../../type/type';
import ArrowButton from '../../UI/arrowButton/arrowButton';
import FilterDropdown from './FilterList/FilterDropdown';
import style from './FilterPlank.module.scss';

type TFilterPlankProps = {
  title: string;
  nameInitialValue: 'genre' | 'country' | 'year';
  listItem: Array<TGenreCountriesYears> | undefined;
  choosenValue: TObjWithParamsUrl;
  addingClass: string;
};

const FilterPlank: React.FC<TFilterPlankProps> = ({
  title,
  nameInitialValue,
  listItem,
  choosenValue,
  addingClass,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { buttonElement, dropdownElement } = useClickOutside(isOpen, setIsOpen);

  return (
    <div className={style.plank + ' ' + (isOpen && style.plank_active)}>
      <div className={style.button} ref={buttonElement} onClick={() => setIsOpen(!isOpen)}>
        <p className={style.button_text}>{title}</p>
        <ArrowButton isOpen={isOpen} addingClass={style.button_arrow} />
      </div>
      <div ref={dropdownElement}>
        {isOpen && (
          <FilterDropdown
            addingClass={addingClass}
            listItem={listItem}
            nameInitialValue={nameInitialValue}
            choosenValue={choosenValue}
          />
        )}
      </div>
    </div>
  );
};

export default FilterPlank;
