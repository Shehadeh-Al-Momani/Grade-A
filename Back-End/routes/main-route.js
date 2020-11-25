const mainRouter = require("express").Router();
const db = require('../db')

const adminRouter = require('./admin.route');
const instructorsRouter = require('./instructors.route');
const studentsRouter = require('./students.route');

mainRouter.use('/admin/', adminRouter);
mainRouter.use('/instructors/', instructorsRouter);
mainRouter.use('/students/', studentsRouter);

module.exports = mainRouter;