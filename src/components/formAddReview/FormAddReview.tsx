import { Form, Formik, Field } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import RedButton from '../UI/redButton/RedButton';
import style from './FormAddReview.module.scss';
import logoUser from './../../assests/svg/logoUser.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { reviewSlice } from '../../store/reducers/ReviewSlice';
import { useAddReviewForReviewMutation, useAddReviewMutation } from '../../store/api/reviewApi';
import { useNavigate } from 'react-router-dom';

const FormSchema = Yup.object().shape({
  reviewTitle: Yup.string()
    .min(1, 'Минимум 1 символов')
    .max(30, 'Превышен лимит по количеству символов')
    .required('Required'),
  reviewText: Yup.string()
    .min(10, 'Минимум 10 символов')
    .max(500, 'Превышен лимит по количеству символов')
    .required('Required'),
});

type TFormAddReviewProps = {
  filmId: number;
  forWhat: 'film' | 'review';
  reviewId?: number;
  refetchFilms: () => void;
  isFetching: boolean;
};

const FormAddReview: React.FC<TFormAddReviewProps> = ({
  filmId,
  forWhat,
  reviewId,
  refetchFilms,
  isFetching,
}) => {
  const [errorReviewTitle, setErrorReviewTitle] = useState<null | string>(null);
  const [errorReviewText, setErrorReviewText] = useState<null | string>(null);
  const { isRegister } = useAppSelector((state) => state.userLoginReduser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [addReview, {}] = useAddReviewMutation();
  const [addReviewForReview, {}] = useAddReviewForReviewMutation();
  const { setReviewForFilm, setReviewForReview } = reviewSlice.actions;
  const { reviewForFilm, reviewForReview } = useAppSelector((state) => state.reviewReducer);
  const onChange = (filmId: number, reviewObj: { title: string; text: string }) => {
    if (reviewObj.title.length < 1) {
      setErrorReviewTitle(`Минимум 1 символов, вы ввели ${reviewObj.title.length}`);
    } else if (reviewObj.title.length > 30) {
      setErrorReviewTitle(`Превышен лимит по количеству символов`);
    } else {
      setErrorReviewTitle(null);
    }
    if (reviewObj.text.length < 10) {
      setErrorReviewText(`Минимум 10 символов, вы ввели ${reviewObj.text.length}`);
    } else if (reviewObj.text.length > 500) {
      setErrorReviewText(`Превышен лимит по количеству символов`);
    } else {
      setErrorReviewText(null);
    }
    if (forWhat === 'film') {
      dispatch(setReviewForFilm({ filmId, reviewObj }));
    }
    if (forWhat === 'review' && reviewId) {
      dispatch(setReviewForReview({ reviewId, reviewObj }));
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          reviewTitle:
            forWhat === 'review' && reviewId
              ? reviewForReview[reviewId]?.title ?? ''
              : reviewForFilm[filmId]?.title ?? '',
          reviewText:
            forWhat === 'review' && reviewId
              ? reviewForReview[reviewId]?.text ?? ''
              : reviewForFilm[filmId]?.text ?? '',
        }}
        validationSchema={FormSchema}
        onSubmit={async (values) => {
          if (!isRegister) {
            return navigate('/profile/email');
          } else {
            if (forWhat === 'film') {
              await addReview({
                review: { title: values.reviewTitle, text: values.reviewText },
                filmId,
              });
              values.reviewText = '';
              values.reviewTitle = '';
              dispatch(setReviewForFilm({ filmId, reviewObj: { title: '', text: '' } }));
            }
            if (forWhat === 'review' && reviewId) {
              await addReviewForReview({
                review: { title: values.reviewTitle, text: values.reviewText },
                filmId,
                reviewId,
              });
              values.reviewText = '';
              values.reviewTitle = '';
              dispatch(setReviewForReview({ reviewId, reviewObj: { title: '', text: '' } }));
            }
            refetchFilms();
          }
        }}
      >
        {({ values, handleBlur }) => {
          return (
            <div className={style.review}>
              <Form className={style.form}>
                <div className={style.avatar}>
                  <img className={style.avatar_logo} src={logoUser} alt="avatar" />
                </div>
                <div className={style.form_content}>
                  <div className={`${style.input_wrp} ${errorReviewTitle && style.error}`}>
                    <Field
                      name="reviewTitle"
                      onChange={(e: { target: { value: string } }) => {
                        values.reviewTitle = e.target.value;
                        onChange(filmId, { title: e.target.value, text: values.reviewText });
                      }}
                      onBlur={handleBlur}
                      className={style.input}
                    />
                    <span
                      className={`${style.label} ${style.label_focus} ${
                        values.reviewTitle && style.label_active
                      }`}
                    >
                      Напишите ваше имя
                    </span>
                    {errorReviewTitle && values.reviewTitle.length !== 0 ? (
                      <div className={style.error_text}>{errorReviewTitle}</div>
                    ) : null}
                  </div>
                  <div className={`${style.input_wrp} ${errorReviewText && style.error}`}>
                    <Field
                      name="reviewText"
                      onChange={(e: { target: { value: string } }) => {
                        values.reviewText = e.target.value;
                        onChange(filmId, { title: values.reviewTitle, text: e.target.value });
                      }}
                      onBlur={handleBlur}
                      className={style.input}
                    />
                    <span
                      className={`${style.label} ${style.label_focus} ${
                        values.reviewText && style.label_active
                      }`}
                    >
                      Написать отзыв
                    </span>
                    {errorReviewText && values.reviewText.length !== 0 ? (
                      <div className={style.error_text}>{errorReviewText}</div>
                    ) : null}
                  </div>
                </div>
                <RedButton
                  addingClass={style.submit}
                  text="Отправить"
                  type="submit"
                  isLoad={isFetching}
                  isDisabled={
                    errorReviewTitle ||
                    errorReviewText ||
                    values.reviewText.length === 0 ||
                    isFetching
                      ? true
                      : false
                  }
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
