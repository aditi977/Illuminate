const Model = require('./index');

class Course extends Model {
    static get tableName() {
        return "courses";
    }

    static get idColumn() {
        return "id";
    }

    // static async beforeInsert({ items, inputItems, relation }) {
    //     if (inputItems && inputItems.password) {
    //         console.log(inputItems.password)
    //         inputItems.password = await bcrypt.hash(inputItems.password, salt)
    //     }
    // }

    static get relationMappings() {
        const User = require('./User');
        const Module = require('./Module');
        return {
            creator: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: `${this.tableName}.createdBy`,
                    to: `${User.tableName}.id`,
                },
            },
            modules: {
                relation: Model.HasManyRelation,
                modelClass: Module,
                join: {
                    from: `${this.tableName}.id`,
                    to: `${Module.tableName}.courseId`,
                },
            },
            registeredUsers: {
                relation: Model.ManyToManyRelation,
                modelClass: Course,
                join: {
                    from: `${this.tableName}.id`,
                    through: { // join table relationship mapping
                        from: `${UserCourse.tableName}.courseId`,
                        to: `${UserCourse.tableName}.userId`,
                    },
                    to: `${User.tableName}.id`,
                },
            },
        }
    }

}

module.exports = exports = Course;
