/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from 'formik';
import React from 'react';
import style from './../AdminFilmEdit.module.scss';

const AdminInput: React.FC<any> = ({
  field,
  txtLabel,
  error,
  type,
  form: { touched, errors },
  ...props
}) => {
  return (
    <div className={style.item}>
      <label className={style.label} htmlFor={field.name}>
        {txtLabel}
      </label>
      <Field
        className={
          style.input + ' ' + (touched[field.name] && errors[field.name] && style.input_error)
        }
        type={type}
        {...field}
        {...props}
        data-testid="Admin_input"
      />
      {touched[field.name] && errors[field.name] ? (
        <div className={style.input_error_text}>{errors[field.name]}</div>
      ) : null}
    </div>
  );
};

export default AdminInput;
