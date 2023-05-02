import React from 'react';
import { Field } from 'formik';
import style from './../FilterPlank.module.scss';
import { useParams } from 'react-router-dom';

type TFilterListProps = {
  nameInitialValue: 'genre' | 'country' | 'year';
  name: string;
  englishName: string;
};

const FilterCheckbox: React.FC<TFilterListProps> = ({ nameInitialValue, name, englishName }) => {
  const params = useParams();
  return (
    <li className={style.dropdown_item}>
      <label className={style.dropdown_label}>
        <Field
          className={style.dropdown_input}
          type="checkbox"
          name={nameInitialValue}
          value={englishName}
        />
        <div className={style.dropdown_text}>{name}</div>
        <div className={style.dropdown_checkbox}></div>
      </label>
    </li>
  );
};

export default FilterCheckbox;
