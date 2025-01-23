const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});

// Criptografar a senha antes de salvar
UsuarioSchema.pre('save', async function (next) {
  if (this.isModified('senha')) {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
  next();
});

// Método para validar senha
UsuarioSchema.methods.validarSenha = async function (senha) {
  return await bcrypt.compare(senha, this.senha);
};

module.exports = mongoose.model('Usuario', UsuarioSchema);