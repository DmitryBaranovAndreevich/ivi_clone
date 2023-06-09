import { FormEvent, useEffect, useState } from 'react';
import Input from '../../components/UI/Input/Input';
import RedButton from '../../components/UI/redButton/RedButton';
import Line from '../../components/login/Line/Line';
import LoginHeader from '../../components/login/LoginHeader/LoginHeader';
import LoginLayout from '../../components/login/LoginLayout/LoginLayout';
import LoginMessage from '../../components/login/LoginMessage/LoginMessage';
import useForm from '../../hooks/useForm';
import styles from './login.module.scss';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/login/ErrorMessage/ErrorMessage';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userLoginSlice } from '../../store/reducers/UserLoginSlice';
import { useTranslation } from 'react-i18next';

const LoginEmail = () => {
  const { t } = useTranslation();
  const { setEmail } = userLoginSlice.actions;
  const { email } = useAppSelector((state) => state.userLoginReduser);
  const dispatch = useAppDispatch();
  const { value, handleChange } = useForm({ email });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const shema = Yup.object().shape({
    email: Yup.string()
      .email('Введены не корректные данные')
      .required('Поле обязательно для заполнения'),
  });

  useEffect(() => {
    setError('');
  }, [value]);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    shema
      .validate(value)
      .then((res) => {
        dispatch(setEmail(res.email));
        navigate('/profile/password');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <LoginLayout>
      <LoginHeader title={t('login.enter')} />
      <Line persent={'10%'} />
      <form className={styles.wrapper}>
        <LoginMessage>
          <span className={styles.span}>{t('login.enter1')}</span> {t('login.use')}
        </LoginMessage>
        <Input
          placeholder={t('login.placeholder')}
          name={'email'}
          value={value.email}
          onChange={handleChange}
        />
        <RedButton
          addingClass={styles.button}
          text={t('login.continue')}
          type={'submit'}
          onClick={handleClick}
        />
        {error && <ErrorMessage error={error} />}
      </form>
    </LoginLayout>
  );
};

export default LoginEmail;
