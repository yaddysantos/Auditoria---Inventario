let mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
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

auditorSchema.methods.matchPassword = function(claves){
     return bcrypt.compare(claves, this.claves);
};

module.exports = auditor;