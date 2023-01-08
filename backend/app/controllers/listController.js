const List  = require('../models/list');

const listController = {
  readAll: async function (req, res) {
    try {
      const results = await List.findAll();
      res.json(results);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Erreur lors de la récupération de la liste des argonautes',
      });
    }
  },
  create: async function (req, res) {
    try {
      const { name } = req.body;
      console.log(req.body);
      
      if (!name) {
        res.status(400).json({
          message: 'Le champ nom est obligatoire',
        });
      } else {
        const newList = await List.create({
          name: name,
        });
        res.json(newList);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Erreur lors de la création de l argonaute',
      });
    }
  },
  delete: async function (req, res) {
    try {
      const id = req.params.id;
      const list = await List.findByPk(id);
      // si on trouve la liste on la supprime
      if (list) {
        await list.destroy();
        res.json('Argonaute supprimée');
      }
      // sinon on envoie une réponse explicite pour dire qu'on a rien trouvé
      else {
        res.status(404).json(`Aucun argonaute à l'id ${id}`);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json({
        message: 'Erreur'
      });
    }
  },
};

module.exports = listController;
