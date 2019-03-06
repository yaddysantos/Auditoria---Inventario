let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let auditorSchema = new Schema({
     cedulas: {type: String },
     nombres: {type: String },
     apellidos: {type: String },
     correos: {type: String },
     telefonos: {type: String },
     claves: {type: String}
}, {versionKey: false});

let auditor = mongoose.model('auditors', auditorSchema);

module.exports = auditor;