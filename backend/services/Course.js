const Base = require('./base');
const { object, string, array } = require('yup')
const Model = require('../models/Course')

class CourseSearch extends Base {
    constructor({ frameWorks, experience }) {
        super()
        this.frameWorks = frameWorks;
        this.experience = experience;
    }

    async perform() {
        await this.validateSearchParams()
        let frameWorks = this.frameWorks
        console.log(this.frameWorks)
        frameWorks = frameWorks.map((i) => `'%${i}%'`)
        console.log(frameWorks)
        const courses = await Model.query(this.transaction).whereRaw(`level='${this.experience}' and (tags ilike any (array[${frameWorks}]) or title ilike any (array[${frameWorks}]))`)
        return courses;
    }

    async validateSearchParams() {
        const schema = object({
            experience: string().matches(/(Beginner|Intermediate|Advanced)/).required(),
            frameWorks: array().of(string()).min(1),
        });
        await schema.validate({
            frameWorks: this.frameWorks,
            experience: this.experience
        })
    }
}


module.exports = exports = CourseSearch;
