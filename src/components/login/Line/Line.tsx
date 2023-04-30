import { FC } from 'react';
import styles from './line.module.scss';

interface ILine {
  persent: string;
}

const Line: FC<ILine> = ({ persent }) => {
  const style = { '--size': persent } as React.CSSProperties;
  return <div className={styles.line} style={style}></div>;
};

export default Line;
