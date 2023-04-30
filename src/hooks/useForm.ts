import { FormEvent, useState } from 'react';

const useForm = (init: { [key: string]: string }) => {
  const [value, setValue] = useState(init);

  const handleChange = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setValue({ ...value, [input.name]: input.value });
  };

  return { value, handleChange, setValue };
};

export default useForm;
