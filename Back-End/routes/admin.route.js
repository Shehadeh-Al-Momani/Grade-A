const adminRouter = require("express").Router();

const { addCategory} = require('../controllers/main-controller');

// Add new categories
adminRouter.post('/category',addCategory) // req.body.name

module.exports = adminRouter;
