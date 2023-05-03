import React, { useEffect, useMemo, useState } from 'react';
import { Form, Formik } from 'formik';
import { TGenreCountriesYears } from '../../../../type/type';
import style from './../FilterPlank.module.scss';
import FilterCheckbox from './FilterItem';
import { generatePath, useNavigate, useSearchParams } from 'react-router-dom';
import { TObjWithParamsUrl } from '../../../../hooks/useNavigation';
import { setUrlParams } from '../../../../utils/helperWithNavigation';

type TFilterListProps = {
  nameInitialValue: 'genre' | 'country' | 'year';
  listItem: Array<TGenreCountriesYears> | undefined;
  choosenValue: TObjWithParamsUrl;
  addingClass: string;
};

const FilterDropdown: React.FC<TFilterListProps> = ({
  nameInitialValue,
  listItem,
  addingClass,
  choosenValue,
}) => {
  const [valuesCheckbox, setValuesCheckbox] = useState<Array<string>>(
    choosenValue[nameInitialValue]?.split('+') || []
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (valuesCheckbox.join('+') !== choosenValue[nameInitialValue]) {
      const path = generatePath('/movies/:genre?/:year?/:country?', {
        genre: setUrlParams(nameInitialValue, valuesCheckbox, choosenValue, 'genre') || null,
        year: setUrlParams(nameInitialValue, valuesCheckbox, choosenValue, 'year') || null,
        country: setUrlParams(nameInitialValue, valuesCheckbox, choosenValue, 'country') || null,
      });
      navigate(`${path}?${searchParams}`);
    }
  }, [valuesCheckbox, navigate]);
  const filterList = useMemo(() => {
    return listItem?.map((item: TGenreCountriesYears) => {
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

  return (
    <Formik
      initialValues={{
        genre: valuesCheckbox,
        country: valuesCheckbox,
        year: valuesCheckbox,
      }}
      onSubmit={(values) => setValuesCheckbox(values[nameInitialValue])}
    >
      {({ values }) => {
        {
          setValuesCheckbox(values[nameInitialValue]);
        }
        return (
          <Form className={`${addingClass} ${style.dropdown}`}>
            <ul className={style.dropdown_list}>{filterList}</ul>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FilterDropdown;
