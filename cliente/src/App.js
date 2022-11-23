import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navegacion/Navbar";
import Footer from "./components/navegacion/Footer";
import RegistroAbonos from "./components/paginas/registroabonos";
import Home from "./components/paginas/home";
import Altaprofesores from './components/paginas/altaprofesores';
import AltaAfiliados from './components/paginas/altaAfiliados';
import AltaDisciplinas from './components/paginas/altaDisciplinas';
import Profesores from './components/paginas/profesores';
import ModiDisciplinas from './components/paginas/modiDisciplinas';
import ModiAfiliados from './components/paginas/modiAfiliados';
import Ubicacion from './components/paginas/ubicacion';
import VencimientoAbonos from './components/paginas/vencimientoAbonos';
import './components/css/disciplinas.css';


function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/registroAbonos" element={<RegistroAbonos />}/>
          <Route path="/altaprofesores" element={<Altaprofesores />}/>
          <Route path="/altaAfiliados" element={<AltaAfiliados />}/>
          <Route path="/altaDisciplinas" element={<AltaDisciplinas />}/>
          <Route path="/profesores" element={<Profesores />}/>
          <Route path="/modiDisciplinas" element={<ModiDisciplinas />}/>
          <Route path="/modiAfiliados" element={<ModiAfiliados />}/>
          <Route path="/ubicacion" element={<Ubicacion />}/>
          <Route path="/vencimientoAbonos" element={<VencimientoAbonos />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
