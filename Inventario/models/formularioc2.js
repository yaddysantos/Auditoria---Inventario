let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let formularioc2Schema = new Schema({
     pregunta1s: {type: Number, max:3 },
     pregunta2s: {type: Number, max:3 },
     pregunta3s: {type: Number, max:3 },
     pregunta4s: {type: Number, max:3 },
     pregunta5s: {type: Number, max:3 },
     doc: {type: Number},
     totals: {type: Number},
     totaln: {type: Number},
     totalns: {type: Number}
}, {versionKey: false});

let formularioc2 = mongoose.model('formularioc2s', formularioc2Schema);

module.exports = formularioc2;