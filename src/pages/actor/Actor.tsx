import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/UI/spinner/Spinner';
import { personApi } from '../../store/api/personApi';
import styles from './actor.module.scss';
import Line from '../../components/login/Line/Line';
import Movie from '../../components/UI/Movie/Movie';

const Actor = () => {
  const { id } = useParams();
  const { data, isLoading } = personApi.useGetOnePersonQuery({ id });
  const navigate = useNavigate();
  return isLoading ? (
    <div className={styles.spinner}>
      <Spinner size={'big'} />
    </div>
  ) : (
    <div className={styles.wrapper}>
      <Link to={''} onClick={() => navigate(-1)} className={styles.reverse}>
        Назад
      </Link>
      <div className={styles.container}>
        <img src={data?.photo} alt="actor foto" className={styles.foto} />
        <h1 className={styles.rusName}>{data?.name}</h1>
        <h3 className={styles.engName}>{data?.originalName}</h3>
        <p className={styles.title}>
          Полная фильмография <span className={styles.span}>4 фильма</span>
        </p>
        <div>
          <p className={styles.smallTitle}>Актер</p>
          <Line persent={'0'} />
        </div>
        {data?.films.map((movie) => (
          <Movie data={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Actor;
