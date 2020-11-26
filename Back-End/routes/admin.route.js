const adminRouter = require("express").Router();
const {students_details, disable_student: disable_user} = require('../controllers/main-controller')


// // View all courses
// adminRouter.get('/admin/courses',courses_a)
// // Hide courses
// adminRouter.update('/admin/course/:id',hideCourse_a)
// // Add new categories
// adminRouter.add('/admin/category',addCategory_a)
// // View all students accounts details
adminRouter.get('/students_details',students_details)
// // Disable students accounts
adminRouter.put('/disable_student/:id',disable_user)
// // View all instructors accounts details
// adminRouter.get('/admin/instructors_details/:id',instructors_details)
// // Disable instructors accounts
// adminRouter.update('/admin/disable_instructor/:id',disable_instructor)

module.exports = adminRouter;
