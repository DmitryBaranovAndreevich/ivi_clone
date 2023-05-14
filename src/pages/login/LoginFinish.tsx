import { useEffect } from 'react';
import Line from '../../components/login/Line/Line';
import LoginHeader from '../../components/login/LoginHeader/LoginHeader';
import LoginLayout from '../../components/login/LoginLayout/LoginLayout';
import LoginMessage from '../../components/login/LoginMessage/LoginMessage';
import { useAppSelector } from '../../hooks/redux';
import styles from './login.module.scss';
import { useNavigate } from 'react-router-dom';

const LoginFinish = () => {
  const navigate = useNavigate();
  const { email, password } = useAppSelector((state) => state.userLoginReduser);
  const redirect = () => {
    navigate('/', { replace: true });
  };
  useEffect(() => {
    const timer = setTimeout(redirect, 4500);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <LoginLayout>
      <LoginHeader title={'Здравствуйте'} />
      <Line persent={'100%'} />
      <LoginMessage>Войдите</LoginMessage>
      <div className={`${styles.responce}`}>
        <LoginMessage response>{email}</LoginMessage>
      </div>
      <LoginMessage>Введите пароль, чтобы войти</LoginMessage>
      <div className={`${styles.responce} ${styles.animation} ${styles.animationTime1}`}>
        <LoginMessage response>{'⚹'.repeat(password.length)}</LoginMessage>
      </div>
      <div className={`${styles.div} ${styles.animation} ${styles.animationTime2}`}>
        <LoginMessage success>Вы успешно авторизировались</LoginMessage>
      </div>
    </LoginLayout>
  );
};

export default LoginFinish;
