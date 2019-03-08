let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let formularioc3Schema = new Schema({
     ids: {type: String },
     clientes: {type: String},
     pregunta1s: {type: Number, max:3 },
     pregunta2s: {type: Number, max:3 },
     pregunta3s: {type: Number, max:3 },
     pregunta4s: {type: Number, max:3 },
     pregunta5s: {type: Number, max:3 },
     pregunta6s: {type: Number, max:3 },
     pregunta7s: {type: Number, max:3 },
     pregunta8s: {type: Number, max:3 },
     pregunta9s: {type: Number, max:3 },
     pregunta10s: {type: Number, max:3 },
     pregunta11s: {type: Number, max:3 },
     pregunta12s: {type: Number, max:3 },
     pregunta13s: {type: Number, max:3 },
     pregunta14s: {type: Number, max:3 },
     pregunta15s: {type: Number, max:3 },
     pregunta16s: {type: Number, max:3 },
     docs: {type: Number},
     totalss: {type: Number},
     totalns: {type: Number},
     totalnss: {type: Number}
}, {versionKey: false});

let formularioc3 = mongoose.model('formularioc3s', formularioc3Schema);

module.exports = formularioc3;