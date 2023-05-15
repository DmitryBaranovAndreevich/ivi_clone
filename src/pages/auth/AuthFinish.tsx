import { useNavigate } from 'react-router-dom';
import Line from '../../components/login/Line/Line';
import LoginHeader from '../../components/login/LoginHeader/LoginHeader';
import LoginLayout from '../../components/login/LoginLayout/LoginLayout';
import LoginMessage from '../../components/login/LoginMessage/LoginMessage';
import styles from '../login/login.module.scss';
import { useEffect } from 'react';

const AuthFinish = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/', { replace: true });
  };
  useEffect(() => {
    const timer = setTimeout(redirect, 4500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <LoginLayout>
      <LoginHeader title={'Поздравляю'} />
      <Line persent={'100%'} />
      <LoginMessage>Зарегистрируйтесь</LoginMessage>
      <div className={`${styles.div} ${styles.animation} ${styles.animationTime2}`}>
        <LoginMessage success>Вы успешно авторизировались</LoginMessage>
      </div>
    </LoginLayout>
  );
};

export default AuthFinish;
