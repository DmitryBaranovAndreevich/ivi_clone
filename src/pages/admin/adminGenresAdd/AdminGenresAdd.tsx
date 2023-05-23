import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import AdminInput from '../../../components/admin/adminFilmForm/adminInput/AdminInput';
import RedButton from '../../../components/UI/redButton/RedButton';
import { useAddNewGenresMutation } from '../../../store/api/adminApi';
import style from './AdminGenresAdd.module.scss';

const FormSchema = Yup.object().shape({
  nameGenre: Yup.string()
    .min(3, 'Минимальная длина 3 символов')
    .max(20, 'Максимальная длина 20 символов')
    .required('Required'),
  englishNameGenre: Yup.string()
    .min(3, 'Минимальная длина 3 символов')
    .max(20, 'Максимальная длина 20 символов')
    .required('Required'),
});

const AdminGenresAdd = () => {
  const navigate = useNavigate();
  const [addNewGenres, {}] = useAddNewGenresMutation();
  const submitAddGenre = (values: { nameGenre: string; englishNameGenre: string }) => {
    addNewGenres({ nameGenre: values.nameGenre, englishNameGenre: values.englishNameGenre });
  };
  return (
    <div className={style.container}>
      <Formik
        initialValues={{
          nameGenre: '',
          englishNameGenre: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values) => submitAddGenre(values)}
      >
        {({ values }) => {
          return (
            <Form className={style.form}>
              <Field
                name="nameGenre"
                component={AdminInput}
                placeholder="Введите название жанра (на русском)"
                txtLabel="Название жанра (на русском)"
                type="text"
              />
              <Field
                name="englishNameGenre"
                component={AdminInput}
                placeholder="Введите название жанра (на английском)"
                txtLabel="Название жанра (на русском)"
                type="text"
              />
              <RedButton addingClass={style.submit} text={'Добавить'} type="submit" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AdminGenresAdd;
