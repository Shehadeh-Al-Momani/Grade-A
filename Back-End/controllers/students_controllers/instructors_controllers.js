const db = require('../../db');

const getAllInstructors = (req, res) => {
	const query = 'SELECT * from users JOIN roles ON users.role_id=? AND roles.id=?';
	const data = [req.params.id, req.params.id];
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const getAllCoursesByInstructor = (req, res) => {
	const query = 'SELECT * FROM courses WHERE instructor_id =?';
	const data = req.params.id;
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const getInstructor = (req, res) => {
	const query = 'SELECT * from users WHERE id =?';
	const data = req.params.id;
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

module.exports = {
	getAllInstructors,
	getAllCoursesByInstructor,
	getInstructor,
};

