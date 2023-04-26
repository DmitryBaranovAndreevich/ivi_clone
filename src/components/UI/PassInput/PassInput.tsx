import { FC, FormEvent, useState } from 'react';
import styles from './passInput.module.scss';

interface IInput {
  name?: string;
  value?: string;
  onChange?: (e: FormEvent) => void;
}

const PassInput: FC<IInput> = ({ name, value, onChange }) => {
  const [isActiv, setIsActiv] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: FormEvent) => {
    if (onChange) onChange(e);
    const input = e.target as HTMLInputElement;
    const value = input.value as string;
    setInputValue(value);
  };

  const handleClick = () => {
    setIsActiv(!isActiv);
  };
  return (
    <div className={styles.container}>
      <span className={styles.span}>Введите пароль</span>
      <input
        type={isActiv ? 'text' : 'password'}
        className={styles.input}
        value={inputValue}
        onChange={handleChange}
        name={name}
      />
      <div className={styles.icon} onClick={handleClick}></div>
    </div>
  );
};

export default PassInput;
