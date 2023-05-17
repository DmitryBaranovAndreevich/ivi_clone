import React, { useMemo } from 'react';
import style from './ModalSearch.module.scss';
import CrossButton from '../UI/crossButton/CrossButton';
import ModalSearchForm from './ModalSearchForm';
import { useAppSelector } from '../../hooks/redux';
import { useGetPersonByNameQuery } from '../../store/api/searchApi';
import FindPerson from './FindPerson';

type TModalSearchProps = {
  closeModal: () => void;
};

const ModalSearch: React.FC<TModalSearchProps> = ({ closeModal }) => {
  const { searchMain } = useAppSelector((state) => state.searchReducer);
  const { data: listPerson } = useGetPersonByNameQuery({ name: searchMain });
  const findPersonsBlock = useMemo(() => {
    return listPerson?.map((person) => {
      // return <div></div>;
    });
  }, [listPerson]);
  return (
    <div className={style.wrapper}>
      <CrossButton closeModal={closeModal} addingClass={style.cross} />
      <h2 className={style.title}>Поиск</h2>
      <ModalSearchForm searchMain={searchMain} />
      <div className={style.findBlock}>
        <FindPerson namePerson="rfdtr rfdcx" role="actor" />
        <FindPerson namePerson="rfdtr rfdcx" role="actor" />
        <FindPerson namePerson="rfdtr rfdcx" role="actor" />
        <FindPerson namePerson="rfdtr rfdcx" role="actor" />
      </div>
    </div>
  );
};

export default ModalSearch;
