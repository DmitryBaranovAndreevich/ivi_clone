import styles from './Card.module.css';

function Card(props) {
    return  (
        <div className={styles.AppCard}>
            <img className={styles.AppCardImg} src={props.img}/>
            <h1 className={styles.AppCardTitle}>{props.title}</h1>
            <h1 className={styles.AppCardTranslation}>{props.translation}</h1>
            <p className={styles.AppCardDescription}>{props.description}</p>
            <div className={styles.AppCardFilmsContainer}>
                <h2 className={styles.AppCardFilmsTitle}>{props.filmtitle}</h2>
                <div className={styles.AppCardFilmsCarousel}>{props.filmcarousel}</div>
            </div>
        </div>
    )
}

export default Card;