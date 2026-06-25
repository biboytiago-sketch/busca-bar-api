const express = require('express');
const router = express.Router();

const BarController = require('../controllers/BarController');
const PromocaoController = require('../controllers/PromocaoController');

// --- ROTAS DO GERENTE (ABA ADM) ---
router.post('/bares', BarController.cadastrar);
router.post('/promocoes', PromocaoController.criar);

// --- ROTAS DO CLIENTE (APLICATIVO) ---
router.get('/bares', BarController.listar);
router.get('/promocoes', PromocaoController.listarAtivas);
router.get('/promocoes/categoria/:categoria', PromocaoController.filtrarPorCategoria);

module.exports = router;