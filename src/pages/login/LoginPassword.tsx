import RedButton from '../../components/UI/redButton/RedButton';
import Line from '../../components/login/Line/Line';
import LoginHeader from '../../components/login/LoginHeader/LoginHeader';
import LoginLayout from '../../components/login/LoginLayout/LoginLayout';
import LoginMessage from '../../components/login/LoginMessage/LoginMessage';
import styles from './login.module.scss';
import { ReactComponent as EditIcon } from '../../assests/svg/edit.svg';
import PassInput from '../../components/UI/PassInput/PassInput';
import useForm from '../../hooks/useForm';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/login/ErrorMessage/ErrorMessage';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { loginUser } from '../../store/reducers/ActionCreators';
import { userLoginSlice } from '../../store/reducers/UserLoginSlice';
import { setCookie } from '../../service/setCookie';

const LoginPassword = () => {
  const {
    email,
    isLoading,
    error: errorMessage,
  } = useAppSelector((state) => state.userLoginReduser);
  const dispatch = useAppDispatch();
  const { setPassword } = userLoginSlice.actions;
  const { value, handleChange } = useForm({ password: '' });
  const [error, setError] = useState(errorMessage);
  const navigate = useNavigate();

  const shema = Yup.object().shape({
    password: Yup.string()
      .required('Введите пароль')
      .min(8, 'Минимальная длина 8 символов')
      .matches(/[a-zA-Z0-9]/, 'Пароль должен содержать только латинские буквы и цыфры'),
  });

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    shema
      .validate(value)
      .then(({ password }) => {
        dispatch(setPassword(password));
        return dispatch(loginUser({ email, password }));
      })
      .then(({ payload }) => {
        if (typeof payload !== 'string') {
          setCookie('token', (payload as { token: string }).token, {
            expires: 1000 * 60 * 60 * 24 * 30,
          });
          navigate('/profile/finish', { replace: true });
        }
        return Promise.reject(payload as string);
      })
      .catch((err) => {
        setError(typeof err === 'object' ? err.message : err);
      });
  };

  return (
    <LoginLayout>
      <LoginHeader title={'Здравствуйте'} />
      <Line persent={'50%'} />
      <LoginMessage>Войдите</LoginMessage>
      <div className={`${styles.responce} ${styles.animation} ${styles.animationTime1}`}>
        <button className={styles.editButton} type="button" onClick={() => navigate(-1)}>
          <EditIcon width={'25px'} height={'15px'} />
        </button>
        <LoginMessage response>{email}</LoginMessage>
      </div>
      <form className={`${styles.wrapper} ${styles.animation} ${styles.animationTime2}`}>
        <LoginMessage>Введите пароль, чтобы войти</LoginMessage>
        <PassInput name={'password'} value={value.password} onChange={handleChange} />
        <RedButton
          isLoad={isLoading}
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

export default LoginPassword;
