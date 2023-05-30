/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from 'formik';
import React from 'react';
import style from './../AdminFilmEdit.module.scss';

const AdminCheckbox: React.FC<any> = ({ genreName, ...props }) => {
  return (
    <label className={style.checkboxBlock_label}>
      <Field className={style.checkboxBlock_input} type="checkbox" value={genreName} {...props} />
      <p className={style.checkboxBlock_text}>{genreName}</p>
    </label>
  );
};

export default AdminCheckbox;
