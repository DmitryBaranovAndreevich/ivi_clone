import './IndexPage.module.css';
import {useState, useEffect } from 'react';
import Card from '../../component/Card/Card';


function IndexPage () {
    const [products, setProducts] = useState ([]);

    useEffect (() => {
        fetch('http://fakestoreapi.com/products').then((response) => response.json()).then((result) => {
        setProducts(result);
        })
    }, [] );

    return (
        // <div className={styles.Button1}>
        //     <Button text="Смотреть 30 дней за 1₽" />
        // </div>
        // <Button2 theme='light' text='Кууу' />
        // <Button3 variant='outlined' className={styles.CommonButton3}/>
        // <Input />
        <div className={styles.App1}>
            {
                products.map((item, index) => {
                return <Card key={index} 
                            img={item.image}
                            title={item.title}
                            translation={item.translation}
                            description={item.description}
                            filmtitle={item.filmtitle}
                            filmcarousel={item.filmcarousel}/>
                })
            }
        </div>
    )
}

export default IndexPage;