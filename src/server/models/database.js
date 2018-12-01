const pg = require('pg');

const db = {};
const uri = '';

pg.connect(uri, (err, db_) => {
  if (err) throw new Error(err);
  db.conn = db_;
});

module.exports = db;
