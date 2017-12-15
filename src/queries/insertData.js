const dbConnection = require('../database/db_connection');

const inserData = (name, location, cb) => {
  const sql = {
    text: 'insert into usersinformations (name, location) values ($1, $2);',
    values: [name, location],
  };


  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};

module.exports = inserData;
