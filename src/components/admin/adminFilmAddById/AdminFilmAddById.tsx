import { Field, Formik, Form } from 'formik';
import React, { useState } from 'react';
import RedButton from '../../UI/redButton/RedButton';
import AdminInput from '../adminFilmForm/adminInput/AdminInput';
import * as Yup from 'yup';
import style from './AdminFilmAddById.module.scss';
import { useAddFilmByIdQuery } from '../../../store/api/adminApi';
import Spinner from '../../UI/spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import AdminModal from '../adminModal/AdminModal';

const FormSchema = Yup.object().shape({
  id: Yup.number().required('Required').positive('Только положительное число'),
});

const AdminFilmAddById: React.FC = () => {
  const navigate = useNavigate();
  const [skipAdding, setSkipAdding] = useState(true);
  const [filmId, setfFilmId] = useState('');
  const { isSuccess, isError, isLoading } = useAddFilmByIdQuery(
    { id: filmId },
    { skip: skipAdding }
  );
  const onsubmit = (values: { id: number }) => {
    setSkipAdding(false);
    setfFilmId(String(values.id));
  };
  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner size={'big'} />
      </div>
    );
  }
  if (isSuccess || isError) {
    // setTimeout(() => {
    navigate('/admin/films');
    // }, 3000);
    return (
      <AdminModal>
        {isSuccess && <p>Фильм успешно добавлен</p>}
        {isError && <p>Фильм успешно добавлен</p>}
      </AdminModal>
    );
  }
  return (
    <div>
      <Formik
        initialValues={{
          id: 0,
        }}
        validationSchema={FormSchema}
        onSubmit={(values) => onsubmit(values)}
      >
        {() => {
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
