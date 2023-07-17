import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setsenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("/login", {
        email,
        senha,
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "400px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Senha:</label>
            <input
              type="senha"
              value={senha}
              onChange={(e) => setsenha(e.target.value)}
              required
              style={{ width: "100%", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
            />
          </div>
          <button type="submit" style={{ width: "100%", padding: "5px 10px", background: "blue", color: "#fff", border: "none", borderRadius: "3px", cursor: "pointer" }}>Entrar</button>
        </form>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Não tem uma conta?{' '}
          <Link to="/cadastrarCliente" style={{ color: "blue" }}>Cadastrar como Cliente</Link> ou{' '}
          <Link to="/cadastrarAdvogado" style={{ color: "blue" }}>Cadastrar como Advogado</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
