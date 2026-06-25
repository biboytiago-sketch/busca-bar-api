const Promocao = require('../models/Promocao');

module.exports = {
    // Gerente cria uma promoção da semana
    async criar(req, res) {
        try {
            const { barId, titulo, descricao, categoria, precoOriginal, precoPromocional, validoAte } = req.body;

            // Dica: Em produção, validar se o barId realmente pertence ao gerente autenticado

            const promocao = await Promocao.create({
                barId,
                titulo,
                descricao,
                categoria,
                precoOriginal,
                precoPromocional,
                validoAte
            });

            return res.status(201).json(promocao);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    // Aplicativo do Cliente: Lista todas as promoções ativas e traz os dados do Bar junto (Populate)
    async listarAtivas(req, res) {
        try {
            const dataAtual = new Date();
            
            // Busca promoções onde a data de validade é maior ou igual à data atual
            const promocoes = await Promocao.find({
                validoAte: { $gte: dataAtual }
            }).populate('barId', 'nome endereco localizacao'); // Traz os dados do bar automaticamente

            return res.json(promocoes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    // Filtrar promoções por categoria (Ex: Apenas Chopp)
    async filtrarPorCategoria(req, res) {
        try {
            const { categoria } = req.params;
            const dataAtual = new Date();

            const promocoes = await Promocao.find({
                categoria,
                validoAte: { $gte: dataAtual }
            }).populate('barId', 'nome endereco localizacao');

            return res.json(promocoes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};