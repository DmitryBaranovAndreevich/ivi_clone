import React, { ChangeEvent } from 'react';
import style from './FilterRange.module.scss';

type TFilterRangeFormProps = {
  title: string;
  choosenRate: number;
  nameInitialValue: 'rate' | 'countReviews';
  setFilter: (value: number) => void;
  step: number;
  min: number;
  max: number;
};

const FilterRangeForm: React.FC<TFilterRangeFormProps> = ({
  title,
  choosenRate,
  nameInitialValue,
  setFilter,
  step,
  min,
  max,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    if (Number(target.value)) {
      setFilter(Number(target.value));
    }
  };
  return (
    <div className={style.text}>
      <form className={style.form}>
        <label className={style.label}>
          <p>{title}</p>
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            name={nameInitialValue}
            onChange={onChange}
            value={choosenRate}
            className={style.input}
          />
        </label>
        <div className={style.slider}>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            name={nameInitialValue}
            onChange={onChange}
            value={choosenRate}
            className={style.slider_range}
          />
        </div>
      </form>
    </div>
  );
};

export default FilterRangeForm;
