import React from 'react';
import { IReviews } from '../../type/TReviews';
import WatchNavigation from '../watchNavigation/WatchNavigation';
import WatchPerson from '../watchPerson/WatchPerson';
import WatchReviews from '../watchReviews/WatchReviews';
import WatchTrailer from '../watchTrailer/WatchTrailer';
import style from './WatchExtraContent.module.scss';
import WatchExtraTitle from './WatchExtraPageTitle';

type TWatchExtraContentProps = {
  filmName: string;
  filmId: number;
  filmPoster: string;
  filmTrailer: string;
  reviews: Array<IReviews>;
  choosenPage: string;
};

const WatchExtraContent: React.FC<TWatchExtraContentProps> = ({
  filmName,
  filmId,
  filmPoster,
  filmTrailer,
  reviews,
  choosenPage,
}) => {
  return (
    <div className={style.content}>
      <WatchExtraTitle filmName={filmName} />
      <WatchNavigation filmId={filmId} countReviews={reviews.length} choosenPage={choosenPage} />
      {choosenPage === 'persons' && <WatchPerson filmId={filmId} />}
      {choosenPage === 'reviews' && <WatchReviews filmId={filmId} reviews={reviews} />}
      {choosenPage === 'trailers' && (
        <WatchTrailer filmId={filmId} filmPoster={filmPoster} filmTrailer={filmTrailer} />
      )}
    </div>
  );
};

export default WatchExtraContent;
