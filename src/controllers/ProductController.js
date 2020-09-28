const connection = require('../database/connection')
const crypto = require('crypto')
const { read } = require('fs')
const { update } = require('../database/connection')

module.exports = {
    async create(req, res) {
        try {
            const { name, description, cost, quant_stock } = req.body

            await connection('product').insert({
                name,
                description,
                cost,
                quant_stock
            })
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

    async delete(req, res) {
        try {
            const { id } = req.params

            await connection('product').where('id', id).delete()

            res.json({ message: "Item removido com sucesso!!" })

        } catch (err) {
            res.json({ message: "Oops!! Houve um erro inesperado." })
        }
    }
}