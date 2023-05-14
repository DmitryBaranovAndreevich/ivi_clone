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
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import Watch from './pages/watch/Watch';
import AuthPassword from './pages/auth/AuthPassword';
import AuthEmail from './pages/auth/AuthEmail';
import AuthFinish from './pages/auth/AuthFinish';

function App() {
  const { isRegister } = useAppSelector((state) => state.userLoginReduser);
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
            <Route path="auth" element={<ProtectedRoute user={isRegister} />}>
              <Route path="email" element={<AuthEmail />} />
              <Route path="password" element={<AuthPassword />} />
              <Route path="finish" element={<AuthFinish />} />
            </Route>
          </Route>
          <Route path="/" element={<Main />}>
            <Route path="profile" element={<ProtectedRoute user={isRegister} />}>
              <Route path="email" element={<LoginEmail />} />
              <Route path="password" element={<LoginPassword />} />
              <Route path="finish" element={<LoginFinish />} />
            </Route>
          </Route>
          <Route path="/movies/:first?/:second?/:third?" element={<Movies />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
