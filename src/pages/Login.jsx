import React from 'react';

const Login = () => (
  <div>
    <form action="">
      <label htmlFor="email">
        EMAIL
        <input
          id="email"
          type="text"
          data-testid="email-input"
          placeholder="Digite seu Email"
        />
      </label>
      <label htmlFor="password">
        SENHA
        <input
          id="password"
          type="text"
          data-testid="password-input"
          placeholder="Digite sua Senha"
        />
      </label>
      <button type="button" data-testid="login-submit-btn">Entrar</button>
    </form>
  </div>
);

export default Login;
