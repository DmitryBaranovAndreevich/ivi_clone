import Slider from '../../components/mainSlider/MainSlider';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.container}>
      <h2>MainPage</h2>
      <Slider />
    </div>
  );
};

export default Main;
