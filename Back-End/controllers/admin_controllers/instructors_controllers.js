const db = require('../../db');

const instructors_details = (req, res) => {
    const query = `SELECT * FROM users WHERE role_id = 2`;
    db.query(query, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

module.exports = {
    instructors_details
    
};

