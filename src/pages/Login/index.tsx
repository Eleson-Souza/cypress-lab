import { useState } from "react";
import "./styles.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const validateForm = () => {
    if (!email || !pass) return false;

    return true;
  };

  const handleClearForm = () => {
    setEmail("");
    setPass("");
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      alert("Preencha todas as informações");
      return;
    }

    alert("Login realizado com sucesso! Bem-vindo(a)!");
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Faça Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <input
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              data-cy="email"
            />
            <input
              type="password"
              value={pass}
              placeholder="Senha"
              onChange={(e) => setPass(e.target.value)}
              data-cy="pass"
            />
          </div>

          <div className="btn-actions">
            <button onClick={handleClearForm} data-cy="btn-clear">
              Limpar
            </button>
            <button data-cy="btn-login">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
