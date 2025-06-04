import React, { useState, useEffect } from 'react';
//import axios from 'axios'; // Será usado para buscar dados da API
import PratoCard from '../../components/PratoCard/PratoCard';
import styles from './Cardapio.module.css';

// Dados mockados enquanto a API não está pronta
const mockPratos = [
  {
    id: 1,
    nomePrato: "Salada Caesar Clássica",
    descricao: "Alface americana crocante, croutons temperados, queijo parmesão ralado e molho caesar especial da casa.",
    preco: 32.00,
    categoria: "Entrada",
    disponibilidade: "Em estoque",
    urlImagem: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Flc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    nomePrato: "Spaghetti Carbonara",
    descricao: "Massa italiana fresca com pancetta, queijo pecorino, ovos e pimenta do reino.",
    preco: 55.50,
    categoria: "Prato Principal",
    disponibilidade: "Em estoque",
    urlImagem: "https://images.unsplash.com/photo-1588013273468-315088ea3426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhZ2hldHRpJTIwY2FyYm9uYXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    nomePrato: "Petit Gâteau de Chocolate",
    descricao: "Bolo de chocolate com interior cremoso, acompanhado de sorvete de creme.",
    preco: 28.00,
    categoria: "Sobremesa",
    disponibilidade: "Esgotado",
    urlImagem: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hvY29sYXRlJTIwbGF2YSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    nomePrato: "Suco de Laranja Natural",
    descricao: "Suco feito com laranjas frescas, espremidas na hora.",
    preco: 12.00,
    categoria: "Bebida",
    disponibilidade: "Em estoque",
    urlImagem: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    nomePrato: "Pizza Margherita",
    descricao: "Molho de tomate italiano, mozzarella fresca, manjericão e azeite extra virgem.",
    preco: 45.00,
    categoria: "Prato Principal",
    disponibilidade: "Em estoque",
    urlImagem: "https://plus.unsplash.com/premium_photo-1675359883499-093585781423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  }
];

const Cardapio = () => {
  const [pratos, setPratos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState('Todos');

  const categoriasUnicas = ['Todos', ...new Set(mockPratos.map(p => p.categoria))];

  useEffect(() => {
    const fetchPratos = async () => {
      try {
        setLoading(true);
        // Simulação de chamada API - substitua pela URL real
        // const response = await axios.get('colocamos nossa API aqui/pratos');
        // setPratos(response.data);

        // dados mockados
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simula delay da API
        setPratos(mockPratos);
        setLoading(false);
      } catch (err) {
        setError('Falha ao carregar o cardápio. Tente novamente mais tarde.');
        console.error("Erro ao buscar pratos:", err);
        setLoading(false);
      }
    };

    fetchPratos();
  }, []);

  const pratosFiltrados = filtroCategoria === 'Todos'
    ? pratos
    : pratos.filter(prato => prato.categoria === filtroCategoria);

  if (loading) {
    return <div className={styles.statusMessage}>Carregando cardápio... 🍽️</div>;
  }

  if (error) {
    return <div className={`${styles.statusMessage} ${styles.errorMessage}`}>{error}</div>;
  }

  return (
    <div className={styles.cardapioContainer}>
      <h1 className={styles.title}>Nosso Cardápio</h1>

      <div className={styles.filtrosContainer}>
        <label htmlFor="filtroCategoria" className={styles.filtroLabel}>Filtrar por Categoria:</label>
        <select
          id="filtroCategoria"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
          className={styles.filtroSelect}
        >
          {categoriasUnicas.map(categoria => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      {pratosFiltrados.length === 0 && !loading && (
        <p className={styles.statusMessage}>Nenhum prato encontrado para esta categoria.</p>
      )}

      <div className={styles.gridPratos}>
        {pratosFiltrados.map((prato) => (
          <PratoCard key={prato.id} prato={prato} />
        ))}
      </div>
    </div>
  );
};

export default Cardapio;