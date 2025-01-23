const express = require('express');
const router = express.Router();
const vaquinhasController = require('../controllers/vaquinhasController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas para vaquinhas (protegidas por autenticação)
router.get('/', vaquinhasController.listarVaquinhas);
router.post('/', authMiddleware, vaquinhasController.criarVaquinha);
router.get('/:id', authMiddleware, vaquinhasController.obterVaquinha);
router.put('/:id', authMiddleware, vaquinhasController.atualizarVaquinha);
router.delete('/:id', authMiddleware, vaquinhasController.deletarVaquinha);

module.exports = router;