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
}

module.exports = exports = User;