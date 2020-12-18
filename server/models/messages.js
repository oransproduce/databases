var db = require('../db');
var users = require('./users.js');

module.exports = {
  getAll: function (callback = () => { }) {
    console.log('in get all fn');
    db.connection.query('SELECT messages.text AS text, messages.id AS id, messages.createdAt AS createdAt, messages.roomname AS roomname, users.username AS username FROM messages INNER JOIN users ON messages.username = users.id', (err, messages) => {
      console.log(messages);
      if (err) {
        callback(err);
      } else {
        callback(null, messages);
      }
    });
  }, // a function which produces all the messages
  create: function (messageObj, callback = () => { }) {

    db.connection.query('SELECT * FROM users where username = ?', [messageObj.username], (err, username) => {
      if (err) {
        callback(err);
      } else {
        if (username.length === 0) {
          users.create((err, results) => {
            db.connection.query('INSERT INTO messages (username, text, roomname) VALUES (?, ?, ?)', [results.insertId, messageObj.text, messageObj.roomname], (err, results) => {
              if (err) {
                callback(err);
              } else {
                callback(null, results);
              }
            });
          });
        } else {
          db.connection.query('INSERT INTO messages (username, text, roomname) VALUES (?, ?, ?)', [username[0].id, messageObj.text, messageObj.roomname], (err, results) => {
            if (err) {
              callback(err);
            } else {
              callback(null, results);
            }
          });
        }
      }
    });
  }
};