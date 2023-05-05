const router = require('express').Router()

const {
    signUp, signIn
} = require('./userController');

router.post('/sign-up', signUp)
router.post('/sign-in', signIn)

module.exports = exports = router;
