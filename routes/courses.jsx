const express = require('express');
const router = express.Router();
const courses = require('../data/courses');

router.get('/', (req, res) => {
  res.send(courses);
});

module.exports = router;
