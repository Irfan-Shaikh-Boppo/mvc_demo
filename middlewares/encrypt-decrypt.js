const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const text_hash = (textData) => {
    ans_hash = bcrypt.hashSync(textData, salt);
    return ans_hash;
}

const compare_hash = (actualData,encData) => {
    return bcrypt.compareSync(actualData,encData)
}

module.exports = {
    text_hash,
    compare_hash
};