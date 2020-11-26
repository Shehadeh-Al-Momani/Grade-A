const studentsRouter = require("express").Router();

const {getAllCourses,courseDetails,getAllCategories,searchCourses,filterCourses,historyCourses,getCategoryCourses, addCourse, evaluate, getRating} = require('../controllers/main-controller')

 
studentsRouter.get('/category_courses/:id', getCategoryCourses)
studentsRouter.post('/add_course/:id', addCourse) //send request with "course_id" in params and "student_id" in body
studentsRouter.post('/evaluate/:id', evaluate) //send "course_id" in params, "student_id" in body, and "rating" in body
studentsRouter.get('/rating/:id',getRating) // id = "rating_value"

// // View all courses
studentsRouter.get('/courses',getAllCourses)
// // View a specific course's details
studentsRouter.get('/details/:id',courseDetails)
// // View all categories
studentsRouter.get('/categories',getAllCategories)
// // View courses by category
// studentsRouter.get('/category_courses/:id',categoryCourses_s)
// // Search for courses
studentsRouter.get('/search/:id',searchCourses)
// // Filter courses
studentsRouter.get('/filter/:id',filterCourses)
// // View student's courses history
studentsRouter.get('/history/:id',historyCourses)
// // Evaluation(Star rating)
// studentsRouter.add('/evaluate/:id',evaluate_s)
// // Show all rating courses
// studentsRouter.get('/rating/:id',getRating_s)
// // Enrollment in multiple course
// studentsRouter.get('/',)
// // Chat integration with instructors
// studentsRouter.get('/',)
// // Integration with Video service provider
// studentsRouter.get('/',)

module.exports = studentsRouter;

