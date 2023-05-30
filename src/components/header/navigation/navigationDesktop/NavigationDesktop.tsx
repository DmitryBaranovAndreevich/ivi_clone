import React, { ReactNode, useMemo } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import { TNavigationDesctop } from '../../../../type/type';
import { TItemHovered } from '../../Header';
import style from './navigationDesktop.module.scss';
import NavigationDesktopItem from './NavigationDesktopItem';
import { useTranslation } from 'react-i18next';

type TNavigationDesktopProps = {
  setItemHovered: (isHover: TItemHovered) => void;
};

const NavigationDesktop: React.FC<TNavigationDesktopProps> = ({ setItemHovered }) => {
  const { i18n } = useTranslation();
  const { navigationDesktop } = useAppSelector((state) => state.appReducer);
  const navBlock: Array<ReactNode> = useMemo(() => {
    return navigationDesktop.map((el: TNavigationDesctop): ReactNode => {
      return (
        <NavigationDesktopItem
          key={el.title}
          href={el.href}
          titleForHovered={el.title}
          title={i18n.language === 'ru' ? el.title : el.enTitle}
          isExpand={el.isExpand}
          setItemHovered={setItemHovered}
        />
      );
    });
  }, [navigationDesktop, setItemHovered, i18n.language]);

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>{navBlock}</ul>
    </nav>
  );
};

export default NavigationDesktop;
