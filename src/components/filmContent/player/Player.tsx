import React from 'react';
import style from './Player.module.scss';
import PlayerAdding from './PlayerAdding';

type TPlayerProps = {
  poster: string;
  name: string;
  trailer: string;
  year: number;
  duration: number;
};

const Player: React.FC<TPlayerProps> = ({ poster, name, trailer, year, duration }) => {
  return (
    <div className={style.player}>
      <div className={style.playerBlock}>
        <div className={style.video}>
          <iframe className={style.iframe} src={trailer}></iframe>
        </div>
      </div>
      <PlayerAdding poster={poster} name={name} year={year} duration={duration} trailer={trailer} />
    </div>
  );
};

export default Player;
