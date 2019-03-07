let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let formularioc5Schema = new Schema({
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
     pregunta17s: {type: Number, max:3 },
     pregunta18s: {type: Number, max:3 },
     pregunta19s: {type: Number, max:3 },
     pregunta20s: {type: Number, max:3 },
     pregunta21s: {type: Number, max:3 },
     doc: {type: Number},
     totals: {type: Number},
     totaln: {type: Number},
     totalns: {type: Number}
}, {versionKey: false});

let formularioc5 = mongoose.model('formularioc5s', formularioc5Schema);