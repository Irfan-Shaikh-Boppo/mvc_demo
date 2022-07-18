const mongoose = require('mongoose');

exports.connect = () => {
mongoose.connect(process.env.DBPATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
   console.log('Connection successful'); 
}).catch((err) => {
    console.log(err);
});
}