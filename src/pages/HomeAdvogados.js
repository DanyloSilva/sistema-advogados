import React from 'react';
import { Link } from "react-router-dom";

const HomeAdvogadoPage = () => {
  return (
    <div>
      <h1> Bem vindo Advogado Fulano</h1>
      <div>
        <Link to="/Reunioes">Minhas Reuniões</Link>
      </div>
    </div>
  );
};

export default HomeAdvogadoPage;