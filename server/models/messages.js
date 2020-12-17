var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT messages.text, messages.id, messages.createdAt, messages.roomname, users.username FROM messages INNER JOIN users ON messages.username = users.id', (err, messages) => {
      if (err) {
        callback(err);
      } else {
        callback(null, messages);
      }
    });
  }, // a function which produces all the messages
  create: function (messageObj, callback) {
    db.connection.query('INSERT INTO messages (?, ?, ?, ?) ');
  } // a function which can be used to insert a message into the database
};

// SELECT teachers.name FROM teachers, departments
//   WHERE teachers.department = departments.id;