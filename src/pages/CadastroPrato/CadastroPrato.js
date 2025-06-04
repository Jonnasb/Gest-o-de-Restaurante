import React, { useState } from 'react';
//import axios from 'axios'; // Será usado para enviar os dados para a API descomente para usar o axios
import styles from './CadastroPrato.module.css';

const CadastroPrato = () => {
  const [nomePrato, setNomePrato] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('Prato Principal'); // valor padrão
  const [disponibilidade, setDisponibilidade] = useState('Em estoque'); // Valor padrão
  const [urlImagem, setUrlImagem] = useState('');
  const [mensagem, setMensagem] = useState(''); // feed no usário

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMensagem(''); // limpa a mensagem anterior que você colocou

    const novoPrato = {
      nomePrato,
      descricao,
      preco: parseFloat(preco),
      categoria,
      disponibilidade,
      urlImagem,
    };

    try {
      // Simulação de chamada de API - substitua pela URL da sua API real
      // const response = await axios.post('URL_DA_SUA_API/pratos', novoPrato);
      // console.log('Prato cadastrado:', response.data);

      console.log('Dados do novo prato (simulação):', novoPrato); // Simulação
      setMensagem('Prato cadastrado com sucesso! (Simulação)');

      // Limpar formulário após sucesso
      setNomePrato('');
      setDescricao('');
      setPreco('');
      setCategoria('Prato Principal');
      setDisponibilidade('Em estoque');
      setUrlImagem('');

    } catch (error) {
      console.error('Erro ao cadastrar prato:', error);
      // if (error.response) {
      //   setMensagem(`Erro: ${error.response.data.message || 'Não foi possível cadastrar o prato.'}`);
      // } else {
      //   setMensagem('Erro de conexão ou servidor. Tente novamente.');
      // }
      setMensagem('Erro ao cadastrar prato. Verifique o console. (Simulação)'); // Simulação
    }
  };

  return (
    <div className={styles.cadastroContainer}>
      <h1 className={styles.title}>Cadastrar Novo Prato</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="nomePrato">Nome do Prato</label>
          <input
            type="text"
            id="nomePrato"
            value={nomePrato}
            onChange={(e) => setNomePrato(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            rows="3"
            required
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="preco">Preço (R$)</label>
            <input
              type="number"
              id="preco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="categoria">Categoria</label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            >
              <option value="Entrada">Entrada</option>
              <option value="Prato Principal">Prato Principal</option>
              <option value="Sobremesa">Sobremesa</option>
              <option value="Bebida">Bebida</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="disponibilidade">Disponibilidade</label>
          <select
            id="disponibilidade"
            value={disponibilidade}
            onChange={(e) => setDisponibilidade(e.target.value)}
            required
          >
            <option value="Em estoque">Em estoque</option>
            <option value="Esgotado">Esgotado</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="urlImagem">URL da Imagem do Prato</label>
          <input
            type="url"
            id="urlImagem"
            value={urlImagem}
            onChange={(e) => setUrlImagem(e.target.value)}
            placeholder="https://exemplo.com/imagem.jpg"
            required
          />
        </div>

        {urlImagem && (
          <div className={styles.imagePreviewContainer}>
            <p>Pré-visualização da Imagem:</p>
            <img src={urlImagem} alt="Pré-visualização do prato" className={styles.imagePreview}
              onError={(e) => { e.target.style.display = 'none'; /* Esconde se a imagem não carregar */ }}
              onLoad={(e) => { e.target.style.display = 'block'; }}
            />
          </div>
        )}

        <button type="submit" className={`${styles.submitButton} primary`}>
          Cadastrar Prato
        </button>

        {mensagem && <p className={styles.feedbackMessage}>{mensagem}</p>}
      </form>
    </div>
  );
};

export default CadastroPrato;