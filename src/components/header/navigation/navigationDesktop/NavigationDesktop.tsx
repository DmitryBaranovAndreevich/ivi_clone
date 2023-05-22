import React, { ReactNode, useMemo } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import useAppMediaQuery from '../../../../hooks/useAppMediaQuery';
import { TNavigationDesctop } from '../../../../type/type';
import { TItemHovered } from '../../Header';
import style from './navigationDesktop.module.scss';
import NavigationDesktopItem from './NavigationDesktopItem';

type TNavigationDesktopProps = {
  setItemHovered: (isHover: TItemHovered) => void;
};

const NavigationDesktop: React.FC<TNavigationDesktopProps> = ({ setItemHovered }) => {
  const { navigationDesktop, navigationTablet } = useAppSelector((state) => state.appReducer);
  const navBlock: Array<ReactNode> = useMemo(() => {
    return navigationDesktop.map((el: TNavigationDesctop): ReactNode => {
      return (
        <NavigationDesktopItem
          key={el.title}
          href={el.href}
          title={el.title}
          isExpand={el.isExpand}
          setItemHovered={setItemHovered}
        />
      );
    });
  }, [navigationDesktop, setItemHovered]);

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>{navBlock}</ul>
    </nav>
  );
};

export default NavigationDesktop;
