import React, { useState } from 'react';
import style from './AdminGenreItem.module.scss';
import logoDelete from './../../../assests/svg/logoDelete.svg';
import GreyButton from '../../UI/greyButton/GreyButton';
import ButtonWithHoverBgc from '../../UI/buttonWithHoverBgc/ButtonWithHoverBgc';
import { useChangeGenreNameMutation, useDeleteGenreMutation } from '../../../store/api/adminApi';
import { Field, Form, Formik } from 'formik';

type TAdminGenreItemType = {
  genreId: number;
  genreName: string;
  refetch: () => void;
};

const AdminGenreItem: React.FC<TAdminGenreItemType> = ({ genreId, genreName, refetch }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteGenre, {}] = useDeleteGenreMutation();
  const [changeGenreName, {}] = useChangeGenreNameMutation();
  const onclickDelete = async () => {
    await deleteGenre({ id: String(genreId) });
    refetch();
  };
  return (
    <div className={style.film}>
      {isEdit ? (
        <Formik
          initialValues={{ nameGenres: genreName }}
          onSubmit={(values) => {
            changeGenreName({ id: String(genreId), newNameGenre: values.nameGenres });
            refetch();
            setIsEdit(false);
          }}
        >
          {({ handleChange, handleBlur }) => (
            <Form className={style.form}>
              <Field
                name={'nameGenres'}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style.input}
              />
              <ButtonWithHoverBgc title="сохранить" addingClass={style.button} type="submit" />
              <ButtonWithHoverBgc
                title="отменить"
                addingClass={style.button}
                onClick={() => setIsEdit(false)}
              />
            </Form>
          )}
        </Formik>
      ) : (
        <h5 className={style.title} onClick={() => setIsEdit(true)}>
          {genreName}
        </h5>
      )}
      <GreyButton addingClass={style.delete} onClick={onclickDelete}>
        <img className={style.delete_logo} src={logoDelete} alt="delete" />
      </GreyButton>
    </div>
  );
};

export default AdminGenreItem;
