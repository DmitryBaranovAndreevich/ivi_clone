import { FC } from 'react';
import styles from './loginHeader.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CrossButton from '../../UI/crossButton/CrossButton';

interface ILoginHader {
  title: string;
}

const LoginHeader: FC<ILoginHader> = ({ title }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <CrossButton onClick={() => navigate('/')} addingClass={styles.cross} />
      </div>
      {!location.pathname.startsWith('/auth') && (
        <Link to={'/auth/email'} style={{ textDecoration: 'none' }}>
          <p className={styles.regButton}>{t('login.register')}</p>
        </Link>
      )}
    </>
  );
};

export default LoginHeader;
