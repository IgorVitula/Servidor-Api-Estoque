const ProdutoModel = require('../models/produtosModel');

const ProdutoValidation = async(req, res, next) =>{

const { barras, type, nome, descripition, quantidade } = req.body;

if(!barras)
return res.status(400).json({ error: 'codigo de barras é obrigatorio'});
if(!type)
return res.status(400).json({ error: 'type é obrigatorio'});
else if(!nome)
return res.status(400).json({ error: 'Nome é obrigatorio'});
else if(!descripition)
return res.status(400).json({ error: 'descripition é obrigatorio'});
else if(!quantidade)
return res.status(400).json({ error: 'Quantidade é obrigatorio'});
else{
    let exists;
    
    if(req.params.id){//se existir esse id é pra atualizar
        exists = await TaskModel.findOne(
            { '_id':  {'$ne': req.params.id},//Ne negação

            });
    }
    else{
        exists = await ProdutoModel.findOne({ 
            'barras' : {'$eq': barras},
        });
    }

    if(exists){
        return res.status(400).json({ error: 'Ja existe esse produto'});   
    }
    next();
}




}

module.exports = ProdutoValidation;