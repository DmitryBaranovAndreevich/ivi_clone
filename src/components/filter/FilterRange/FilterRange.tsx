import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import style from './FilterRange.module.scss';
import FilterRangeForm from './FilterRangeForm';

type TFilterRangeProps = {
  title: string;
  nameInitialValue: 'rate' | 'countReviews';
  step: number;
  min: number;
  max: number;
  setFilter: (value: number) => void;
};

type qqq = {
  rating_gte?: string;
  ratingsNumber_gte?: string;
};

const FilterRange: React.FC<TFilterRangeProps> = ({
  title,
  nameInitialValue,
  step,
  min,
  max,
  setFilter,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [choosenRate, setChoosenRate] = useState(0);
  const rating: number = Number(searchParams.get('rating_gte'))
    ? Number(searchParams.get('rating_gte'))
    : 0;
  const countReviews: number = Number(searchParams.get('ratingsNumber_gte'))
    ? Number(searchParams.get('ratingsNumber_gte'))
    : 0;
  // const [choosenCountReview, setChoosenCountReview] = useState(0);
  useEffect(() => {
    nameInitialValue === 'rate' && setChoosenRate(rating);
    nameInitialValue === 'countReviews' && setChoosenRate(countReviews);
  }, [searchParams, nameInitialValue]);
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const queryParams: qqq = {};
    const target = e.target as HTMLInputElement;
    if (Number(target.value) && nameInitialValue === 'rate') {
      if (searchParams.get('ratingsNumber_gte')) {
        queryParams.ratingsNumber_gte = String(searchParams.get('ratingsNumber_gte'));
      }
      queryParams.rating_gte = target.value;
    } else if (Number(target.value) && nameInitialValue === 'countReviews') {
      if (searchParams.get('rating_gte')) {
        queryParams.rating_gte = String(searchParams.get('rating_gte'));
      }
      queryParams.ratingsNumber_gte = target.value;
    }
    setSearchParams(queryParams);
  };
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
        onChange={onChange}
      />
    </div>
  );
};

export default FilterRange;
