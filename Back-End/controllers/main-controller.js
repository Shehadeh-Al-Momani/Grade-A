const db = require('../db');
const {categoryCourses_s, addCourse_s, evaluate_s, getRating_s} = require('./students_controllers');

module.exports = {
    categoryCourses_s,
    addCourse_s, 
    evaluate_s, 
    getRating_s,    
};


