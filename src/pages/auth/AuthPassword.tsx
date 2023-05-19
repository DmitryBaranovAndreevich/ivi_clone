import styles from '../login/login.module.scss';
import Line from '../../components/login/Line/Line';
import LoginHeader from '../../components/login/LoginHeader/LoginHeader';
import LoginLayout from '../../components/login/LoginLayout/LoginLayout';
import LoginMessage from '../../components/login/LoginMessage/LoginMessage';
import PassInput from '../../components/UI/PassInput/PassInput';
import RedButton from '../../components/UI/redButton/RedButton';
import { ReactComponent as EditIcon } from '../../assests/svg/edit.svg';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Input from '../../components/UI/Input/Input';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import * as Yup from 'yup';
import { FormEvent, useState } from 'react';
import { authUser } from '../../store/reducers/ActionCreators';
import { userAuthSlice } from '../../store/reducers/UserAuthSlice';
import ErrorMessage from '../../components/login/ErrorMessage/ErrorMessage';
import { loginUser } from '../../store/reducers/ActionCreators';
import { setCookie } from '../../service/setCookie';

const AuthPassword = () => {
  const {
    email,
    first_name,
    second_name,
    error: errMes,
  } = useAppSelector((state) => state.userAuthReduser);
  const [error, setError] = useState(errMes);
  const { setPassAgeContryPhone } = userAuthSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { value, handleChange } = useForm({ password: '', phone: '', age: '', country: '' });

  const shema = Yup.object().shape({
    password: Yup.string()
      .required('Введите пароль')
      .min(6, 'Минимальная длина 6 символов')
      .matches(/[a-zA-Z0-9]/, 'Пароль должен содержать только латинские буквы и цыфры'),
    phone: Yup.string()
      .required('Поле с номером телефона обязательно для заполнения')
      .min(6, 'минимальная длинна 6 символов'),
    age: Yup.number().required('Поле возраст обязательно для заполнения'),
    country: Yup.string().required('Срана проживания обязательно для ввода'),
  });

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    shema
      .validate(value)
      .then((res) => {
        dispatch(setPassAgeContryPhone(res));
        return dispatch(authUser({ ...res, email, first_name, second_name }));
      })
      .then((res) => {
        if (typeof res.payload !== 'string') {
          return dispatch(loginUser({ email, password: value.password }));
        }
        return Promise.reject(res.payload as string);
      })
      .then(({ payload }) => {
        if (payload) {
          debugger;
          setCookie('token', (payload as { token: string }).token, {
            expires: 1000 * 60 * 60 * 24 * 30,
          });
          navigate('/auth/finish', { replace: true });
        }
      })
      .catch((err) => {
        setError(typeof err === 'object' ? err.message : err);
      });
  };
  return (
    <LoginLayout>
      <LoginHeader title={'Здравствуйте'} />
      <Line persent={'50%'} />
      <LoginMessage>Зарегистрируйтесь</LoginMessage>
      <div className={`${styles.responce} ${styles.animation} ${styles.animationTime1}`}>
        <button className={styles.editButton} type="button" onClick={() => navigate(-1)}>
          <EditIcon width={'25px'} height={'15px'} />
        </button>
        <LoginMessage response>{email}</LoginMessage>
        <LoginMessage response>{first_name}</LoginMessage>
        <LoginMessage response>{second_name}</LoginMessage>
      </div>
      <form className={`${styles.wrapper} ${styles.animation} ${styles.animationTime2}`}>
        <LoginMessage>Введите пароль и другие данные</LoginMessage>
        <PassInput name={'password'} value={value.password} onChange={handleChange} />
        <Input
          placeholder={'Введите телефон'}
          name={'phone'}
          value={value.phone}
          onChange={handleChange}
        />
        <Input
          placeholder={'Введите ваш возраст'}
          name={'age'}
          value={value.age}
          onChange={handleChange}
        />
        <Input
          placeholder={'Введите страну'}
          name={'country'}
          value={value.country}
          onChange={handleChange}
        />
        <RedButton
          addingClass={styles.button}
          text={'Войти'}
          type={'submit'}
          onClick={handleClick}
        />
        {error && <ErrorMessage error={error} />}
      </form>
    </LoginLayout>
  );
};

export default AuthPassword;
