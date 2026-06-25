const express = require('express');
const cors = require('cors');
const apiRoutes = require('./src/routes/api'); // Como o app saiu da src, agora precisa do './src/' aqui
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

module.exports = app;