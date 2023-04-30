import { FC } from 'react';
import styles from './loginMessage.module.scss';

interface ILoginMessage {
  children: React.ReactNode;
  response?: boolean;
  success?: boolean;
}

const LoginMessage: FC<ILoginMessage> = ({ children, response, success }) => {
  return (
    <p
      className={styles.container}
      style={
        response
          ? { borderRadius: '10px 10px 0 10px' }
          : success
          ? { backgroundColor: 'lightgreen', color: 'black' }
          : {}
      }
    >
      {children}
    </p>
  );
};

export default LoginMessage;
