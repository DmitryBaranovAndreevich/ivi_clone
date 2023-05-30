import React, { useMemo, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import style from './AdminFilmAddSelf.module.scss';
import { useGetGenresQuery } from '../../../store/api/appApi';
import { TGenreCountriesYears } from '../../../type/type';
import { useNavigate } from 'react-router-dom';
import RedButton from '../../UI/redButton/RedButton';
import AdminCheckbox from '../adminFilmForm/adminCheckbox/adminCheckbox';
import AdminInput from '../adminFilmForm/adminInput/AdminInput';
import { TFilmAdding } from '../../../type/TFilm';
import { useAppDispatch } from '../../../hooks/redux';
import { addFilm, addGenre } from '../../../store/reducers/ActionCreators';
import AdminModal from '../adminModal/AdminModal';

type TInitialValue = {
  name: string;
  originalName: string;
  genres: Array<string>;
  poster: string;
  trailer: string;
  mpaaRating: number;
  rating: number;
  ratingsNumber: number;
  year: number;
  duration: number;
  description: string;
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Минимальная длина 3 символов')
    .max(50, 'Максимальная длина 50 символов')
    .required('Required'),
  originalName: Yup.string()
    .min(3, 'Минимальная длина 3 символов')
    .max(50, 'Максимальная длина 50 символов')
    .required('Required'),
  genres: Yup.array().min(1, 'Required'),
  poster: Yup.string()
    .required('Required')
    .matches(/(\.png|\.jpeg)$/, 'Формат png или jpeg'),
  mpaaRating: Yup.number()
    .required('Required')
    .positive('Значение должно быть больше 0')
    .lessThan(18, 'Значение должно быть меньше 18'),
  rating: Yup.number()
    .required('Required')
    .positive('Значение должно быть больше 0')
    .lessThan(10, 'Значение должно быть меньше 10'),
  ratingsNumber: Yup.number().required('Required').positive('Только положительное число'),
  year: Yup.number()
    .required('Required')
    .lessThan(2023, 'Год должен быть меньше текущего года')
    .moreThan(1930, 'Год должен быть больше 1930'),
  duration: Yup.number().required('Required').positive('Значение должно быть больше 0'),
  description: Yup.string()
    .min(10, 'Минимальная длина 10 символов')
    .max(1024, 'Максимальная длина 1024 символов')
    .required('Required'),
});

const AdminFilmAddSelf: React.FC = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: genres } = useGetGenresQuery('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const checkboxGenre = useMemo(() => {
    return genres?.map((genre: TGenreCountriesYears) => {
      return (
        <AdminCheckbox
          key={genre.id}
          name="genres"
          genreName={genre.name}
          genreEnglishName={genre.englishName}
        />
      );
    });
  }, [genres]);
  const initialValue: TInitialValue = {
    name: '',
    originalName: '',
    genres: [],
    poster: '',
    trailer: '',
    mpaaRating: 0,
    rating: 0,
    ratingsNumber: 0,
    year: 0,
    duration: 0,
    description: '',
  };
  const submitAddFilm = async (values: TInitialValue) => {
    const filmObj: TFilmAdding = {
      name: values.name,
      originalName: values.originalName,
      poster: values.poster,
      trailer: values.trailer,
      mpaaRating: `${values.mpaaRating}+`,
      rating: values.rating,
      ratingsNumber: values.ratingsNumber,
      year: values.year,
      duration: values.duration,
      description: values.description,
    };
    dispatch(addFilm({ ...filmObj }))
      .then((res) => {
        values.genres.map((genre: string) => {
          dispatch(addGenre({ genre, filmId: res.payload as number }));
        });
      })
      .then(() => {
        setTimeout(() => {
          navigate('/admin/films');
        }, 3000);
        setIsSuccess(true);
      })
      .catch(() => {
        setTimeout(() => {
          navigate('/admin/films');
        }, 3000);
        setIsError(true);
      });
  };
  if (isSuccess) {
    return (
      <AdminModal>
        <p>Фильм успешно добавлен</p>
      </AdminModal>
    );
  }
  if (isError) {
    return (
      <AdminModal>
        <p>Произошла ошибка</p>
      </AdminModal>
    );
  }
  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          submitAddFilm(values);
        }}
      >
        {() => {
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
                  <div className={style.checkboxBlock_list}>{checkboxGenre}</div>
                </div>
                <Field
                  name="poster"
                  component={AdminInput}
                  placeholder="Введите url постера в формате png или jpeg"
                  txtLabel="Постер для фильма"
                  type="text"
                />
                <Field
                  name="trailer"
                  component={AdminInput}
                  placeholder="Введите url трейлера"
                  txtLabel="Трейлер для фильма"
                  type="text"
                />
                <Field
                  name="mpaaRating"
                  component={AdminInput}
                  placeholder="Введите возрастное ограничение"
                  txtLabel="Возрастное ограничение"
                  type="number"
                />
                <Field
                  name="rating"
                  component={AdminInput}
                  placeholder="Введите рейтинг фильма"
                  txtLabel="Рейтинг фильма"
                  type="number"
                />
                <Field
                  name="ratingsNumber"
                  component={AdminInput}
                  placeholder="Введите количество отзывов к фильму"
                  txtLabel="Количество отзывов к фильму"
                  type="number"
                />
                <Field
                  name="year"
                  component={AdminInput}
                  placeholder="Введите год фильма"
                  txtLabel="Год фильма"
                  type="number"
                />
                <Field
                  name="duration"
                  component={AdminInput}
                  placeholder="Введите продолжительность фильма"
                  txtLabel="Продолжительность фильма"
                  type="number"
                />
                <Field
                  name="description"
                  component={AdminInput}
                  placeholder="Введите описание"
                  txtLabel="Описание"
                  type="text"
                />
                <RedButton addingClass={style.submit} text={'Сохранить'} type="submit" />
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default AdminFilmAddSelf;
