const instructorsRouter = require("express").Router();

// Add courses
instructorsRouter.add('/course/',addCourse_i)
// Update courses
instructorsRouter.update('/course/',updateCourse_i)
// View all courses
instructorsRouter.get('/courses/',courses_i)
// View total number of courses registered
instructorsRouter.get('/registeredCourses/:id',registeredCourses_i)
// Show a hidden course
instructorsRouter.update('/view/:id',visiblity_i)
// Add live videos
instructorsRouter.get('/',)
// View course rating
instructorsRouter.get('/',)
// Chat with students
instructorsRouter.get('/',)

module.exports = instructorsRouter;


