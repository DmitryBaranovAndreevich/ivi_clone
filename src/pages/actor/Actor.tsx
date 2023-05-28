import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/UI/spinner/Spinner';
import { personApi } from '../../store/api/personApi';
import styles from './actor.module.scss';
import Line from '../../components/login/Line/Line';
import Movie from '../../components/UI/Movie/Movie';
import { useTranslation } from 'react-i18next';
import LinkBack from '../../components/UI/linkStepBack/LinkBack';

const Actor = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = personApi.useGetOnePersonQuery({ id });
  const navigate = useNavigate();
  return isLoading ? (
    <div className={styles.spinner}>
      <Spinner size={'big'} />
    </div>
  ) : (
    <div className={styles.wrapper}>
      <LinkBack href={`#`} onClick={() => navigate(-1)} text={t('actor.commBack')} />
      <div className={styles.container}>
        <img src={data?.photo} alt="actor foto" className={styles.foto} />
        <h1 className={styles.rusName}>{data?.name}</h1>
        <h3 className={styles.engName}>{data?.originalName}</h3>
        <p className={styles.title}>
          {t('actor.films')}
          <span className={styles.span}>
            {t('actor.quantity')}
            {data?.films.length}
          </span>
        </p>
        <div>
          <p className={styles.smallTitle}>{t('actor.actor')}</p>
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
