import { FC, FormEvent } from 'react';
import styles from './input.module.scss';

interface IInput {
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: (e: FormEvent) => void;
}

const Input: FC<IInput> = ({ placeholder, name, value, onChange }) => {
  return (
    <div className={styles.container}>
      <span className={styles.span}>{placeholder}</span>
      <input type="text" className={styles.input} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
