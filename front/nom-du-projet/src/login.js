import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // URL de l'API Strapi
  const API_URL = 'http://localhost:1337/api/auth/local';

  // Gestion de la soumission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    try {
      // Appel à l'API Strapi
      const response = await axios.post(API_URL, {
        identifier: email,
        password: password,
      });

      // Récupération du token et informations utilisateur
      const { jwt, user } = response.data;

      setSuccess(`Bienvenue ${user.username} !`);
      console.log('Token JWT:', jwt);

      // Vous pouvez stocker le token dans le localStorage ou dans un gestionnaire d'état global
      localStorage.setItem('jwt', jwt);

    } catch (err) {
      // Gestion des erreurs
      console.error(err);
      setError('Échec de la connexion. Vérifiez vos informations.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Entrez votre email"
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Entrez votre mot de passe"
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        <button type="submit" style={styles.button}>
          Se connecter
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: { /* idem que précédemment */ },
  form: { /* idem que précédemment */ },
  inputGroup: { /* idem que précédemment */ },
  input: { /* idem que précédemment */ },
  button: { /* idem que précédemment */ },
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
  success: {
    color: 'green',
    fontSize: '14px',
    marginBottom: '10px',
  },
};

export default Login;
