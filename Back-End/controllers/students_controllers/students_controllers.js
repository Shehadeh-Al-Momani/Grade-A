const db = require('../../db');

const courses_s = (req, res) => {
    let sql = 'SELECT * FROM courses';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

const courseDetails_s = (req, res) => {
    let sql = 'SELECT * FROM courses WHERE id=?';
    let data = req.params.id;
    db.query(sql, data, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

const categories_s = (req, res) => {
    let sql = 'SELECT * FROM categories';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

const search_s = (req, res) => {
    let data = req.params.id;
    let sql = `SELECT * FROM courses WHERE name LIKE'%${data}%'`;
    db.query(sql, data, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

module.exports = {
    courses_s,
    courseDetails_s,
    categories_s,
    search_s,
};

