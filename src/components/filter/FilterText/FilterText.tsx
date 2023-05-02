import React from 'react';
import { Form, Formik, Field } from 'formik';
import style from './FilterText.module.scss';

type TFilterPlankProps = {
  title: string;
  nameInitialValue: 'actor' | 'director';
  setFilter: (value: Array<string>) => void;
};

const FilterText: React.FC<TFilterPlankProps> = ({ title, nameInitialValue }) => {
  return (
    <div className={style.text}>
      <Formik
        initialValues={{ actor: '', director: '' }}
        onSubmit={() => {
          // login(values.email, values.password, setStatus)
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form className={style.form}>
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterText;
