const db = require('../../db');

const visiblityCourse = (req, res) => {
    const query = `UPDATE courses SET isDisabled = !isDisabled WHERE  id = ?`;
    const data = req.params.id;
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

module.exports = {
    visiblityCourse,
};

