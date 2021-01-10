const express = require('express');
const router = express.Router();

const ProdutoController = require('../controllers/ProdutosController');
const ProdutoValidation = require('../middlewares/ProdutoValidation');

router.post('/cad',ProdutoValidation, ProdutoController.create);
router.get('/filter/listar', ProdutoController.all);
router.get('/:id', ProdutoController.show);
router.put('/atualizar/:id', ProdutoController.update);


module.exports = router;