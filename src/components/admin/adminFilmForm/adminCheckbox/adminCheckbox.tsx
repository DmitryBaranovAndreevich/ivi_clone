/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from 'formik';
import React from 'react';
import style from './../AdminFilmEdit.module.scss';

const AdminCheckbox: React.FC<any> = ({
  field,
  txtLabel,
  genreName,
  genreEnglishName,
  ...props
}) => {
  return (
    <label className={style.checkboxBlock_label}>
      <Field
        className={style.checkboxBlock_input}
        type="checkbox"
        value={genreEnglishName}
        {...props}
      />
      <p className={style.checkboxBlock_text}>{genreName}</p>
    </label>
  );
};

export default AdminCheckbox;
