import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroAdvogadoPage from './pages/CadastroAdvogadoPage';
import CadastroClientePage from './pages/CadastroClientePage';
import LoginPage from "./pages/LoginPage";
import HomeAdvogado from "./pages/HomeAdvogados";
import HomeCliente from "./pages/HomeCliente";
import Reunioes from "./pages/ReunioesPage";
import CadastraReuniao from "./pages/CadastroReuniaoPage";





function App() {
  return (
    <BrowserRouter>
      <Routes>
      
      <Route path="/login" element={<LoginPage />} />
      
      <Route path="/homeAdvogado" element={<HomeAdvogado />} />
      <Route path="/homeCliente" element={<HomeCliente />} />
      
      <Route path="/Reunioes" element={<Reunioes/>} /> 
      <Route path="/CadastroReuniao" element={<CadastraReuniao />} />

        <Route path="/cadastrarAdvogado" element={<CadastroAdvogadoPage />} />
        <Route path="/cadastrarCliente" element={<CadastroClientePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
