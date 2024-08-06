const express = require('express');
const { registerJobseeker } = require('../controllers/jobseekerController');
const router = express.Router();

router.post('/register', registerJobseeker);

module.exports = router;
