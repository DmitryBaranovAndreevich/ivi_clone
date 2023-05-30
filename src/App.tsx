import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { Routes, Route, Outlet } from 'react-router-dom';
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
import WatchExtra from './pages/watchExtra/WatchExtra';
import AuthPassword from './pages/auth/AuthPassword';
import AuthEmail from './pages/auth/AuthEmail';
import AuthFinish from './pages/auth/AuthFinish';
import Actor from './pages/actor/Actor';
import AdminFilms from './pages/admin/adminFilms/AdminFilms';
import AdminGenres from './pages/admin/adminGenres/AdminGenres';
import AdminFilmForm from './components/admin/adminFilmForm/AdminFilmEdit';
import AdminFilmsAdd from './pages/admin/adminFilmsAdd/AdminFilmsAdd';
import AdminGenresAdd from './pages/admin/adminGenresAdd/AdminGenresAdd';
import Admin from './pages/admin/Admin';
import { useDispatch } from 'react-redux';
import { userAuthSlice } from './store/reducers/UserAuthSlice';
import { useAuthMeQuery } from './store/api/authApi';
import { userLoginSlice } from './store/reducers/UserLoginSlice';

function App() {
  const { data: user } = useAuthMeQuery('');
  const dispatch = useDispatch();
  const { setEmailNameSurName, setPassAgeContryPhone } = userAuthSlice.actions;
  const { successAuth, setRoles } = userLoginSlice.actions;

  useEffect(() => {
    if (user) {
      dispatch(setEmailNameSurName(user));
      dispatch(setPassAgeContryPhone(user));
      dispatch(successAuth({ token: user.refreshToken }));
      dispatch(setRoles({ roles: user.roles }));
    }
  }, [user, dispatch, setEmailNameSurName, setPassAgeContryPhone, successAuth, setRoles]);
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
          <Route
            path="/admin"
            element={<ProtectedRoute user={!isRegister} redirectPath={'/profile/email'} />}
          >
            <Route path="" element={<Admin />}></Route>
            <Route path="films" element={<AdminFilms />}></Route>
            <Route path="films/edit/:id" element={<AdminFilmForm />} />
            <Route path="films/add/:method?" element={<AdminFilmsAdd />} />
            <Route path="genres" element={<AdminGenres />} />
            <Route path="genres/add" element={<AdminGenresAdd />} />
          </Route>
          <Route path="/movies/:first?/:second?/:third?" element={<Movies />} />
          <Route path="/watch/:id/" element={<Watch />} />
          <Route path="/watch/:id/:page?" element={<WatchExtra />} />
          <Route path="/person/:id" element={<Actor />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
