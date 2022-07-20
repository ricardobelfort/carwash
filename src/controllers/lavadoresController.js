import lavadores from '../models/Lavador.js';

class lavadorController {
  static listarLavadores = (req, res) => {
    lavadores.find((err, lavadores) => {
      res.status(200).json(lavadores);
    });
  };

  static cadastrarLavador = (req, res) => {
    let lavador = new lavadores(req.body);
    lavador.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar um lavador.` });
      } else {
        res.status(201).send(lavador.toJSON());
      }
    });
  };

  static atualizarLavador = (req, res) => {
    const id = req.params.id;

    lavadores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Lavador atualizado com sucesso!' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static buscarLavadorPorId = (req, res) => {
    const id = req.params.id;

    lavadores.findById(id, (err, lavadores) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id do lavador não encontrado.` });
      } else {
        res.status(200).send(lavadores);
      }
    });
  };

  static removerLavadorPorId = (req, res) => {
    const id = req.params.id;

    lavadores.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Lavador removido com sucesso!' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default lavadorController;
