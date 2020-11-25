const studentsRouter = require("express").Router();
const {categoryCourses_s, addCourse_s, evaluate_s, getRating_s} = require('../controllers/main-controller')

studentsRouter.get('/category_courses/:id', categoryCourses_s)
studentsRouter.post('/add_course/:id', addCourse_s) //send request with "course_id" in params and "student_id" in body
studentsRouter.post('/evaluate/:id', evaluate_s) //send "course_id" in params, "student_id" in body, and "rating" in body
studentsRouter.get('/rating/:id',getRating_s) // id = "rating_value"
// Search for courses

// // View all courses
// studentsRouter.get('/courses',courses_s)
// // View a specific course's details
// studentsRouter.get('/details/:id',courseDetails_s)
// // View all categories
// studentsRouter.get('/categories',categories_s)
// // View courses by category
// studentsRouter.get('/category_courses/:id',categoryCourses_s)
// // Search for courses
// studentsRouter.get('/search/:id',search_s)
// // Filter courses
// studentsRouter.get('/filter/:id',filter_s)
// // View student's courses history
// studentsRouter.get('/history/:id',history_s)
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
