import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './paginas/Home';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
