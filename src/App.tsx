import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home.tsx';
import { NotFound } from './pages/notFound/NotFound.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
