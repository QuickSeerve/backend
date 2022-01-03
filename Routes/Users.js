const express = require('express');

const router = express.Router();

const { _getUser } = require('../Controllers/user.controller')

router.get('/user', _getUser)


module.exports = router;