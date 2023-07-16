import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroAdvogadoPage from './pages/CadastroAdvogadoPage';
import CadastroClientePage from './pages/CadastroClientePage';
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      
      <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastrarAdvogado" element={<CadastroAdvogadoPage />} />
        <Route path="/cadastrarCliente" element={<CadastroClientePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
