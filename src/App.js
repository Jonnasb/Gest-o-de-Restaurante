import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CadastroPrato from './pages/CadastroPrato/CadastroPrato';
import Cardapio from './pages/Cardapio/Cardapio';
import Header from './components/Header/Header';
import styles from './App.module.css'; // Opcional, para estilos globais do App

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Nosso header de navegação */}
      <main className={styles.mainContent}> {/* Container principal para o conteúdo das páginas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<CadastroPrato />} />
          <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;