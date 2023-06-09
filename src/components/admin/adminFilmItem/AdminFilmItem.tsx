import React from 'react';
import style from './AdminFilmItem.module.scss';
import logoDelete from './../../../assests/svg/logoDelete.svg';
import GreyButton from '../../UI/greyButton/GreyButton';
import ButtonWithHoverBgc from '../../UI/buttonWithHoverBgc/ButtonWithHoverBgc';
import { useDeleteFilmMutation } from '../../../store/api/adminApi';
import { useNavigate } from 'react-router-dom';

type TAdminFilmItemType = {
  filmId: number;
  filmPoster: string;
  filmName: string;
  filmOriginalName: string;
  refetch: () => void;
};

const AdminFilmItem: React.FC<TAdminFilmItemType> = ({
  filmId,
  filmPoster,
  filmName,
  filmOriginalName,
  refetch,
}) => {
  const navigate = useNavigate();
  const [deleteFilm, {}] = useDeleteFilmMutation();
  const onclickDelete = async () => {
    await deleteFilm({ id: String(filmId) });
    refetch();
  };
  return (
    <div className={style.film}>
      <div className={style.imageBlock}>
        <img className={style.imageBlock_img} src={filmPoster} alt={filmName} />
      </div>
      <h5 className={style.title}>{filmName}</h5>
      <h5 className={style.title}>{filmOriginalName}</h5>
      <ButtonWithHoverBgc
        title="Edit"
        addingClass={style.edit}
        onClick={() => navigate(`/admin/films/edit/${filmId}`)}
      />
      <GreyButton addingClass={style.delete} onClick={onclickDelete}>
        <img className={style.delete_logo} src={logoDelete} alt="delete" />
      </GreyButton>
    </div>
  );
};

export default AdminFilmItem;
