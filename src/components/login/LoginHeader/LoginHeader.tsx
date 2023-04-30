import { FC } from 'react';
import styles from './loginHeader.module.scss';
import { Link } from 'react-router-dom';

interface ILoginHader {
  title: string;
}

const LoginHeader: FC<ILoginHader> = ({ title }) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <Link to={'/'}>
          <p className={styles.button}>X</p>
        </Link>
      </div>
    </>
  );
};

export default LoginHeader;
