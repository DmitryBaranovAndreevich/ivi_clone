import React, { useEffect, useState } from 'react';
import { Form, Formik, Field } from 'formik';
import { TGenre } from '../../../type/type';
import style from './FilterText.module.scss';

type TFilterPlankProps = {
  title: string;
  nameInitialValue: 'actor' | 'director';
  setFilter: (value: Array<string>) => void;
};

const FilterText: React.FC<TFilterPlankProps> = ({ title, nameInitialValue, setFilter }) => {
  return (
    <div className={style.text}>
      <Formik
        initialValues={{ actor: '', director: '' }}
        // validate={values => {
        // const errors = {};
        // if (!values.email) {
        //   errors.email = 'Required';
        // } else if (!values.password) {
        //   errors.password = 'Required';
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = 'Invalid email address';
        // }
        // return errors;
        // }}
        onSubmit={() => {
          // login(values.email, values.password, setStatus)
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form className={style.form}>
            <div className={style.form_block}>
              <Field
                name={nameInitialValue}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[nameInitialValue]}
                className={style.input}
              />
              <span
                className={
                  style.description +
                  ' ' +
                  style.description_focus +
                  ' ' +
                  (values.actor && style.description_active)
                }
              >
                {title}
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterText;
