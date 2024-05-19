exports.up = function(knex) {
    return knex.schema.createTable('books', table => {
        table.increments('book_id').primary();
        table.string('title', 255).notNullable();
        table.string('author', 255).notNullable();
        table.string('publisher', 255);
        table.integer('year_published');
        table.string('genre', 100);
        table.decimal('price', 10, 2).notNullable();
        table.integer('stock_quantity').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books');
};