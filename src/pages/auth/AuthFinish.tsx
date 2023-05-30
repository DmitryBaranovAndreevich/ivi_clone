import { useNavigate } from 'react-router-dom';
import Line from '../../components/login/Line/Line';
import LoginHeader from '../../components/login/LoginHeader/LoginHeader';
import LoginLayout from '../../components/login/LoginLayout/LoginLayout';
import LoginMessage from '../../components/login/LoginMessage/LoginMessage';
import styles from '../login/login.module.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AuthFinish = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    const redirect = () => {
      navigate('/', { replace: true });
    };

    const timer = setTimeout(redirect, 4500);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <LoginLayout>
      <LoginHeader title={t('auth.congratulations')} />
      <Line persent={'100%'} />
      <LoginMessage>{t('auth.register1')}</LoginMessage>
      <div className={`${styles.div} ${styles.animation} ${styles.animationTime2}`}>
        <LoginMessage success>{t('login.finish')}</LoginMessage>
      </div>
    </LoginLayout>
  );
};

export default AuthFinish;
