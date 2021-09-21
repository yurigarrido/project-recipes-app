import React, { useState, useEffect } from 'react';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    const validateEmail = () => {
      // source regex https://pt.stackoverflow.com/a/276022
      const isValid = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(login);
      if (!isValid || login === '') {
        return false;
      }
      return true;
    };
    const six = 6;
    if ((validateEmail()) && (password.length > six)) {
      return setEnable(true);
    }
    return setEnable(false);
  }, [password, login]);

  return (
    <div>
      <form action="">
        <label htmlFor="email">
          EMAIL
          <input
            id="email"
            type="text"
            data-testid="email-input"
            placeholder="Digite seu Email"
            onChange={ ({ target }) => setLogin(target.value) }
          />
        </label>
        <label htmlFor="password">
          SENHA
          <input
            id="password"
            type="text"
            data-testid="password-input"
            placeholder="Digite sua Senha"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !enable }
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
