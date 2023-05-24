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
import { useTranslation } from 'react-i18next';

const AuthPassword = () => {
  const { t } = useTranslation();
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
      .required(t('login.passErr') as string)
      .min(8, t('login.lengthErr') as string)
      .matches(/[a-zA-Z0-9]/, t('login.textErr') as string),
    phone: Yup.string()
      .required(t('auth.phoneErr') as string)
      .min(6, t('auth.lengthErr') as string),
    age: Yup.number().required(t('auth.ageErr') as string),
    country: Yup.string().required(t('auth.countryErr') as string),
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
      <LoginHeader title={t('auth.hello')} />
      <Line persent={'50%'} />
      <LoginMessage>{t('auth.register1')}</LoginMessage>
      <div className={`${styles.responce} ${styles.animation} ${styles.animationTime1}`}>
        <button className={styles.editButton} type="button" onClick={() => navigate(-1)}>
          <EditIcon width={'25px'} height={'15px'} />
        </button>
        <LoginMessage response>{email}</LoginMessage>
        <LoginMessage response>{first_name}</LoginMessage>
        <LoginMessage response>{second_name}</LoginMessage>
      </div>
      <form className={`${styles.wrapper} ${styles.animation} ${styles.animationTime2}`}>
        <LoginMessage>{t('auth.passEnt')}</LoginMessage>
        <PassInput name={'password'} value={value.password} onChange={handleChange} />
        <Input
          placeholder={t('auth.phoneEnt')}
          name={'phone'}
          value={value.phone}
          onChange={handleChange}
        />
        <Input
          placeholder={t('auth.ageEnt')}
          name={'age'}
          value={value.age}
          onChange={handleChange}
        />
        <Input
          placeholder={t('auth.countEnt')}
          name={'country'}
          value={value.country}
          onChange={handleChange}
        />
        <RedButton
          addingClass={styles.button}
          text={t('login.enter1')}
          type={'submit'}
          onClick={handleClick}
        />
        {error && <ErrorMessage error={error} />}
      </form>
    </LoginLayout>
  );
};

export default AuthPassword;
