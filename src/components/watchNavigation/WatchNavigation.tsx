import React, { useMemo } from 'react';
import style from './WatchNavigation.module.scss';
import WatchNavigationItem from './WatchNavigationItem';

type TWatchNavigationProps = {
  filmId: number;
  countReviews: number;
  choosenPage: string;
};

const WatchNavigation: React.FC<TWatchNavigationProps> = ({
  filmId,
  countReviews,
  choosenPage,
}) => {
  const navigationBlock = useMemo(() => {
    const navigationItems = [
      {
        title: 'Создатели',
        linkAdd: `persons`,
        count: null,
      },
      {
        title: 'Отзывы',
        linkAdd: `reviews`,
        count: countReviews,
      },
      {
        title: 'Трейлер',
        linkAdd: `trailers`,
        count: null,
      },
    ];
    return navigationItems.map((item) => {
      return (
        <WatchNavigationItem
          key={item.title}
          href={item.linkAdd}
          title={item.title}
          count={item.count}
          filmId={filmId}
          activeLink={choosenPage}
        />
      );
    });
  }, [filmId, countReviews, choosenPage]);
  return <ul className={style.list}>{navigationBlock}</ul>;
};

export default WatchNavigation;
