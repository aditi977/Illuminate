const Model = require('./index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = 10

class User extends Model {
    static get tableName() {
        return "users";
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

    async verifyPassword({ password = '' } = {}) {
        const verified = await bcrypt.compare(password, this.password);
        console.log(verified)
        return verified;
    }

    generateJwt() {
        return jwt.sign({ id: this.id }, process.env.JWT_SECRET);
    }

    static get relationMappings() {
        const Course = require('./Course');
        const UserCourse = require('./UserCourse');
        return {
            createdCourses: {
                relation: Model.HasManyRelation,
                modelClass: Course,
                join: {
                    from: `${this.tableName}.id`,
                    to: `${Course.tableName}.creator`
                },
            },
            registeredCourses: {
                relation: Model.ManyToManyRelation,
                modelClass: Course,
                join: {
                    from: `${this.tableName}.id`,
                    through: { // join table relationship mapping
                        from: `${UserCourse.tableName}.userId`,
                        to: `${UserCourse.tableName}.courseId`,
                    },
                    to: `${Course.tableName}.id`,
                },
            },
        }
    }
}

module.exports = exports = User;