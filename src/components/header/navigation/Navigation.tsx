import React, { ReactNode, useMemo } from 'react';
import { TNavigationDesctop } from '../../../type/type';
import style from './navigation.module.scss';
import { TNavigationProps } from './NavigationContainer';
import NavigationItem from './NavigationItem';
import { useTranslation } from 'react-i18next';

const Navigation: React.FC<TNavigationProps> = ({ navDesktop, navLaptop, setItemHovered }) => {
  const { i18n } = useTranslation();
  const navBlock: Array<ReactNode> = useMemo(() => {
    return navDesktop.map((el: TNavigationDesctop): ReactNode => {
      return (
        <NavigationItem
          key={el.title}
          href={el.href}
          title={i18n.language === 'ru' ? el.title : el.enTitle}
          isExpand={el.isExpand}
          setItemHovered={setItemHovered}
        />
      );
    });
  }, [navDesktop, setItemHovered, i18n.language]);

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>{navBlock}</ul>
    </nav>
  );
};

export default Navigation;
