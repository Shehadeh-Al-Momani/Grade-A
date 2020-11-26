const db = require('../../db');

const visiblityCourse = (req, res) => {
    const query = `UPDATE courses SET isDisabled = !isDisabled WHERE  id = ?`;
    const data = req.params.id;
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

const addCourse = (req, res) => {
    const {name,price,description,instructor_id,category_id} = req.body;
    const query = `INSERT INTO courses (name,price,description,instructor_id,created_at,category_id) values (?,?,?,?,?,?)`;
    const data = [name,price,description,instructor_id,new Date,category_id];
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

const updateCourse = (req, res) => {
    const query = `UPDATE courses SET price = ? WHERE id = ?`;
    const data = [req.params.i,req.params.id ];
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

const courseRating = (req, res) => {
    const query = `SELECT * FROM courses JOIN rating ON rating.course_id=? AND courses.id=?`;
    const data = [req.params.id,req.params.id];
    db.query(query, data, (err, result) => {
        const avgRating= result.reduce((acc, e) => acc + e.rating_value,0)/result.length;
        if (err) throw err;
        res.json(avgRating);
    })
};

module.exports = {
    visiblityCourse,
    addCourse,
    updateCourse,
    courseRating,
};

