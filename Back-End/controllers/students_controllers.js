const db = require('../db');

const categoryCourses_s = (req, res) => {
 console.log("REQ Params: ", req.params.id)
 let sql = `SELECT * FROM courses WHERE category_id = ${req.params.id}`
 let query = db.query(sql, (err, result) => {
    if (err) throw err
    console.log("categoryCourses_s called")
    res.json(result)
})
}

const addCourse_s = (req, res) => {
    console.log("REQ PARAMS: ", req.params.id)
    console.log("REQ BODY: ",req.body)
    let sql = `INSERT INTO registration (student_id, course_id) 
    VALUES ("${req.body.student_id}", "${req.params.id}")`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        console.log("addCourse_s called")
        res.send("addCourse_s called")
        // res.json(result)
    })
}

module.exports = {
    categoryCourses_s, 
    addCourse_s


}