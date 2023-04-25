import React, { useEffect, useState } from 'react';
import { Form, Formik, Field } from 'formik';
import { TGenre } from '../../../type/type';
import style from './FilterRange.module.scss';

type TFilterPlankProps = {
  title: string;
  nameInitialValue: 'actor' | 'director';
  setFilter: (value: Array<string>) => void;
};

const FilterRange: React.FC<TFilterPlankProps> = ({ title, nameInitialValue, setFilter }) => {
  return (
    <div className={style.text}>
      <div>Рейтинг</div>
    </div>
  );
};

export default FilterRange;
