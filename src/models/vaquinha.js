const mongoose = require('mongoose');

const VaquinhaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  meta: { type: Number, required: true },
  criadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  criadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vaquinha', VaquinhaSchema);