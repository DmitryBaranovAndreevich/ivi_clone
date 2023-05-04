import React from 'react';
import style from './Player.module.scss';
import PlayerAdding from './PlayerAdding';

type TPlayerProps = {
  poster: string;
};

const Player: React.FC<TPlayerProps> = ({ poster }) => {
  return (
    <div className={style.player}>
      <div className={style.playerBlock}>
        <div className={style.video}></div>
      </div>
      <PlayerAdding />
    </div>
  );
};

export default Player;
