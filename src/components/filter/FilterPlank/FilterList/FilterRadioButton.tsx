import React from 'react';
import { Field } from 'formik';
import style from './../FilterPlank.module.scss';

type TFilterRadioButtonProps = {
  nameInitialValue: 'year';
  name: string;
  englishName: string;
};

const FilterRadioButton: React.FC<TFilterRadioButtonProps> = ({
  nameInitialValue,
  name,
  englishName,
}) => {
  return (
    <li className={style.dropdown_item}>
      <label className={style.dropdown_label}>
        <Field
          className={style.dropdown_input}
          type="radio"
          name={nameInitialValue}
          value={englishName}
        />
        <div className={style.dropdown_text}>{name}</div>
        <div className={style.dropdown_radio}></div>
      </label>
    </li>
  );
};

export default FilterRadioButton;
