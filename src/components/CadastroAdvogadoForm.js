import React, { useState } from "react";
import api from "../api";

const CadastroAdvogadoForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [oab, setOab] = useState("");
  const [especialidade, setEspecialidade] = useState("");
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

  const especialidades = ["TRABALHISTA", "EMPRESARIAL", "FAMILIAR", "CRIMINALISTA"];

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validação da OAB
    if (!/^([A-Za-z]{2}\d{6})$/.test(oab)) {
      setErrorMessage("OAB inválida. Deve seguir o padrão de duas letras seguidas de seis dígitos.");
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

      const advogado = {
        nome,
        email,
        oab,
        especialidade,
        telefone,
        endereco,
        senha,
      };

      const response = await api.post("/advogados", advogado);
      console.log(response.data); // Exemplo: exibir a resposta da API

      // Limpar os campos do formulário após o envio
      setNome("");
      setEmail("");
      setOab("");
      setEspecialidade("");
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
      setSuccessMessage("Advogado cadastrado com sucesso");
      setErrorMessage("");
    } catch (error) {
      console.error(error);

      // Definir a mensagem de erro
      setErrorMessage("Erro ao cadastrar o advogado");
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
          <label htmlFor="oab">OAB:</label>
          <input
            type="text"
            id="oab"
            value={oab}
            onChange={(e) => setOab(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
          {oab.length > 0 && !/^([A-Za-z]{2}\d{6})$/.test(oab) && (
            <p style={{ color: "red" }}>
              OAB inválida. Deve seguir o padrão de duas letras seguidas de seis dígitos.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="especialidade">Especialidade:</label>
          <select
            id="especialidade"
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Selecione a especialidade</option>
            {especialidades.map((opcao) => (
              <option key={opcao} value={opcao}>
                {opcao}
              </option>
            ))}
          </select>
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
          <p style={{ color: "green", textAlign: "center" }}>{successMessage}</p>
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
          Cadastrar Advogado
        </button>
      </form>
    </div>
  );
};

export default CadastroAdvogadoForm;
