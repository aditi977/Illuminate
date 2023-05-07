const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');
const User = require('../models/User');


async function verifyToken(req, res, next) {
    try {

        const { token } = req.headers
        if (!token) {
            res.status(401).json({
                success: false,
                error: "Auth token is required"
            });
            return
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id } = decoded
        const isUser = await UserModel.query().findById(id)
        if (!isUser) {
            res.status(401).json({
                success: false,
                error: "Invalid auth token",
            });
        }
        next();
    } catch (error) {
        next(error);
    }
}


module.exports = exports = verifyToken;
