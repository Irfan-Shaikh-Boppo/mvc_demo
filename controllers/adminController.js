 const Product = require('../models/addProduct');

const addProduct = (req,res) => {
    try {
        const {pname, pprice, pdesc} = req.body;
        const pimg = req.file.filename;
        if(!(pname && pprice && pdesc && pimg)) {
            res.status(400).send('All input is required');
        }

        const product = new Product({
            pname: pname,
            pprice: pprice,
            pdesc: pdesc,
            pimg: pimg   
        })

        product.save();

        res.status(201).json(product);

    } catch (error) {
        console.log(error);
    }

}

// const fileUpload = (req,res) => {
//     console.log(req.files);
//     res.send('File Upload Successfully');
// }

module.exports = {
    addProduct
    // fileUpload
}