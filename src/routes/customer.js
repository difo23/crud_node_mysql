const express = require('express');
const customerController = require('../controllers/customerControlle');
const router = express.Router();

router.get('/', customerController.list);
router.post('/add', customerController.add);
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
module.exports = router;
