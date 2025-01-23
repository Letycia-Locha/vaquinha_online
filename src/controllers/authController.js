const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const registrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: 'E-mail já cadastrado' });
    }

    const usuario = new Usuario({ nome, email, senha });
    await usuario.save();

    res.status(201).json({ mensagem: 'Usuário registrado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
};

const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario || !(await usuario.validarSenha(senha))) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ userId: usuario._id, email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
};

module.exports = {
  registrarUsuario,
  loginUsuario,
};