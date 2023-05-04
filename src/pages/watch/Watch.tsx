import React from 'react';
import FilmContent from '../../components/filmContent/FilmContent';
import styles from './Watch.module.scss';

const Watch = () => {
  return (
    <div className={styles.container}>
      <FilmContent />
    </div>
  );
};

export default Watch;
