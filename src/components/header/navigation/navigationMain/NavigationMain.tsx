import React, { ReactNode, useMemo, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import useAppMediaQuery from '../../../../hooks/useAppMediaQuery';
import {
  TNavigationDesctop,
  TNavigationLaptop,
  TNavigationLaptopTitle,
} from '../../../../type/type';
import { TItemHovered } from '../../Header';
import style from './navigationMain.module.scss';
import NavigationMainItem from './NavigationMainItem';

type TNavigationMainProps = {
  setItemHovered: (isHover: TItemHovered) => void;
};

const NavigationMain: React.FC = ({}) => {
  const [selectItem, setSelectItem] = useState<TNavigationLaptopTitle | null>(null);
  const { navigationTablet } = useAppSelector((state) => state.appReducer);
  const navBlock: Array<ReactNode> = useMemo(() => {
    return navigationTablet.map((el: TNavigationLaptop): ReactNode => {
      return (
        <NavigationMainItem
          key={el.title}
          href={el.href}
          title={el.title}
          logo={el.logo}
          selectItem={selectItem}
          setSelectItem={setSelectItem}
        />
      );
    });
  }, [navigationTablet, selectItem]);

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>{navBlock}</ul>
    </nav>
  );
};

export default NavigationMain;
