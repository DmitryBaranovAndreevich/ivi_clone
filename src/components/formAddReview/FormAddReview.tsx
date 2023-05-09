import { Form, Formik, Field } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

import RedButton from '../UI/redButton/RedButton';
import style from './FormAddReview.module.scss';
import logoUser from './../../assests/svg/logoUser.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { reviewSlice } from '../../store/reducers/ReviewSlice';
import { reviewApi, useAddReviewMutation } from '../../store/api/reviewApi';

const FormSchema = Yup.object().shape({
  review: Yup.string()
    .min(10, 'Минимум 10 символов')
    .max(500, 'Превышен лимит по количеству символов')
    .required('Required'),
});

type TFormAddReviewProps = {
  filmId: number;
};

const FormAddReview: React.FC<TFormAddReviewProps> = ({ filmId }) => {
  const [errorReview, setErrorReview] = useState<null | string>(null);
  const dispatch = useAppDispatch();
  const [addReview, {}] = useAddReviewMutation();
  const { addReviewUser } = reviewSlice.actions;
  const { reviewUser } = useAppSelector((state) => state.reviewReducer);
  const onChange = (filmId: number, reviewText: string) => {
    if (reviewText.length < 10) {
      setErrorReview(`Минимум 10 символов, вы ввели ${reviewText.length}`);
    } else if (reviewText.length > 500) {
      setErrorReview(`Превышен лимит по количеству символов`);
    } else {
      setErrorReview(null);
    }
    dispatch(addReviewUser({ filmId, reviewText }));
  };
  return (
    <div>
      <Formik
        initialValues={{ review: reviewUser[filmId]?.text ?? '' }}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          debugger;
          addReview({
            review: { title: '', text: values.review },
            filmId,
          });
        }}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => {
          return (
            <div className={style.review}>
              <Form className={style.form}>
                <div className={style.avatar}>
                  <img className={style.avatar_logo} src={logoUser} alt="avatar" />
                </div>
                <div className={style.form_content}>
                  <div className={`${style.input_wrp} ${errorReview && style.error}`}>
                    <Field
                      name="review"
                      onChange={(e: { target: { value: string } }) => {
                        values.review = e.target.value;
                        onChange(filmId, e.target.value);
                      }}
                      onBlur={handleBlur}
                      className={style.input}
                    />
                    <span
                      className={`${style.label} ${style.label_focus} ${
                        values.review && style.label_active
                      }`}
                    >
                      Написать отзыв
                    </span>
                  </div>
                  {errorReview && values.review.length !== 0 ? (
                    <div className={style.error_text}>{errorReview}</div>
                  ) : null}
                </div>
                <RedButton
                  addingClass={style.submit}
                  text="Отправить"
                  // onClick={}
                  type="submit"
                  isDisabled={errorReview || values.review.length === 0 ? true : false}
                />
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormAddReview;
