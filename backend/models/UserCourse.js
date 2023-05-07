const Model = require('./index');

// 
class UserCourse extends Model {
    static get tableName() {
        return "userCourses";
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
    }

}

module.exports = exports = UserCourse;
