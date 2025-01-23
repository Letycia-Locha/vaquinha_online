const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded; // Adiciona o usuário decodificado à requisição
    next();
  } catch (erro) {
    res.status(401).json({ mensagem: 'Token inválido' });
  }
};

module.exports = authMiddleware;