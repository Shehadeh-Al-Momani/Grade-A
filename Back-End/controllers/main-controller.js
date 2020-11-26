const db = require('../db');

const {getCategoryCourses, addCourse, evaluate, getRating} = require('./students_controllers');
const {getAllCourses,courseDetails,getAllCategories,searchCourses,filterCourses,historyCourses} = require('./students_controllers/students_controllers')

module.exports={
    getAllCourses,
    courseDetails,
    getAllCategories,
    searchCourses,
    filterCourses,
    historyCourses,
    getCategoryCourses,
    addCourse, 
    evaluate,
    getRating,   
    getCategoryCourses,
    addCourse, 
    evaluate, 
    getRating,
};
