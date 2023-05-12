import styles from '../login/login.module.scss';
import Line from '../../components/login/Line/Line';
import LoginHeader from '../../components/login/LoginHeader/LoginHeader';
import LoginLayout from '../../components/login/LoginLayout/LoginLayout';
import LoginMessage from '../../components/login/LoginMessage/LoginMessage';
import Input from '../../components/UI/Input/Input';
import RedButton from '../../components/UI/redButton/RedButton';
import useForm from '../../hooks/useForm';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/login/ErrorMessage/ErrorMessage';
import * as Yup from 'yup';
import { userAuthSlice } from '../../store/reducers/UserAuthSlice';
import { useAppDispatch } from '../../hooks/redux';

const AuthEmail = () => {
  const { setEmailNameSurName } = userAuthSlice.actions;
  const dispatch = useAppDispatch();
  const { value, handleChange } = useForm({ email: '', first_name: '', second_name: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const shema = Yup.object().shape({
    email: Yup.string()
      .email('Введены не корректные данные')
      .required('Поле адреса email обязательно для заполнения'),
    first_name: Yup.string().required('Поле с именем обязательно для заполнения'),
    second_name: Yup.string().required('Поле с фамилией обязательно для заполнения'),
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
      <LoginHeader title={'Регистрация'} />
      <Line persent={'10%'} />
      <form className={styles.wrapper}>
        <LoginMessage>
          <span className={styles.span}>Зарегистрируйтесь</span> чтобы пользоваться сервисом на
          любом устройстве
        </LoginMessage>
        <Input
          placeholder={'Введите email'}
          name={'email'}
          value={value.email}
          onChange={handleChange}
        />
        <Input
          placeholder={'Введите имя'}
          name={'first_name'}
          value={value.first_name}
          onChange={handleChange}
        />
        <Input
          placeholder={'Введите фамилию'}
          name={'second_name'}
          value={value.second_name}
          onChange={handleChange}
        />
        <RedButton
          addingClass={styles.button}
          text={'Продолжить'}
          type={'submit'}
          onClick={handleClick}
        />
        {error && <ErrorMessage error={error} />}
      </form>
    </LoginLayout>
  );
};

export default AuthEmail;
