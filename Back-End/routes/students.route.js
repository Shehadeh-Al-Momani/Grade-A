const studentsRouter = require("express").Router();
const {getAllCourses,courseDetails,getAllCategories,searchCourses,filterCourses,historyCourses} = require('../controllers/main-controller')

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

