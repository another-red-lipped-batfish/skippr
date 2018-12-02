const pg = require('pg');
// const pgp = require('pg-promise')(options);
// const pool = new pg.Pool();

const uri = 'postgres://bjggycej:jJQdZNJmfDxwVmSrL1xMl5UAXofuZ7n2@pellefant.db.elephantsql.com:5432/bjggycej';

const pgClient = new pg.Client(uri);
pgClient.connect();
// pg.connect(uri, (err, db_) => {
//   if (err) throw new Error(err);
//   db.conn = db_;
// });


module.exports = pgClient;
