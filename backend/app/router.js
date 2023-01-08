const express = require('express');
const listController = require('./controllers/listController');

const router = express.Router();

router.get('/list', listController.readAll);
router.post('/list', listController.create);
router.delete('/list/:id', listController.delete);


module.exports = router;