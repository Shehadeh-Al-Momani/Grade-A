const adminRouter = require("express").Router();
const { addCategory} = require('../controllers/main-controller');


adminRouter.post('/category',addCategory) // req.body.name

module.exports = adminRouter;
