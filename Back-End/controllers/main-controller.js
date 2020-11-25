const db = require('../db');
const {courses_s,courseDetails_s,categories_s,search_s,filter_s} = require('./students_controllers/students_controllers')

module.exports={
    courses_s,
    courseDetails_s,
    categories_s,
    search_s,
    filter_s,
}