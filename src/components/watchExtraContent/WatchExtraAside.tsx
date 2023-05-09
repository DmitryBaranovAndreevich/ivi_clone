import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WatchNavigation from '../watchNavigation/WatchNavigation';
import WatchPerson from '../watchPerson/WatchPerson';
import style from './WatchExtraPage.module.scss';
import WatchExtraTitle from './WatchExtraPageTitle';

type TWatchExtraContentProps = {
  filmName: string;
  filmId: number;
  reviews: Array<string>;
  choosenPage: string;
};

const WatchExtraContent: React.FC<TWatchExtraContentProps> = ({
  filmName,
  filmId,
  reviews,
  choosenPage,
}) => {
  return (
    <div className={style.content}>
      <WatchExtraTitle filmName={filmName} />
      <WatchNavigation filmId={filmId} countReviews={reviews.length} choosenPage={choosenPage} />
      <WatchPerson filmId={filmId} />
      {/* <Routes>
        <Route path={`/person`} element={<WatchPerson filmId={filmId} />} />
        <Route path={`/watch/${filmId}/person`} element={<WatchPerson />} />
        <Route path={`/watch/${filmId}/person`} element={<WatchPerson />} />
      </Routes> */}
    </div>
  );
};

export default WatchExtraContent;
