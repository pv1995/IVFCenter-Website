var mongoose = require('mongoose');


//const MONGODB_URI =  process.env.PORT || `mongodb://localhost:27017/DrRama`//to chsnge
const MONGODB_URI = 'mongodb:///admin:123dhruv@ds251022.mlab.com:51022/drrama'//to chsnge




mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });

module.exports = {mongoose};
