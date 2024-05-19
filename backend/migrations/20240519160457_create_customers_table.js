exports.up = function(knex) {
    return knex.schema.createTable('customers', table => {
        table.increments('customer_id').primary();
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
        table.string('email', 255).notNullable().unique();
        table.string('phone_number', 20);
        table.string('address', 255);
        table.string('city', 100);
        table.string('state', 100);
        table.string('zip_code', 20);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('customers');
};