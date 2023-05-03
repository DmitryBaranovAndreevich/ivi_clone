import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './pages/main/Main';
import NotFoundPage from './pages/404/404';
import { useAppSelector } from './hooks/redux';
import Button from './component/Button/Button';
import Input from './component/Input/Input';
import Card from './component/Card/Card';
import Button2 from './component/Button2/Button2';
import Button3 from '@mui/material/Button';

import IndexPage from './pages/IndexPage/IndexPage';


function App() {
  // const {} = useAppSelector((state) => state);
// const [products, setProducts] = useState ([]);

//   useEffect (() => {
//       fetch('http://fakestoreapi.com/products').then((response) => response.json()).then((result) => {
//         setProducts(result);
//       })
//   }, [] );
  
  return (
    <Routes>
      <Route index path={'/'} element={<IndexPage />}></Route>
    </Routes>
  );
}

export default App;
