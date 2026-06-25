const mongoose = require('mongoose');

const BarSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    telefone: { type: String },
    // Sistema de localização GeoJSON
    localizacao: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        }
    },
    senhaAdmin: { type: String, required: true } // Para autenticação simples do gerente
}, { timestamps: true });

// Index para buscas por proximidade geográfica
BarSchema.index({ localizacao: '2dsphere' });

module.exports = mongoose.model('Bar', BarSchema);