var db = require('../db');

module.exports = {
  getAll: function (callback = () => {}) {
    db.connection.query('SELECT * FROM users', (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  create: function (usersObj, callback = () => {}) {

    db.connection.query('INSERT INTO users (username) VALUES (?)', [usersObj.username], (err, results) => {

      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
};
