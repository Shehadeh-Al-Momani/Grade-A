const db = require('../../db');


const students_details = (req, res) => {
    const query = `SELECT * FROM users WHERE role_id = 3`;
    
    db.query(query, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const disable_user = (req, res) => {
    const query = `UPDATE users SET isDisabled = 1 WHERE id = ?`
    const data = req.params.id 
    db.query(query, data, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

module.exports = {
    students_details, 
    disable_user,
};

