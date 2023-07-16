import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const HomeClientePage = () => {
  const [advogados, setAdvogados] = useState([]);
  const [busca, setBusca] = useState("");
  const [erroAdvogados, setErroAdvogados] = useState("");
  const [reunioes, setReunioes] = useState([]);
  const [erroReunioes, setErroReunioes] = useState("");

  useEffect(() => {
    fetchAdvogados();
    fetchReunioes();
  }, []);

  const fetchAdvogados = async () => {
    try {
      const response = await api.get("/advogados");
      setAdvogados(response.data.slice(0, 10));
    } catch (error) {
      setErroAdvogados("Ocorreu um erro ao buscar os advogados.");
    }
  };

  const fetchReunioes = async () => {
    try {
      const response = await api.get("/reunioes");
      setReunioes(response.data);
    } catch (error) {
      setErroReunioes("Ocorreu um erro ao buscar as reuniões.");
    }
  };

  const handleBuscar = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/advogados?search=${busca}`);
      setAdvogados(response.data.slice(0, 10));
      setErroAdvogados(""); // Limpar o erro em caso de sucesso na busca
    } catch (error) {
      setAdvogados([]); // Limpar a lista de advogados em caso de erro na busca
      setErroAdvogados("Ocorreu um erro ao buscar os advogados.");
    }
  };

  return (
    <div>
        <h1>Bem vindo Cliente Fulano!</h1>
      <h2>Lista de Advogados</h2>
      {erroAdvogados && <p>{erroAdvogados}</p>}
      <form onSubmit={handleBuscar}>
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar advogado..."
        />
        <button type="submit">Buscar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Especialidade</th>
          </tr>
        </thead>
        <tbody>
          {advogados.map((advogado) => (
            <tr key={advogado.id}>
              <td>{advogado.nome}</td>
              <td>{advogado.especialidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Link to="/Reunioes">Minhas Reuniões</Link>
      </div>
      <div>
        <Link to="/CadastroReuniao">Cadastrar Reunião</Link>
      </div>
    </div>
  );
};

export default HomeClientePage;
