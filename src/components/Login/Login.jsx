import { useId, useState } from 'react';
import css from './Login.module.css';

export const Login = ({ onFormSubmit }) => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const loginId = useId();
  const pswId = useId();

  const handleSubmit = evt => {
    evt.preventDefault();
    onFormSubmit({
      login,
      password,
    });
    setLogin('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={loginId}>
        Login
      </label>
      <input
        className={css.input}
        type="text"
        id={loginId}
        name="login"
        value={login}
        onChange={evt => setLogin(evt.target.value)}
        autoComplete="off"
      />
      <label className={css.label} htmlFor={pswId}>
        Password
      </label>
      <input
        className={css.input}
        type="password"
        id={pswId}
        name="password"
        value={password}
        onChange={evt => setPassword(evt.target.value)}
        autoComplete="off"
      />
      <button className={css.btn} type="submit">
        Submit
      </button>
    </form>
  );
};
