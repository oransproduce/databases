var db = require('../db');
var users = require('./users.js');

module.exports = {
  getAll: function (callback = () => { }) {

    db.connection.query('SELECT messages.text AS text, messages.id AS id, messages.createdAt AS createdAt, messages.roomname AS roomname, users.username AS username FROM messages INNER JOIN users ON messages.username = users.id', (err, messages) => {

      if (err) {
        callback(err);
      } else {
        callback(null, messages);
      }
    });
  }, // a function which produces all the messages
  create: function (messageObj, callback = () => { }) {
    let date = new Date();
    let dateString = '';
    dateString += date.toLocaleDateString('en-US');
    dateString += ' ' + date.toLocaleTimeString('en-US');
    console.log(dateString);

    db.connection.query('SELECT * FROM users WHERE username = ?', [messageObj.username], (err, username) => {
      if (err) {
        callback(err);
      } else {
        if (username.length === 0) {

          users.create({username: messageObj.username}, (err, results) => {

            db.connection.query('INSERT INTO messages (username, text, roomname, createdAt) VALUES (?, ?, ?, ?)', [results.insertId, messageObj.text, messageObj.roomname, dateString], (err, results, fields) => {
              if (err) {
                callback(err);
              } else {

                callback(null, {createdAt: dateString, id: results.insertId});
              }
            });
          });
        } else {

          db.connection.query('INSERT INTO messages (username, text, roomname, createdAt) VALUES (?, ?, ?, ?)', [username[0].id, messageObj.text, messageObj.roomname, dateString], (err, results, fields) => {
            if (err) {
              callback(err);
            } else {

              callback(null, {createdAt: dateString, id: results.insertId});
            }
          });
        }
      }
    });
  }
};