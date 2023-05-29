import React from 'react';
import { Field } from 'formik';
import style from './../FilterPlank.module.scss';
import { useTranslation } from 'react-i18next';

type TFilterListProps = {
  nameInitialValue: 'genre' | 'country';
  name: string;
  englishName: string;
};

const FilterCheckbox: React.FC<TFilterListProps> = ({ nameInitialValue, name, englishName }) => {
  const { i18n } = useTranslation();
  return (
    <li className={style.dropdown_item}>
      <label className={style.dropdown_label}>
        <Field
          className={style.dropdown_input}
          type="checkbox"
          name={nameInitialValue}
          value={englishName}
        />
        <div className={style.dropdown_text}>{i18n.language === 'ru' ? name : englishName}</div>
        <div className={style.dropdown_checkbox}></div>
      </label>
    </li>
  );
};

export default FilterCheckbox;
