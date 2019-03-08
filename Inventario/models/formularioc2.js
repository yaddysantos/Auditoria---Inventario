let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let formularioc2Schema = new Schema({
     clientes: {type: String},
     pregunta1s: {type: Number, max:3 },
     pregunta2s: {type: Number, max:3 },
     pregunta3s: {type: Number, max:3 },
     pregunta4s: {type: Number, max:3 },
     pregunta5s: {type: Number, max:3 },
     docs: {type: Number},
     totalss: {type: Number},
     totalns: {type: Number},
     totalnss: {type: Number}
}, {versionKey: false});

let formularioc2 = mongoose.model('formularioc2s', formularioc2Schema);

module.exports = formularioc2;