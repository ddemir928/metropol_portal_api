const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://metropol-api:metropol10@ds243717.mlab.com:43717/heroku_g7xm9wtd',{ useNewUrlParser: true });

    mongoose.connection.on('open',()=> {
        console.log('MongoDB:Connected');
    });
    mongoose.connection.on('error',(err)=> {
        console.log('MongoDB:Error',err);
    });

    mongoose.Promise = global.Promise;

};