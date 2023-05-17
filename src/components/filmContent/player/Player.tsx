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
        {/* <video
          id="video"
          className="video-root"
          crossOrigin="anonymous"
          data-test="video"
          preload="auto"
          src="https://www.youtube.com/embed/Jvurpf91omw"
        ></video> */}
        <div className={style.video}>
          <iframe className={style.iframe} src={trailer}></iframe>
        </div>
      </div>
      <PlayerAdding poster={poster} name={name} year={year} duration={duration} />
    </div>
  );
};

export default Player;
