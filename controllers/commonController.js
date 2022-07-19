const User = require("../models/user");
const oldUserService = require("../services/getOldUser");
const Product = require('../models/addProduct');
const encdec = require('../middlewares/encrypt-decrypt');
const jwt = require("jsonwebtoken");


const productLists = async(req,res) => {
    // res.send('Product Lists');
    const productData = await Product.find({});
    res.status(201).json({total: productData.length, productLists : productData});
}

const registerUsers = async(req,res) => {
    try {
        const {first_name, last_name, email, password, utype} = req.body;
        if(!(first_name && last_name && email && password && utype)) {
            res.status(400).send('All input is required');
        }
        
        const oldUser = oldUserService.getOldUser(email);

        if(oldUser){
            return res.status(409).send('User already exists. Please Login');
        }

        // encryptedPassword = await bcrypt.hash(password, 10);
        encryptedPassword = encdec.text_hash(password);

        const user = new User({
            first_name: first_name,
            last_name: last_name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            utype: utype   
        })

        user.save();
        
        const token = jwt.sign({
            user_id: user._id,
            email: email,
            utype: utype
        },process.env.TOKEN_KEY,{
            expiresIn: '30m'
        })

        user.token = token;

        res.status(201).json(user);

    } catch (error) {
        console.log(error);
    }
}

const loginUser = async(req,res) => {
    try {
        const {email, password} = req.body;
        if(!(email && password)) {
            res.status(400).send('All input is required');
        }

        const user = await User.findOne({ email });

        const compare = encdec.compare_hash(password, user.password)

        if(user && compare ){

        const token = jwt.sign({
            user_id: user._id,
            email: email,
            utype: user.utype
        },process.env.TOKEN_KEY,{
            expiresIn: '30m'
        })

        user.token = token;

        res.status(200).json(user.token);
    }
    // res.send('Invalid Credentials');

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    productLists,
    registerUsers,
    loginUser
}