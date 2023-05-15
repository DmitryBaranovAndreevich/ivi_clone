import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonWithHoverBgc from '../buttonWithHoverBgc/ButtonWithHoverBgc';
import style from './BreadCrumbs.module.scss';

type TBreadCrumbsProps = {
  listParams: Array<Array<string>> | null;
  constantMean?: {
    title: string;
    href: string;
  };
};

const BreadCrumbs: React.FC<TBreadCrumbsProps> = ({ listParams, constantMean }) => {
  // console.log(location);
  const navigate = useNavigate();
  const listBlock = useMemo(() => {
    return listParams?.map((params: Array<string>, index: number) => {
      const paramsString = params.join(', ');
      if (paramsString) {
        return (
          <li key={index} className={`${style.item} ${style.item_extra}`}>
            {paramsString}
          </li>
        );
      }
    });
  }, [listParams]);
  return (
    <nav className={style.breadCrumbs}>
      <ul className={style.list}>
        <li className={style.item}>
          <ButtonWithHoverBgc
            title="Mой Film"
            addingClass={style.button}
            onClick={() => navigate('/movies')}
          />
        </li>
        {constantMean && (
          <li className={style.item}>
            <ButtonWithHoverBgc
              title={constantMean.title}
              addingClass={style.button}
              onClick={() => navigate(constantMean.href)}
            />
          </li>
        )}
        {listBlock}
      </ul>
    </nav>
  );
};
export default BreadCrumbs;
