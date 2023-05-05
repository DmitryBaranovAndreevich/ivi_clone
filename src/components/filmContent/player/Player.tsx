import React from 'react';
import style from './Player.module.scss';
import PlayerAdding from './PlayerAdding';

type TPlayerProps = {
  poster: string;
  trailer: string;
};

const Player: React.FC<TPlayerProps> = ({ poster, trailer }) => {
  return (
    <div className={style.player}>
      <div className={style.playerBlock}>
        <div className={style.video}>{trailer}</div>
      </div>
      <PlayerAdding />
    </div>
  );
};

export default Player;
