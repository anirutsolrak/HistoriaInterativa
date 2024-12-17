import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemaEstilizado from './TemaEstilizado';
import Login from './componentes/LoginForm';
import Biblioteca from './paginas/Biblioteca';
import Historia from './paginas/Historia';
import Registrar from './componentes/RegistrarForm';

function App() {
  return (
    <TemaEstilizado>
      {' '}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/historia/:id" element={<Historia />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
      </Router>
    </TemaEstilizado>
  );
}

export default App;
