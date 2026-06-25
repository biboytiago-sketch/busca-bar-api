const express = require('express');
const path = require('path');
const app = express();

const BarController = require('./src/controllers/BarController');
const PromocaoController = require('./src/controllers/PromocaoController');

// 1. Configurações Iniciais do Servidor
app.use(express.json()); // Permite ler JSON

// 2. LIBERAÇÃO DAS TELAS HTML (Não delete esta linha!)
app.use(express.static(path.join(__dirname, 'public')));

// 3. --- ROTAS DO GERENTE (ABA ADM) ---
app.post('/api/bares', BarController.cadastrar);
app.post('/api/promocoes', PromocaoController.criar);

// 4. --- ROTAS DO CLIENTE (APLICATIVO) ---
app.get('/api/bares', BarController.listar);
app.get('/api/promocoes', PromocaoController.listarAtivas);
app.get('/api/promocoes/categoria/:categoria', PromocaoController.filtrarPorCategoria);

module.exports = app;