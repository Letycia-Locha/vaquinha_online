let vaquinhas = [];

const listarVaquinhas = (req, res) => {
  res.json(vaquinhas);
};

const Vaquinha = require('../models/vaquinha.js');

const criarVaquinha = async (req, res) => {
  const { titulo, descricao, meta } = req.body;

  try {
    const novaVaquinha = new Vaquinha({
      titulo,
      descricao,
      meta,
      criadoPor: req.usuario.userId, // Assume que o ID do usuário está no token JWT
    });

    await novaVaquinha.save();
    res.status(201).json(novaVaquinha); // Retorna o objeto completo da vaquinha
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
};

const obterVaquinha = (req, res) => {
  const id = req.params.id;
  const vaquinha = vaquinhas[id];
  if (vaquinha) {
    res.json(vaquinha);
  } else {
    res.status(404).json({ mensagem: 'Vaquinha não encontrada' });
  }
};

const atualizarVaquinha = (req, res) => {
  const id = req.params.id;
  if (vaquinhas[id]) {
    vaquinhas[id] = req.body;
    res.json(vaquinhas[id]);
  } else {
    res.status(404).json({ mensagem: 'Vaquinha não encontrada' });
  }
};

const deletarVaquinha = (req, res) => {
  const id = req.params.id;
  if (vaquinhas[id]) {
    const vaquinhaRemovida = vaquinhas.splice(id, 1);
    res.json(vaquinhaRemovida);
  } else {
    res.status(404).json({ mensagem: 'Vaquinha não encontrada' });
  }
};

module.exports = {
  listarVaquinhas,
  criarVaquinha,
  obterVaquinha,
  atualizarVaquinha,
  deletarVaquinha
};