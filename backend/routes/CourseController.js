const CourseService = require('../services/Course');


async function recommendCourse(req, res, next) {
    try {
        const { query } = req;
        console.log(query)
        const courseService = new CourseService({ frameWorks: query.frameworks, experience: query.experience });
        const courses = await courseService.perform();
        res.json({
            success: true,
            courses,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = exports = {
    recommendCourse,
};
