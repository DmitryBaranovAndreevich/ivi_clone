import { FC } from 'react';
import styles from './loginHeader.module.scss';
import { Link, useLocation } from 'react-router-dom';

interface ILoginHader {
  title: string;
}

const LoginHeader: FC<ILoginHader> = ({ title }) => {
  const location = useLocation();
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <Link to={'/'}>
          <p className={styles.button}>X</p>
        </Link>
      </div>
      {!location.pathname.startsWith('/auth') && (
        <Link to={'/auth/email'} style={{ textDecoration: 'none' }}>
          <p className={styles.regButton}>Зарегистрироваться</p>
        </Link>
      )}
    </>
  );
};

export default LoginHeader;
