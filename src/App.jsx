import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TemaEstilizado from './TemaEstilizado';
import Login from './componentes/LoginForm';
import Biblioteca from './paginas/Biblioteca';
import Historia from './paginas/Historia';
import Registrar from './componentes/RegistrarForm';
import { auth } from './firebaseConfig'; // Import the auth instance

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Carregando...</div>; // Or a loading spinner
  }

  return (
    <TemaEstilizado>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route
            path="/biblioteca"
            element={user ? <Biblioteca /> : <Navigate to="/" />}
          />
          <Route
            path="/historia/:id"
            element={user ? <Historia /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </TemaEstilizado>
  );
}

export default App;