const { response } = require('express');
const { restart } = require('nodemon');
const produtosModel = require('../models/produtosModel');
const ProdutosModel = require('../models/produtosModel');

class ProdutosController{

    async create(req, res){
        const Produto = new ProdutosModel(req.body);
        await Produto
              .save()
              .then(response => {
                  return res.status(200).json(response);
              })
              .catch(error =>{
                  return res.status(500).json(error);
              });

    }

    async update(req, res)  {
        await ProdutosModel.findByIdAndUpdate( {'_id': req.params.id}, req.body, { new: true} )
        .then(response => {
            res.status(200).json(response);
    
        })
        .catch(error =>{
            return res.status(500).json(error);
        })  
    }

    async all(req, res){
        await ProdutosModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });

        
    }

    async show(req, res){
        await ProdutosModel.findById(req.params.id)
        .then(response => {
            if(response){
                return res.status(200).json(response);
            }
            else
            {
                return res.status(404).json({error: 'Produto não encontrado'});    
            }
        })
        .catch(error => {
            return res.status(500).json(error); 
        });
    }


    


}

module.exports = new ProdutosController();