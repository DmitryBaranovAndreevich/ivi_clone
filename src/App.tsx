import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import NotFoundPage from './pages/404/404';
import { useAppSelector } from './hooks/redux';
import Header from './components/header/Header';
import Movies from './pages/movies/Movies';
import Footer from './components/footer/Footer';

function App() {
  const {} = useAppSelector((state) => state);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies/:first?/:second?/:third?" element={<Movies />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
