import { Field, Formik, Form } from 'formik';
import React from 'react';
import UILink from '../../UI/Link/UILink';
import RedButton from '../../UI/redButton/RedButton';
import AdminInput from '../adminFilmForm/adminInput/AdminInput';
import * as Yup from 'yup';
import style from './AdminFilmAddById.module.scss';
// import { useAddFilmByIdQuery } from '../../../store/api/adminApi';

const FormSchema = Yup.object().shape({
  price: Yup.number().required('Required').positive('Только положительное число'),
});

const AdminFilmAddById: React.FC = () => {
  // const { data: films } = useAddFilmByIdQuery({ id: '' });
  return (
    <div>
      <Formik
        initialValues={{
          id: 0,
        }}
        validationSchema={FormSchema}
        onSubmit={(values) => {}}
      >
        {({ values }) => {
          return (
            <Form className={style.form}>
              <Field
                name="id"
                component={AdminInput}
                placeholder="Введите id"
                txtLabel="Введите id фильма с кинопоиска"
                type="number"
              />
              <RedButton addingClass={style.submit} text={'Добавить'} type="submit" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AdminFilmAddById;
