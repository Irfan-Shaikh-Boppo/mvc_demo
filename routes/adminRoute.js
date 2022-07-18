const express = require('express');
const router = express.Router();
const adminC = require('../controllers/adminController');
const { verifyToken, authRole } = require('../middlewares/auth')

router.get('/addProduct', verifyToken, authRole, adminC.addProduct);

module.exports = router;