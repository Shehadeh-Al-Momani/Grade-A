const db = require('../db');

const getCategoryCourses = (req, res) => {
    const query = `SELECT * FROM courses WHERE category_id = ?`;
    const data = req.params.id;
    db.query(query, data, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const addCourse = (req, res) => {
    const query = `INSERT INTO registration (student_id, course_id) VALUES (?,?)`;
    const data = [req.body.student_id,req.params.id];
    db.query(query,data, (err, result) => {
        if (err) throw err
        res.send("addCourse_s called")
        // res.json(result)
    })
}

const evaluate = (req, res) => {
    const query = `INSERT INTO rating (student_id, course_id, rating_value) VALUES (?, ?, ?)`;
    const data = [req.body.student_id,req.params.id,req.body.rating];
    db.query(query,data, (err, result) => {
        if (err) throw err
        res.send("evaluate_s called")
        // res.json(result)
    })
}

const getRating = (req, res) => {
    const query = `SELECT * FROM rating WHERE rating_value = ?`;
    const data = req.params.id;
    db.query(query,data, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

module.exports = {
    getCategoryCourses,
    addCourse,
    evaluate,
    getRating
};

