
const Model = require('./index');

class Chapter extends Model {
    static get tableName() {
        return "chapters";
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

    // static get relationMappings() {
    //     const Mo = require('./Course');
        
    //     return {
    //         course: {
    //             relation: Model.BelongsToOneRelation,
    //             modelClass: Course,
    //             join: {
    //                 from: `${this.tableName}.courseId`,
    //                 to: `${Course.tableName}.id`,
    //             },
    //         },

    //     }
    // }

}

module.exports = exports = Chapter;
