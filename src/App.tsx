import React from 'react';
import styles from './App.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './pages/main/Main';
import NotFoundPage from './pages/404/404';
import { useAppSelector } from './hooks/redux';

function App() {
  const {} = useAppSelector((state) => state);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
