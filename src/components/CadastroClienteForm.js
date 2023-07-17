import React, { useState } from "react";
import api from "../api";

const CadastroClienteForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [senha, setSenha] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validação do CPF
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      setErrorMessage("CPF inválido. Deve seguir o padrão XXX.XXX.XXX-XX.");
      setSuccessMessage("");
      return;
    }

    try {
      const endereco = {
        logradouro,
        bairro,
        cep,
        cidade,
        uf,
        numero,
        complemento,
      };

      const cliente = {
        nome,
        email,
        cpf,
        telefone,
        endereco,
        senha,
      };

      const response = await api.post("/clientes", cliente);
      console.log(response.data); // Exemplo: exibir a resposta da API

      // Limpar os campos do formulário após o envio
      setNome("");
      setEmail("");
      setCpf("");
      setTelefone("");
      setLogradouro("");
      setBairro("");
      setCep("");
      setCidade("");
      setUf("");
      setNumero("");
      setComplemento("");
      setSenha("");

      // Definir a mensagem de sucesso
      setSuccessMessage("Cliente cadastrado com sucesso");
      setErrorMessage("");
    } catch (error) {
      console.error(error);

      // Definir a mensagem de erro
      setErrorMessage("Erro ao cadastrar o Cliente");
      setSuccessMessage("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="logradouro">Logradouro:</label>
          <input
            type="text"
            id="logradouro"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="uf">UF:</label>
          <input
            type="text"
            id="uf"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            id="numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="complemento">Complemento:</label>
          <input
            type="text"
            id="complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
          {cpf.length > 0 && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf) && (
            <p style={{ color: "red" }}>
              CPF inválido. Deve seguir o padrão XXX.XXX.XXX-XX.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {successMessage && (
          <p style={{ color: "green", textAlign: "center" }}>
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "5px 10px",
            background: "blue",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroClienteForm;
