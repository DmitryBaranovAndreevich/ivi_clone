import React, { useEffect, useMemo, useState } from 'react';
import { Form, Formik } from 'formik';
import { TGenre } from '../../../../type/type';
import style from './../FilterPlank.module.scss';
import FilterCheckbox from './FilterItem';
import { generatePath, useNavigate, useSearchParams } from 'react-router-dom';
import { TObjWithParamsUrl } from '../../../../hooks/useNavigation';
import { setUrlParams } from '../../../../utils/helperWithNavigation';

type TFilterListProps = {
  nameInitialValue: 'genre' | 'country' | 'year';
  listItem: Array<TGenre>;
  choosenValue: TObjWithParamsUrl;
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
  const [valuesCheckbox, setValuesCheckbox] = useState<Array<string>>(
    choosenValue[nameInitialValue]?.split('+') || []
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (valuesCheckbox.join('+') !== choosenValue[nameInitialValue]) {
      debugger;
      const path = generatePath('/movies/:genre?/:country?/:year?', {
        genre: setUrlParams(nameInitialValue, valuesCheckbox, choosenValue, 'genre') || null,
        country: setUrlParams(nameInitialValue, valuesCheckbox, choosenValue, 'country') || null,
        year: setUrlParams(nameInitialValue, valuesCheckbox, choosenValue, 'year') || null,
      });
      navigate(`${path}?${searchParams}`);
      // setSearchParams(searchParams);
    }
  }, [valuesCheckbox, navigate]);
  // console.log(params);
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
