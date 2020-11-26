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

module.exports = {
    visiblityCourse,
    addCourse,
};

