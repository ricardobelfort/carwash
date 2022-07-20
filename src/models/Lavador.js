import mongoose from 'mongoose';

const lavadorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    cpf: { type: Number, required: true },
    telefone: { type: Number }
  },
  {
    versionKey: false
  }
);

const lavadores = mongoose.model('lavadores', lavadorSchema);

export default lavadores;
