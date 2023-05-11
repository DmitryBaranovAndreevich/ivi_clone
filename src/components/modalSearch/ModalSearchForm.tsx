import { Form, Formik, Field } from 'formik';
import React, { useState } from 'react';
import style from './FormAddReview.module.scss';
import logoSearch from './../../assests/svg/logoSearch.svg';
import logoCross from './../../assests/svg/logoCross.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { reviewSlice } from '../../store/reducers/ReviewSlice';
import { reviewApi, useAddReviewMutation } from '../../store/api/reviewApi';

type TModalSearchFormProps = {
  filmId: number;
};

const ModalSearchForm: React.FC = ({}) => {
  // const [addReview, {}] = useAddReviewMutation();
  return (
    <div>
      <Formik initialValues={{ search: '' }} onSubmit={() => {}}>
        {({ values, handleBlur }) => {
          return (
            <div className={style.review}>
              <Form className={style.form}>
                <div className={style.form_content}>
                  <div className={`${style.input_wrp}`}>
                    <Field
                      name="search"
                      onChange={(e: { target: { value: string } }) => {
                        values.search = e.target.value;
                      }}
                      onBlur={handleBlur}
                      className={style.input}
                    />
                    <span
                      className={`${style.label} ${style.label_focus} ${
                        values.search && style.label_active
                      }`}
                    >
                      Написать отзыв
                    </span>
                    <div className={style.logo}>
                      {values.search ? (
                        <img className={style.logo_img} src={logoCross} alt="cross" />
                      ) : (
                        <img className={style.logo_img} src={logoSearch} alt="search" />
                      )}
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default ModalSearchForm;
