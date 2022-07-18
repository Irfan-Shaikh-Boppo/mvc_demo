const addProduct = (req,res) => {
    res.send('Add Product Page')
}

const fileUpload = (req,res) => {
    console.log(req.files);
    res.send('File Upload Successfully');
}

module.exports = {
    addProduct,
    fileUpload
}