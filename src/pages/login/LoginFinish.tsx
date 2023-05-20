import { useEffect } from 'react';
import Line from '../../components/login/Line/Line';
import LoginHeader from '../../components/login/LoginHeader/LoginHeader';
import LoginLayout from '../../components/login/LoginLayout/LoginLayout';
import LoginMessage from '../../components/login/LoginMessage/LoginMessage';
import { useAppSelector } from '../../hooks/redux';
import styles from './login.module.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LoginFinish = () => {
  const { t } = useTranslation();
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
      <LoginHeader title={t('login.greeting')} />
      <Line persent={'100%'} />
      <LoginMessage>{t('login.enter1')}</LoginMessage>
      <div className={`${styles.responce}`}>
        <LoginMessage response>{email}</LoginMessage>
      </div>
      <LoginMessage>{t('login.passEnt')}</LoginMessage>
      <div className={`${styles.responce} ${styles.animation} ${styles.animationTime1}`}>
        <LoginMessage response>{'⚹'.repeat(password.length)}</LoginMessage>
      </div>
      <div className={`${styles.div} ${styles.animation} ${styles.animationTime2}`}>
        <LoginMessage success>{t('login.finish')}</LoginMessage>
      </div>
    </LoginLayout>
  );
};

export default LoginFinish;
