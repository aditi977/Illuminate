/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('userCourses', function (table) { // ideally should be snake case
        table.increments('id');
        table.integer('courseId').notNullable(); // ideally should be snake case
        table.foreign('courseId').references('id').inTable('courses');
        table.integer('userId').notNullable(); // ideally should be snake case
        table.foreign('userId').references('id').inTable('users'); // ideally should be snake case
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('userCourses');
};
