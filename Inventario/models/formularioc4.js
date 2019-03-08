let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let formularioc4Schema = new Schema({
     ids: {type: String },
     clientes: {type: String},
     pregunta1s: {type: Number, max:3 },
     pregunta2s: {type: Number, max:3 },
     pregunta3s: {type: Number, max:3 },
     pregunta4s: {type: Number, max:3 },
     pregunta5s: {type: Number, max:3 },
     pregunta6s: {type: Number, max:3 },
     pregunta7s: {type: Number, max:3 },
     docs: {type: Number},
     totalss: {type: Number},
     totalns: {type: Number},
     totalnss: {type: Number}
}, {versionKey: false});

let formularioc4 = mongoose.model('formularioc4s', formularioc4Schema);

module.exports = formularioc4;