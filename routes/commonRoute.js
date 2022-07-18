const express = require('express');
const router = express.Router();
const commonC = require('../controllers/commonController');

router.get('/', commonC.productLists);
router.post('/register', commonC.registerUsers);
router.post('/login', commonC.loginUser);

module.exports = router;