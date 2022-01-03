const mongoose = require('mongoose');
const MongoURI = process.env.MongoURI

mongoose.connect(MongoURI, {useNewUrlParser: true}, function(){
    console.log(`Conected to database`);
});