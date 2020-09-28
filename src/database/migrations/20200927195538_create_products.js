exports.up = function (knex) {
    return knex.schema.createTable('product', function (table) {
        table.increments('id').primary().notNullable()
        table.string('name').notNullable()
        table.string('description').notNullable()
        table.decimal('cost', 2).notNullable()
        table.integer('quant_stock').unsigned().notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('product')
};