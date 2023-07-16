import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        email,
        password,
      });

      // Salvar o token de acesso no local storage ou em um estado global
      const token = response.data.accessToken;
      localStorage.setItem("accessToken", token);

      // Redirecionar para a página após o login bem-sucedido
      window.location.href = "/home";
    } catch (error) {
      setError("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta?{' '}
        <Link to="/cadastrarCliente">Cadastrar como Cliente</Link> ou{' '}
        <Link to="/cadastrarAdvogado">Cadastrar como Advogado</Link>
      </p>
    </div>
  );
};

export default LoginPage;
