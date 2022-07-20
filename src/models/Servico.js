import mongoose from 'mongoose';

const servicoSchema = new mongoose.Schema(
  {
    id: { type: String },
    servico: { type: String, required: true },
    valor: { type: Number, required: true }
  },
  {
    versionKey: false
  }
);

const servicos = mongoose.model('servicos', servicoSchema);

export default servicos;
