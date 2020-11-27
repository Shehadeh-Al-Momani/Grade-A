const db = require('../db');

const { getAllCourses, courseDetails, searchCourses, filterCourses, historyCourses, enrollmentCourse } = require('./students_controllers/courses_controllers');
const { getAllCategories, getCategoryCourses } = require('./students_controllers/categories_controllers');
const { evaluate, getRating } = require('./students_controllers/rating_controllers');
const { } = require('./students_controllers/integration_controllers');

const { visiblityCourse, addCourse,updateCourse } = require('./instructors_controllers/courses_controllers');
const { courseRating } = require('./instructors_controllers/rating_controllers');

const { addCategory } = require('./admin_controllers/categories_controllers');

module.exports = {
    getAllCourses,
    courseDetails,
    getAllCategories,
    searchCourses,
    filterCourses,
    historyCourses,
    enrollmentCourse,
    getCategoryCourses,
    evaluate,
    getRating,
    visiblityCourse,
    addCourse,
    updateCourse,
    courseRating,
    addCategory,
};


