const User = require('../models/user');

const getOldUser = async(email) => {
    try {
        const oldUser = await User.findOne({ email });
        return oldUser;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOldUser
};