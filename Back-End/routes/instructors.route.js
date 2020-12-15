const instructorsRouter = require('express').Router();
const {
  registeredCoursesInstructor,
  visiblityCourse,
  addCourse,
  updateCourse,
  courseRating,
} = require('../controllers/main-controller');

// Show a hidden course
instructorsRouter.put('/visiblity/:id', visiblityCourse);

// Add courses
instructorsRouter.post('/course/', addCourse);

// Update courses
instructorsRouter.put('/course:id/:i', updateCourse); // id = courses.id , i = courses.price

// View all courses
// instructorsRouter.get('/courses/',courses)

// View total number of courses registered
instructorsRouter.get('/registeredCourses/:id', registeredCoursesInstructor);

// View course rating
instructorsRouter.get('/course_rating/:id', courseRating); // id = courses.id 

// Add live videos
// instructorsRouter.get('/',)

// Chat with students
// instructorsRouter.get('/',)

module.exports = instructorsRouter;
