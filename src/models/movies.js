const { Schema, model } = require('mongoose')

const moviesSchema = new Schema({
    nombre: String,
    categoria: String,
    duracion: String,
    director: String,
    fecha_lanzamiento: String,
    descripcion: String,
    elenco: String,
    imagen: String
}, {
    timestamps: true
});

module.exports = model('Movies', moviesSchema);