import React, { ReactNode, useMemo } from 'react';
import { TNavigation } from '../../../type/type';
import style from './navigation.module.scss';
import { TNavigationProps } from './NavigationContainer';
import NavigationItem from './NavigationItem';

const Navigation: React.FC<TNavigationProps> = ({ navDesktop, navLaptop, setItemHovered }) => {
  const navBlock: Array<ReactNode> = useMemo(() => {
    return navDesktop.map((el: TNavigation): ReactNode => {
      return (
        <NavigationItem
          key={el.title}
          href={el.href}
          title={el.title}
          isExpand={el.isExpand}
          setItemHovered={setItemHovered}
        />
      );
    });
  }, [navDesktop, setItemHovered]);

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>{navBlock}</ul>
    </nav>
  );
};

export default Navigation;
