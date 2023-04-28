import { FC } from 'react';
import styles from './loginLayout.module.scss';

interface ILoginLayOut {
  children: React.ReactNode;
}

const LoginLayout: FC<ILoginLayOut> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default LoginLayout;
