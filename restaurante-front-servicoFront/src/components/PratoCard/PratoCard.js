import React from 'react';
import styles from './PratoCard.module.css';

const PratoCard = ({ prato }) => {
  const { nomePrato, preco, urlImagem, categoria, disponibilidade, descricao } = prato;

  // Fallback para imagem caso a URL seja inválida ou não carregue
  const handleImageError = (e) => {
    e.target.onerror = null; // Evita loop infinito se a imagem de fallback também falhar
    e.target.src = "https://via.placeholder.com/300x200.png?text=Imagem+Indisponível"; // Imagem placeholder
  };

  return (
    <div className={`${styles.card} ${disponibilidade === 'Esgotado' ? styles.esgotado : ''}`}>
      <div className={styles.imageContainer}>
        <img
          src={urlImagem || "https://via.placeholder.com/300x200.png?text=Sem+Imagem"}
          alt={nomePrato}
          className={styles.image}
          onError={handleImageError}
        />
        {disponibilidade === 'Esgotado' && (
          <div className={styles.esgotadoOverlay}>ESGOTADO</div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.nome}>{nomePrato}</h3>
        <p className={styles.categoria}>{categoria}</p>
        <p className={styles.descricao}>{descricao}</p>
        <div className={styles.footer}>
          <span className={styles.preco}>
            R$ {preco.toFixed(2).replace('.', ',')}
          </span>
          {/* Poderia adicionar um botão "Adicionar ao Pedido" ou "Detalhes" aqui */}
        </div>
      </div>
    </div>
  );
};

export default PratoCard;