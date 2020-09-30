const { check } = require('express-validator');

module.exports = {
    deleteProduct(){
        return [check('id').isEmail()]
    } ,
    createProduct(){
        return[
            [
            check('name').isString(),
            check('description').isString(),
            check('cost').isDecimal(),
            check('quant_stock').isInt(),
        ]
    ]
    }
}
