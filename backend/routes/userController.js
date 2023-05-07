const UserService = require('../services/User');


async function signUp(req, res, next) {
    try {
        const userService = new UserService({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            operation: "signUp"
        });
        const user = await userService.perform();
        res.json({
            success: true,
        });

    } catch (error) {
        next(error)
    }
}

async function signIn(req, res, next) {
    try {
        const userService = new UserService({
            email: req.body.email,
            password: req.body.password,
            operation: "signIn"
        });
        const token = await userService.perform();
        res.json({
            success: true,
            token,
        });

    } catch (error) {
        next(error)
    }
}

module.exports = exports = {
    signUp, signIn
}