const app = require('./app');
const connectDB = require('./src/config/database'); // Sem chaves aqui

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando com sucesso na porta ${PORT}`);
    });
}).catch((err) => {
    console.error("Erro fatal ao iniciar o banco:", err);
});