var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, users) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(200).json(users);
      }
    });
  },
  post: function (req, res) {
    models.users.create(req.body, (err, newUser) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(201).json(newUser);
      }
    });
  }
};
