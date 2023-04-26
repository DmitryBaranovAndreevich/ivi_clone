import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik, Field } from 'formik';
import style from './FilterRange.module.scss';

type TFilterRangeFormProps = {
  title: string;
  choosenRate: number;
  nameInitialValue: 'rate' | 'countReviews';
  setFilter: (value: number) => void;
  step: number;
  min: number;
  max: number;
};

const FormSchema = Yup.object().shape({
  rate: Yup.number().required('Required').positive('Только положительное число').max(10),
});

const FilterRangeForm: React.FC<TFilterRangeFormProps> = ({
  title,
  choosenRate,
  nameInitialValue,
  setFilter,
  step,
  min,
  max,
}) => {
  debugger;
  return (
    <div className={style.text}>
      <Formik
        initialValues={{ rate: choosenRate, rateRange: choosenRate, countReviews: 0 }}
        validate={(values) => {
          const errors: { rate?: string; countReviews?: string } = {};
          if (Number(values.rate)) {
            errors.rate = 'только цифры';
          }
          return errors;
        }}
        validationSchema={FormSchema}
        onSubmit={() => {}}
      >
        {({ values, handleBlur }) => {
          {
            values[nameInitialValue] !== choosenRate && setFilter(values[nameInitialValue]);
          }
          return (
            <Form className={style.form}>
              <label className={style.label}>
                <p>{title}</p>
                <Field
                  type="number"
                  min={min}
                  max={max}
                  step={step}
                  name={nameInitialValue}
                  onBlur={handleBlur}
                  value={values[nameInitialValue]}
                  className={style.input}
                />
              </label>
              <div className={style.slider}>
                <Field
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  name={nameInitialValue}
                  onBlur={handleBlur}
                  value={values[nameInitialValue]}
                  className={style.slider_range}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FilterRangeForm;
