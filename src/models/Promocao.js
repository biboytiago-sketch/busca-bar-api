const mongoose = require('mongoose');

const PromocaoSchema = new mongoose.Schema({
    barId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bar', required: true },
    titulo: { type: String, required: true }, // Ex: "Double Chopp"
    descricao: { type: String }, // Ex: "Peça um Chopp e o segundo é por nossa conta"
    categoria: { 
        type: String, 
        enum: ['Chopp', 'Cerveja', 'Entrada', 'Destilado', 'Petisco', 'Outros'], 
        required: true 
    },
    precoOriginal: { type: Number },
    precoPromocional: { type: Number, required: true },
    validoAte: { type: Date, required: true } // Data de expiração da promoção
}, { timestamps: true });

module.exports = mongoose.model('Promocao', PromocaoSchema);