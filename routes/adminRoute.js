const express = require('express');
const upload = require('../middlewares/upload')
const router = express.Router();
const adminC = require('../controllers/adminController');
const { verifyToken, authRole } = require('../middlewares/auth');

router.post('/addProduct', verifyToken, authRole, upload, adminC.addProduct);
// router.post('/upload', upload, adminC.fileUpload);

module.exports = router;