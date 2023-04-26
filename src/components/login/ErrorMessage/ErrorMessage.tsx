import { FC } from 'react';
import styles from './errorMessage.module.scss';

interface IErrorMessage {
  error: string;
}

const ErrorMessage: FC<IErrorMessage> = ({ error }) => {
  return <p className={styles.errorMessage}>{error}</p>;
};

export default ErrorMessage;
