import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './paginas/Home';
import Login from './paginas/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
