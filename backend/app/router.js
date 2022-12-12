const express = require('express');
const listController = require('./controllers/listController');

const router = express.Router();

router.get('/list', listController.readAll);
router.post('/list', listController.create);

module.exports = router;