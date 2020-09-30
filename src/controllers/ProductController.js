const { validationResult } = require('express-validator')
const connection = require('../database/connection')
const { update } = require('../database/connection')

module.exports = {
    async create(req, res) {
        try {
            console.log('iae')
                // const { id } = req.params
                const err=validationResult(req).array()
                console.log(err)
            const { name, description, cost, quant_stock } = req.body

            await connection('product').insert({
                name,
                description,
                cost,
                quant_stock
            }).timeout(30000)
            res.json({ message: "Item cadastrado com sucesso!!" })
        } catch (err) {
            console.log(err)
            res.json({ message: "Oops!! Houve um erro inesperado." })
        }
    },

    async read(req, res) {
        try {
            const products = await connection.select().table('product')
            res.json(products)
        } catch (err) {
            console.log(err)
            res.json({ message: "Oops!! Houve um erro inesperado." })
        }
    },

    async update(req, res) {
        try {
            const { name, cost, quant_stock, description } = req.body
            const { id } = req.params

            await connection('product').where('id', id).update({
                name: name,
                description: description,
                cost: cost,
                quant_stock: quant_stock
            })

            res.json({ message: "Item atualizado com sucesso!!" })
        } catch (error) {
            console.log(error)
            res.json({ message: "Oops!! Houve um erro inesperado." })
        }
    },

    async delete() {
        try {
            return function(req,res){
                console.log('iae')
                // const { id } = req.params
                const err=validationResult(req).array()
                console.log(err)
                res.send('foi')
                // const response= await connection('product').where('id', id).delete()
                // if(response==1){
                    //     res.json({ message: "Item removido com sucesso!!" })
            // }else{
            //     res.json({ message: "Item não encontrado." })
            // }
            
        }

        } catch (err) {
            res.json({ message: "Oops!! Houve um erro inesperado." })
        }
    }
}