import React, { ReactNode, useMemo, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import {
  TNavigationLaptop,
  TNavigationLaptopEnTitle,
  TNavigationLaptopTitle,
} from '../../../../type/type';
import style from './navigationMain.module.scss';
import NavigationMainItem from './NavigationMainItem';
import { useTranslation } from 'react-i18next';

const NavigationMain: React.FC = ({}) => {
  const { i18n } = useTranslation();
  const [selectItem, setSelectItem] = useState<
    TNavigationLaptopTitle | TNavigationLaptopEnTitle | null
  >(null);
  const { navigationTablet } = useAppSelector((state) => state.appReducer);
  const navBlock: Array<ReactNode> = useMemo(() => {
    return navigationTablet.map((el: TNavigationLaptop): ReactNode => {
      return (
        <NavigationMainItem
          key={el.title}
          href={el.href}
          title={i18n.language === 'ru' ? el.title : el.enTitle}
          logo={el.logo}
          selectItem={selectItem}
          setSelectItem={setSelectItem}
        />
      );
    });
  }, [navigationTablet, selectItem, i18n.language]);

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>{navBlock}</ul>
    </nav>
  );
};

export default NavigationMain;
