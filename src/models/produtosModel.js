const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const ProdutosSchema = new Schema({
    barras:{type: Number, required: true},
    type:{type: Number, required: true},
    nome:{type: String, required: true},
    descripition:{type: String, required: true},
    quantidade:{type: Number, required: true},
    created:{type:Date, default: Date.now()}
});

module.exports = mongoose.model('Produtos', ProdutosSchema);