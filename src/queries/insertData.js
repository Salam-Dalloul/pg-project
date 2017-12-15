const dbConnection = require('../database/db_connection');

const insertData = (title, author, cb) => {
  const sql = {
    text: 'insert into books (title, author) values ($1, $2);',
    values: [title, author],
  };

  dbConnection.query(sql, (err, res) => {
    if(err) cb(err);
    cb(null, res.rows);
  });
};

module.exports = insertData;
