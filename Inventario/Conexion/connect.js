let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/aufitoria_db', {useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));
module.exports = mongoose;