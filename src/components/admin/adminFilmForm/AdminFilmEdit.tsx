import React, { useMemo, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import style from './AdminFilmEdit.module.scss';
import { useGetOneFilmQuery } from '../../../store/api/filmApi';
import Spinner from '../../UI/spinner/Spinner';
import { useGetGenresQuery } from '../../../store/api/appApi';
import { IGenres } from '../../../type/TGenres';
import { TGenreCountriesYears } from '../../../type/type';
import AdminCheckbox from './adminCheckbox/adminCheckbox';
import AdminInput from './adminInput/AdminInput';
import { useNavigate, useParams } from 'react-router-dom';
import RedButton from '../../UI/redButton/RedButton';
import { useAddGenreToFilmMutation, useChangeFilmNameMutation } from '../../../store/api/adminApi';

type TAdminFilmEditProps = {
  filmId?: number;
};

const AdminFilmEdit: React.FC<TAdminFilmEditProps> = ({ filmId }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: film, isLoading } = useGetOneFilmQuery({ id: params.id });
  const { data: genres } = useGetGenresQuery('');
  const [changeFilmName, {}] = useChangeFilmNameMutation();
  const [addGenreToFilm, {}] = useAddGenreToFilmMutation();
  const filmGenres = useMemo(() => {
    return film?.genres.map(({ englishName }) => englishName);
  }, [film?.genres]);
  const checkboxGenre = useMemo(() => {
    return genres?.map((genre: TGenreCountriesYears) => {
      if (!filmGenres?.includes(genre.englishName)) {
        return (
          <AdminCheckbox
            key={genre.id}
            name="genres"
            genreName={genre.name}
            genreEnglishName={genre.englishName}
          />
        );
      }
    });
  }, [genres, filmGenres]);
  const includeGenre = useMemo(() => {
    return genres
      ?.map((genre: TGenreCountriesYears) => {
        debugger;
        if (filmGenres?.includes(genre.englishName)) {
          return genre.name;
        }
      })
      .filter((genres: string | undefined) => genres)
      .join(', ');
  }, [genres, filmGenres]);
  const saveData = (values: { name: string; originalName: string; genres: Array<string> }) => {
    debugger;
    if (values.name !== film?.name) {
      changeFilmName({ id: String(filmId), newNameFilm: values.name });
    }
    values.genres.forEach((genre: string) => {
      addGenreToFilm({ id: String(filmId), genre });
    });
    navigate('/admin/films');
  };
  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner size={'big'} />
      </div>
    );
  }

  return (
    <div>
      {film && genres ? (
        <Formik
          initialValues={{
            name: film.name,
            originalName: film.originalName,
            genres: [],
          }}
          onSubmit={(values) => saveData(values)}
        >
          {({ touched, errors, values }) => {
            console.log(values);
            return (
              <div className={style.container}>
                <Form className={style.form}>
                  <Field
                    name="name"
                    component={AdminInput}
                    placeholder="Введите название (на русском)"
                    txtLabel="Название (на русском)"
                    type="text"
                  />
                  <Field
                    name="originalName"
                    component={AdminInput}
                    placeholder="Введите название (на английском)"
                    txtLabel="Название (на английском)"
                    type="text"
                  />
                  <div className={style.checkboxBlock}>
                    <p className={style.label}>Выберите категорию</p>
                    <div className={style.checkboxBlock_include}>
                      <p className={style.checkboxBlock_title}>Жанры:</p>
                      <p className={style.checkboxBlock_text}>{includeGenre}</p>
                    </div>
                    <div className={style.checkboxBlock_checkbox}>
                      <p className={style.checkboxBlock_title}>Добавить жанры</p>
                      <div className={style.checkboxBlock_list}>{checkboxGenre}</div>
                    </div>
                  </div>
                  <RedButton addingClass={style.submit} text={'Сохранить'} type="submit" />
                </Form>
              </div>
            );
          }}
        </Formik>
      ) : (
        <p>Не удалось загрузить информацию о фильме</p>
      )}
    </div>
  );
};

export default AdminFilmEdit;
