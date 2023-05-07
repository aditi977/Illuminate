/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('chapters', function (table) {
        table.increments('id');
        table.integer('moduleId').notNullable(); // ideally should be snake case
        table.foreign('moduleId').references('id').inTable('modules');
        table.string('title').notNullable();
        table.text('content');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('chapters')
};
