exports.up = function(knex) {
    return knex.schema.createTable('orders', table => {
        table.increments('order_id').primary();
        table.integer('customer_id').unsigned().notNullable();
        table.datetime('order_date').notNullable();
        table.decimal('total_amount', 10, 2).notNullable();
        table.string('status', 50).notNullable();

        table.foreign('customer_id').references('customers.customer_id');
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('orders');
};