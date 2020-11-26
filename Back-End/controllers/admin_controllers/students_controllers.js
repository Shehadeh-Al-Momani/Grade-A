const db = require('../../db');


const students_details = (req, res) => {
    const query = `SELECT * FROM users WHERE role_id = 3`;
    
    db.query(query, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

module.exports = {
    students_details
};

