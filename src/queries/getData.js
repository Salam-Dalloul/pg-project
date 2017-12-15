const dbConnection = require('../database/db_connection');

const sql = 'select * from books;';

const getData = (cb) => {
  dbConnection.query(sql, (err, res) =>{
      if(err) cb(err);
      cb(null, res.rows)
  })
}

module.exports = getData;
