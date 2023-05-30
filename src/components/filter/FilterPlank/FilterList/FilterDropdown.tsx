import React, { useEffect, useMemo, useState } from 'react';
import { Form, Formik } from 'formik';
import { TGenreCountriesYears } from '../../../../type/type';
import style from './../FilterPlank.module.scss';
import FilterCheckbox from './FilterCheckbox';
import { generatePath, useNavigate, useSearchParams } from 'react-router-dom';
import { TObjWithParamsUrl } from '../../../../hooks/useNavigation';
import { setUrlParamsCheckbox, setUrlParamsRadio } from '../../../../utils/helperWithNavigation';
import FilterRadioButton from './FilterRadioButton';

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
  const [valuesRadio, setValuesRadio] = useState<string | undefined | null>(
    nameInitialValue === 'year' ? choosenValue.year : null
  );
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      valuesCheckbox.join('+') !== choosenValue[nameInitialValue] ||
      valuesRadio !== choosenValue.year
    ) {
      const path = generatePath('/movies/:genre?/:year?/:country?', {
        genre:
          setUrlParamsCheckbox(nameInitialValue, valuesCheckbox, choosenValue, 'genre') || null,
        year: setUrlParamsRadio(nameInitialValue, valuesRadio, choosenValue, 'year') || null,
        country:
          setUrlParamsCheckbox(nameInitialValue, valuesCheckbox, choosenValue, 'country') || null,
      });
      navigate(`${path}?${searchParams}`);
    }
  }, [valuesCheckbox, valuesRadio, navigate, choosenValue, nameInitialValue, searchParams]);
  const filterList = useMemo(() => {
    if (nameInitialValue === 'year') {
      return listItem?.map((item: TGenreCountriesYears) => {
        return (
          <FilterRadioButton
            key={item.id}
            nameInitialValue={nameInitialValue}
            name={item.name}
            englishName={item.englishName}
          />
        );
      });
    } else {
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
    }
  }, [listItem, nameInitialValue]);

  return (
    <Formik
      initialValues={{
        genre: valuesCheckbox,
        country: valuesCheckbox,
        year: valuesRadio,
      }}
      onSubmit={(values) => {
        if (nameInitialValue === 'year') {
          setValuesRadio(values.year);
        } else {
          setValuesCheckbox(values[nameInitialValue]);
        }
      }}
    >
      {({ values }) => {
        {
          if (nameInitialValue === 'year') {
            setValuesRadio(values.year);
          } else {
            setValuesCheckbox(values[nameInitialValue]);
          }
        }
        return (
          <Form className={`${addingClass} ${style.dropdown}`}>
            <ul
              className={`${style.dropdown_list} ${
                nameInitialValue === 'year' && style.dropdown_list_year
              }`}
            >
              {filterList}
            </ul>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FilterDropdown;
