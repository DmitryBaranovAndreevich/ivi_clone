import React, { ReactElement, ReactNode } from 'react';
import style from './navigation.module.scss';
import NavigationItem from './NavigationItem';

type TNavEl = {
  href: string;
  title: string;
  isExpand: boolean;
};

type TNav = Array<TNavEl>;

const nav: TNav = [
  {
    href: '#',
    title: 'Мой Иви',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Что нового',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Фильмы',
    isExpand: true,
  },
  {
    href: '#',
    title: 'Сериалы',
    isExpand: true,
  },
  {
    href: '#',
    title: 'Мультфильмы',
    isExpand: true,
  },
];

export type TNavigationProps = {
  setItemHovered: (isHover: string | null) => void;
};

const Navigation: React.FC<TNavigationProps> = ({ setItemHovered }) => {
  const navBlock: Array<ReactNode> = nav.map((el: TNavEl): ReactNode => {
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

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>{navBlock}</ul>
    </nav>
  );
};

export default Navigation;

// return <NavigationItem key={el.title} href={el.href} title={el.title} />
