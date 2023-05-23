import { Form, Formik, Field } from 'formik';
import React from 'react';
import style from './ModalSearch.module.scss';
import logoSearch from './../../assests/svg/logoSearchGrey.svg';
import logoCross from './../../assests/svg/logoCrossGrey.svg';
import { useAppDispatch } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/SearchSlice';

type TModalSearchFormProps = {
  searchMain: string;
};

// const initialValues = { search: '' };

const ModalSearchForm: React.FC<TModalSearchFormProps> = ({ searchMain }) => {
  const { setSearchMain } = searchSlice.actions;
  const dispatch = useAppDispatch();
  // const { data: listPerson } = useGetPersonByNameQuery({ name: valueSearch });
  return (
    <div>
      <Formik initialValues={{ search: searchMain }} onSubmit={() => {}}>
        {({ values, handleBlur }) => {
          return (
            <div className={style.search}>
              <Form className={style.form}>
                <div className={style.form_content}>
                  <div className={`${style.input_wrp}`}>
                    <Field
                      name="search"
                      onChange={(e: { target: { value: string } }) => {
                        values.search = e.target.value;
                        dispatch(setSearchMain({ searchMean: e.target.value }));
                      }}
                      onBlur={handleBlur}
                      className={style.input}
                    />
                    <span
                      className={`${style.label} ${style.label_focus} ${
                        values.search && style.label_active
                      }`}
                    >
                      Фильмы, персоны, жанры
                    </span>
                    <button
                      className={style.logo}
                      type="reset"
                      onClick={() => {
                        values.search = '';
                        dispatch(setSearchMain({ searchMean: '' }));
                      }}
                    >
                      {values.search ? (
                        <img className={style.logo_cross} src={logoCross} alt="cross" />
                      ) : (
                        <img className={style.logo_search} src={logoSearch} alt="search" />
                      )}
                    </button>
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
