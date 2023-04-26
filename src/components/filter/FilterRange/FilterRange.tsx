import React, { useEffect, useState } from 'react';
import { Form, Formik, Field } from 'formik';
import { TGenre } from '../../../type/type';
import style from './FilterRange.module.scss';
import FilterRangeForm from './FilterRangeForm';

type TFilterRangeProps = {
  title: string;
  choosenRate: number;
  nameInitialValue: 'rate' | 'countReviews';
  step: number;
  min: number;
  max: number;
  setFilter: (value: number) => void;
};

const FilterRange: React.FC<TFilterRangeProps> = ({
  title,
  choosenRate,
  nameInitialValue,
  step,
  min,
  max,
  setFilter,
}) => {
  return (
    <div className={style.slider}>
      <FilterRangeForm
        title={title}
        choosenRate={choosenRate}
        nameInitialValue={nameInitialValue}
        setFilter={setFilter}
        step={step}
        min={min}
        max={max}
      />
    </div>
  );
};

export default FilterRange;
