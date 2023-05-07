const router = require('express').Router()

const {
    signUp, signIn
} = require('./UserController');

const { recommendCourse } = require('./CourseController');

router.post('/sign-up', signUp)
router.post('/sign-in', signIn)
router.get('/recommend-courses', recommendCourse)

module.exports = exports = router;
