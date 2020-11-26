const db = require('../db');
const {getAllCourses,courseDetails,getAllCategories,searchCourses,filterCourses,historyCourses} = require('./students_controllers/students_controllers')

module.exports={
    getAllCourses,
    courseDetails,
    getAllCategories,
    searchCourses,
    filterCourses,
    historyCourses,
    
};

