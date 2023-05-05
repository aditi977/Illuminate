const Base = require('./base');

const UserModel = require('../models/User');
const { object, string } = require('yup')
const { raw } = require('objection');
const bcrypt = require('bcrypt');

class User extends Base {
    constructor({ id = -1, name = '', password = '', email = '', operation = '' } = {}) {
        super()
        this.name = name
        this.email = email
        this.id = id
        this.password = password
        this.operation = operation
    }

    async perform() {
        console.log(`******* ${this.operation} *****`)
        switch (this.operation) {
            case "signUp": await this.signUp(); break;
            case "signIn": const token = await this.signIn(); return token;
            default: throw new Error("Invalid Operation")
        }
    }


    async signUp() {
        await this.singUpTypeValidation()
        const email = await UserModel.query(this.transaction).where(raw('upper("users"."email")'), this.email.toUpperCase()).first();
        if (email) {
            throw new Error("Email already exists.");
        }
        const user = await UserModel.query(this.transaction).insert({
            email: this.email,
            name: this.name,
            password: await bcrypt.hash(this.password, 10),
        });

        return user;
    }

    async singUpTypeValidation() {
        const signUpSchema = object({
            name: string().required(),
            email: string().email().required(),
            password: string().required(),
        });
        await signUpSchema.validate({
            name: this.name, email: this.email, password: this.password,
        });
    }


    async singInTypeValidation() {
        const signUpSchema = object({
            email: string().email().required(),
            password: string().required(),
        });
        await signUpSchema.validate({
            email: this.email, password: this.password,
        });
    }

    async signIn() {
        this.singInTypeValidation()
        // find user
        // verify password
        // generate jwt
        const user = await UserModel.query(this.transaction).where(raw('upper("users"."email")'), "=", this.email.toUpperCase()).first();
        console.log(user)
        if (!user) {
            throw new Error("Email doesn\'t exist.")
        }
        const verified = await user.verifyPassword({ password: this.password })
        if (!verified) {
            throw new Error("Wrong password")
        }
        const token = user.generateJwt()
        console.log(token)
        return token;
    }


}

module.exports = exports = User;
