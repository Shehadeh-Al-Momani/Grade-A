const db = require('../db');
const {getCategoryCourses, addCourse, evaluate, getRating} = require('./students_controllers');

module.exports = {
    getCategoryCourses,
    addCourse, 
    evaluate, 
    getRating,    
};


