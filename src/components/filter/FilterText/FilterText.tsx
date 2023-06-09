import React, { ChangeEvent, useMemo, useState } from 'react';
import { Form, Formik, Field } from 'formik';
import style from './FilterText.module.scss';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useGetPersonByNameQuery } from '../../../store/api/searchApi';
import IPerson from '../../../type/TPerson';
import FindPerson from '../../modalSearch/FindPerson';

type TFilterPlankProps = {
  title: string;
  nameInitialValue: 'actor' | 'director';
  setFilter: (value: Array<string>) => void;
};

const FilterText: React.FC<TFilterPlankProps> = ({ title, nameInitialValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { buttonElement, dropdownElement } = useClickOutside(isOpen, setIsOpen);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { data: persons } = useGetPersonByNameQuery(
    {
      profession: nameInitialValue,
      name: searchParams.get(nameInitialValue),
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const personsBlock = useMemo(() => {
    return persons?.map((person: IPerson) => {
      return (
        <button
          key={person.id}
          onClick={() => {
            const queryParams = new URLSearchParams(location.search);
            queryParams.delete('person');
            queryParams.set('person', person.name);
            queryParams.delete(nameInitialValue);
            queryParams.set(nameInitialValue, person.name);
            setSearchParams(queryParams);
            setIsOpen(false);
          }}
          className={style.person}
        >
          <FindPerson namePerson={person.name} />
        </button>
      );
    });
  }, [persons, location.search, setSearchParams, nameInitialValue]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (e: ChangeEvent<HTMLInputElement>, values: any): void => {
    const queryParams = new URLSearchParams(location.search);
    const target = e.target as HTMLInputElement;
    if (queryParams.has(nameInitialValue)) {
      queryParams.delete(nameInitialValue);
    }
    if (target.value) {
      queryParams.set(nameInitialValue, target.value);
    }
    values[nameInitialValue] = target.value;
    setSearchParams(queryParams);
  };
  const onFocus = () => {
    setIsOpen(true);
  };
  return (
    <div className={style.text}>
      <Formik
        initialValues={{
          actor: searchParams.get('actor') ?? '',
          director: searchParams.get('director') ?? '',
        }}
        onSubmit={() => {
          // login(values.email, values.password, setStatus)
        }}
      >
        {({ values, handleBlur }) => (
          <div ref={buttonElement}>
            <Form className={style.form}>
              <Field
                name={nameInitialValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, values)}
                onFocus={onFocus}
                onBlur={handleBlur}
                value={values[nameInitialValue]}
                className={style.input}
              />
              <span
                className={
                  style.description +
                  ' ' +
                  style.description_focus +
                  ' ' +
                  ((values.actor || values.director) && style.description_active)
                }
              >
                {title}
              </span>
            </Form>
          </div>
        )}
      </Formik>
      <div>
        {isOpen && personsBlock && personsBlock.length > 0 && (
          <div className={style.dropdown} ref={dropdownElement}>
            {personsBlock}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterText;
