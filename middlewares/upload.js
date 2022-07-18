const multer = require("multer");

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        },
        filename: (req, file, cb) => {
            var filename = Date.now() + file.originalname;
            cb(null, filename)
        }
    })
}).array('filePath',5)

module.exports = upload;