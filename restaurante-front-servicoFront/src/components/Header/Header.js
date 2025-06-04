import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
// Poderia adicionar um SVG ou um ícone simples para o logo
// import { ReactComponent as LogoIcon } from './logo.svg'; // Exemplo

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          {/* <LogoIcon className={styles.logoIcon} /> Substitua por seu logo */}
          🍴 RestManager
        </Link>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
            end
          >
            Início
          </NavLink>
          <NavLink
            to="/cardapio"
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            Cardápio
          </NavLink>
          <NavLink
            to="/cadastro"
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            Cadastrar Prato
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;