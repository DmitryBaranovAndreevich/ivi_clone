import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import style from './FilterRange.module.scss';
import FilterRangeForm from './FilterRangeForm';

type TFilterRangeProps = {
  title: string;
  nameInitialValue: 'rate' | 'countReviews';
  step: number;
  min: number;
  max: number;
};

const FilterRange: React.FC<TFilterRangeProps> = ({ title, nameInitialValue, step, min, max }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [choosenRate, setChoosenRate] = useState(0);
  const location = useLocation();
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
  }, [searchParams, nameInitialValue, countReviews, rating]);
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const queryParams = new URLSearchParams(location.search);
    const target = e.target as HTMLInputElement;
    if (isFinite(Number(target.value)) && nameInitialValue === 'rate') {
      queryParams.delete('rating_gte');
      queryParams.set('rating_gte', target.value);
    } else if (isFinite(Number(target.value)) && nameInitialValue === 'countReviews') {
      queryParams.delete('ratingsNumber_gte');
      queryParams.set('ratingsNumber_gte', target.value);
    }
    setSearchParams(queryParams);
  };
  return (
    <div className={style.slider}>
      <FilterRangeForm
        title={title}
        choosenRate={choosenRate}
        nameInitialValue={nameInitialValue}
        step={step}
        min={min}
        max={max}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterRange;
