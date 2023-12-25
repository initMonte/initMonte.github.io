import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;