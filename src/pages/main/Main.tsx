import CardFilm from '../../components/cardFilm/cardFilm';
import styles from './Main.module.scss';
import example from './../../assests/example.jpg';

const Main = () => {
  return (
    <div>
      <h2>MainPage</h2>
      <CardFilm
        image={example}
        name="qwertyqqqqqqqfrgjhkl;jhvghbjnkml,"
        year={2022}
        country="qwerty"
        genre="qwerty"
      />
    </div>
  );
};

export default Main;
