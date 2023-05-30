import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonWithHoverBgc from '../buttonWithHoverBgc/ButtonWithHoverBgc';
import style from './BreadCrumbs.module.scss';
import { useTranslation } from 'react-i18next';
import { TName } from '../../../utils/helperFilmBreadCrumbs';

type TBreadCrumbsProps = {
  listParams: Array<Array<TName>> | null;
  constantMean?: {
    title: string;
    href: string;
  };
};

const BreadCrumbs: React.FC<TBreadCrumbsProps> = ({ listParams, constantMean }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const listBlock = useMemo(() => {
    return listParams?.map((params: Array<TName>, index: number) => {
      const paramsStringRu = params.map((param) => param.name).join(', ');
      const paramsStringEn = params.map((param) => param.enName).join(', ');
      if (paramsStringRu || paramsStringEn) {
        return (
          <li key={index} className={`${style.item} ${style.item_extra}`}>
            {i18n.language === 'ru' ? paramsStringRu : paramsStringEn}
          </li>
        );
      }
    });
  }, [listParams, i18n.language]);
  return (
    <nav className={style.breadCrumbs}>
      <ul className={style.list}>
        <li className={style.item}>
          <ButtonWithHoverBgc
            data-testid="BreadCrumbs_buttonMain"
            title={t('filter.crumbs')}
            addingClass={style.button}
            onClick={() => navigate('/')}
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
