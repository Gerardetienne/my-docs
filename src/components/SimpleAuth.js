// src/components/SimpleAuth.js
import React, { useState } from 'react';
import styles from './SimpleAuth.module.css';

const fidirana = "gerard";
const tenyMiafina = "Rol03613";

export default function SimpleAuth({ children }) {
  const [authed, setAuthed] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (login === fidirana && password === tenyMiafina) {
      setAuthed(true);
      setError("");
    } else {
      setError("Identifiants incorrects.");
    }
  }

  if (authed) return children;

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>🔒 Accès protégé</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="login">Login</label>
          <input
            id="login"
            className={styles.input}
            value={login}
            onChange={e => setLogin(e.target.value)}
            autoFocus
            placeholder="Votre identifiant"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">Mot de passe</label>
          <input
            id="password"
            className={styles.input}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Votre mot de passe"
          />
        </div>
        <button className={styles.button} type="submit">Se connecter</button>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
}