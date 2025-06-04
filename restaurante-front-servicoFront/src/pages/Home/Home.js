import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
// Importe seu logo aqui se desejar
// import logoRestaurante from '../../assets/logo-restaurante.png'; // Exemplo

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* <img src={logoRestaurante} alt="Logo do Restaurante" className={styles.logo} /> */}
      <div className={styles.logoPlaceholder}>🍴</div> {/* Placeholder para logo */}
      <h1 className={styles.title}>Bem-vindo ao RestManager!</h1>
      <p className={styles.subtitle}>Gerencie seu cardápio de forma fácil e visual.</p>
      <div className={styles.actions}>
        <Link to="/cardapio" className={`${styles.actionButton} ${styles.primary}`}>
          Ver Cardápio
        </Link>
        <Link to="/cadastro" className={`${styles.actionButton} ${styles.secondary}`}>
          Cadastrar Novo Prato
        </Link>
      </div>
    </div>
  );
};

export default Home;