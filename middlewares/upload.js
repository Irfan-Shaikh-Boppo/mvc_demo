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
}).single('filePath')
    
module.exports = upload;