import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: [true, "Ter um titulo é obrigatorio"]},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: [true, "Autor é obrigatorio"]},
    editora: {type: String, required: [true, "O nome da editora é obrigatorio"]},
    numeroPaginas: {type: Number}
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;