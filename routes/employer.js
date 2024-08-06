const express = require('express');
const { registerEmployer } = require('../controllers/employerController');
const router = express.Router();

router.post('/register', registerEmployer);

module.exports = router;
