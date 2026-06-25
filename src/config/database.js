const mongoose = require('mongoose');

async function connectDB() {
    try {
        // Se o .env falhar por algum motivo, ele usa o endereço padrão local
        const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/sistema_bares';
        
        await mongoose.connect(uri);
        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1);
    }
}

// Exporta a função diretamente
module.exports = connectDB;