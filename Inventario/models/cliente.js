let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let clienteSchema = new Schema({
     nits: {type: String},
     nombres: {type: String},
     gerentes: {type: String},
     direcciones: {type: String},
     telefonos: {type: String}
}, {versionKey: false});

let cliente = mongoose.model('clientes', clienteSchema);

module.exports = cliente;