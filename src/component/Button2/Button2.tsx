import styles from './Button2.module.css';

function Button2(props, {theme='dark'}) {

    let button = <button className={styles.CommonButton}>{ props.text }</button>
    if (theme==='light') {
        button = <button className={styles.CommonButtonLight}>{ props.text }</button>
    } 


    return(
        button
    )
}

export default Button2;