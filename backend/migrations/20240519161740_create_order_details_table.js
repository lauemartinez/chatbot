exports.up = function(knex) {
    return knex.schema.createTable('order_details', table => {
        table.increments('order_detail_id').primary();
        table.integer('order_id').unsigned().notNullable();
        table.integer('book_id').unsigned().notNullable();
        table.integer('quantity').notNullable();
        table.decimal('price', 10, 2).notNullable();

        table.foreign('order_id').references('orders.order_id');
        table.foreign('book_id').references('books.book_id');
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('order_details');
};