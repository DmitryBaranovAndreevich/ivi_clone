import React, { useState } from 'react';
import style from './FilterSelect.module.scss';

type TFilterPlankProps = {
  title: string;
};

const FilterPlank: React.FC<TFilterPlankProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={style.plank + ' ' + (isOpen && style.plank_active)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={style.button}>
        <p className={style.button_text}>{title}</p>
        <div className={style.button_icon}></div>
      </div>
      {/* {isOpen && ()} */}
    </div>
  );
};

export default FilterPlank;
