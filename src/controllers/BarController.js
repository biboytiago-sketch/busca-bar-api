const Bar = require('../models/Bar');

module.exports = {
    // Cadastro de um novo bar (Painel do ADM / Gerente)
    async cadastrar(req, res) {
        try {
            const { nome, endereco, telefone, longitude, latitude, senhaAdmin } = req.body;

            const bar = await Bar.create({
                nome,
                endereco,
                telefone,
                localizacao: {
                    type: 'Point',
                    coordinates: [longitude, latitude] // Atenção: Longitude primeiro no MongoDB
                },
                senhaAdmin
            });

            return res.status(201).json(bar);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    // Listar todos os bares para o Cliente
    async listar(req, res) {
        try {
            const bares = await Bar.find();
            return res.json(bares);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};