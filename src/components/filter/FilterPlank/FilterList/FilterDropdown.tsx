import React, { useMemo, useState } from 'react';
import { Form, Formik, Field } from 'formik';
import { TGenre } from '../../../../type/type';
import style from './../FilterPlank.module.scss';
import FilterCheckbox from './FilterItem';

type TFilterListProps = {
  nameInitialValue: 'genre' | 'country' | 'year';
  listItem: Array<TGenre>;
  choosenValue: Array<string>;
  addingClass: string;
  setFilter: (values: Array<string>) => void;
};

const FilterDropdown: React.FC<TFilterListProps> = ({
  nameInitialValue,
  listItem,
  addingClass,
  setFilter,
  choosenValue,
}) => {
  const filterList = useMemo(() => {
    return listItem.map((item: TGenre) => {
      return (
        <FilterCheckbox
          key={item.id}
          nameInitialValue={nameInitialValue}
          name={item.name}
          englishName={item.englishName}
        />
      );
    });
  }, [listItem, nameInitialValue]);

  const onChange = (genres: Array<string>) => {
    setFilter(genres);
  };

  return (
    <Formik
      initialValues={{
        genre: [],
        country: [],
        year: [],
      }}
      onSubmit={(values) => setFilter(values.genre)}
    >
      {({ values }) => {
        {
          values[nameInitialValue] !== choosenValue && setFilter(values.genre);
        }
        return (
          <Form
            className={`${addingClass} ${style.dropdown}`}
            onChange={() => onChange(values.genre)}
          >
            <ul className={style.dropdown_list}>{filterList}</ul>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FilterDropdown;
