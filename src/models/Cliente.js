import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  carro: { type: String, required: true },
  placa: { type: String, required: true },
  telefone: { type: Number, required: true },
  lavador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lavadores',
    required: true
  }
});

const clientes = mongoose.model('clientes', clienteSchema);

export default clientes;
