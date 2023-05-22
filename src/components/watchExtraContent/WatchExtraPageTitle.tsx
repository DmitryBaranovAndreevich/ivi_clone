import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './WatchExtraContent.module.scss';

type TWatchExtraTitleProps = {
  filmName: string;
};

const WatchExtraTitle: React.FC<TWatchExtraTitleProps> = ({ filmName }) => {
  const params = useParams();
  const [titleString, setTitleString] = useState(filmName);
  useEffect(() => {
    switch (params.page) {
      case 'person':
        setTitleString(`Создатели и актеры фильма ${filmName}`);
        break;
      case 'reviews':
        setTitleString(`Отзывы на фильм ${filmName}`);
        break;
      case 'trailers':
        setTitleString(`Трейлеры к фильму ${filmName} смотреть онлайн`);
        break;
      default:
        setTitleString(titleString);
    }
  }, [params, titleString, filmName]);
  return (
    <div className={style.titleBlock}>
      <h2 className={style.title}>{titleString}</h2>
    </div>
  );
};

export default WatchExtraTitle;
