const Model = require('./index');

class Module extends Model {
    static get tableName() {
        return "modules";
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
        const Course = require('./Course');
        const Chapter = require('./Chapter')
        
        return {
            course: {
                relation: Model.BelongsToOneRelation,
                modelClass: Course,
                join: {
                    from: `${this.tableName}.courseId`,
                    to: `${Course.tableName}.id`,
                },
            },
            chapters: {
                relation: Model.HasManyRelation,
                modelClass: Course,
                join: {
                    from: `${this.tableName}.id`,
                    to: `${Chapter.tableName}.moduleId`,
                },
            }
        }
    }

}

module.exports = exports = Module;
