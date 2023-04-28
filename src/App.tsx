import React from 'react';
import styles from './App.module.scss';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Main from './pages/main/Main';
import NotFoundPage from './pages/404/404';
import { useAppSelector } from './hooks/redux';
import Header from './components/header/Header';
import Movies from './pages/movies/Movies';
import Footer from './components/footer/Footer';
import LoginEmail from './pages/login/LoginEmail';
import LoginPassword from './pages/login/LoginPassword';
import LoginFinish from './pages/login/LoginFinish';

function App() {
  const {} = useAppSelector((state) => state);
  return (
    <div className={styles.container}>
      <Routes>
        <Route
          element={
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Main />}>
            <Route path="profile">
              <Route path="email" element={<LoginEmail />} />
              <Route path="password" element={<LoginPassword />} />
              <Route path="finish" element={<LoginFinish />} />
            </Route>
          </Route>
          <Route path="/movies/:genre?/:country?/:year?" element={<Movies />} />
        <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
