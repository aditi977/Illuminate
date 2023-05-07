/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('courses', function (table) {
        table.increments('id');
        table.integer('createdBy').notNullable(); // ideally should be snake case
        table.foreign('createdBy').references('id').inTable('users');
        table.string('title').notNullable();
        table.text('description');
        table.string('tags');
        table.enum('level', ['Beginner', 'Intermediate', 'Advanced']).defaultTo('Beginner');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('courses')
};
