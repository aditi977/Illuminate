/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('modules', function (table) {
        table.increments('id');
        table.integer('courseId').notNullable();
        table.foreign('courseId').references('id').inTable('courses');
        table.string('title').notNullable();
        table.text('description');
        table.integer('chapters').defaultTo(0);
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('modules')
};
