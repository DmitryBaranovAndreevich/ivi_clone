import styles from '../login/login.module.scss';
import Line from '../../components/login/Line/Line';
import LoginHeader from '../../components/login/LoginHeader/LoginHeader';
import LoginLayout from '../../components/login/LoginLayout/LoginLayout';
import LoginMessage from '../../components/login/LoginMessage/LoginMessage';
import Input from '../../components/UI/Input/Input';
import useForm from '../../hooks/useForm';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/login/ErrorMessage/ErrorMessage';
import * as Yup from 'yup';
import { userAuthSlice } from '../../store/reducers/UserAuthSlice';
import { useAppDispatch } from '../../hooks/redux';
import { useTranslation } from 'react-i18next';
import RedButton from '../../components/UI/redButton/RedButton';

const AuthEmail = () => {
  const { t } = useTranslation();
  const { setEmailNameSurName } = userAuthSlice.actions;
  const dispatch = useAppDispatch();
  const { value, handleChange } = useForm({ email: '', first_name: '', second_name: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const shema = Yup.object().shape({
    email: Yup.string()
      .email(t('auth.dataErr') as string)
      .required(t('auth.emailErr') as string),
    first_name: Yup.string().required(t('auth.nameErr') as string),
    second_name: Yup.string().required(t('auth.secNameErr') as string),
  });

  useEffect(() => {
    setError('');
  }, [value]);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    shema
      .validate(value)
      .then((res) => {
        dispatch(setEmailNameSurName(res));
        navigate('/auth/password');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <LoginLayout>
      <LoginHeader title={t('auth.register')} />
      <Line persent={'10%'} />
      <form className={styles.wrapper}>
        <LoginMessage>
          <span className={styles.span}>{t('auth.register1')}</span> {t('login.use')}
        </LoginMessage>
        <Input
          placeholder={t('auth.emailEnt')}
          name={'email'}
          value={value.email}
          onChange={handleChange}
        />
        <Input
          placeholder={t('auth.nameEnt')}
          name={'first_name'}
          value={value.first_name}
          onChange={handleChange}
        />
        <Input
          placeholder={t('auth.secNameEnt')}
          name={'second_name'}
          value={value.second_name}
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

export default AuthEmail;
