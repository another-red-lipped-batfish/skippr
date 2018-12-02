const pgClient = require('../models/database');
const SQL = require('sql-template-strings');
const format = require('pg-format');

function createUser(req, res) {
  const { password, firstname, lastname, email, phonenumber} = req.body;
  // query to check if user is in database
  // if it doesn't exist, insert values into user table 
  const createUserStr = '';
  const createUserValues = '';
  pgClient.query(format(newUserStr, newUserValues), (err, result) => {
    if (err) res.status(400).send('error');
    else res.send('New user has been created');
  });
}

function verifyUser(req, res) {
  const { email, password } = req.body;
  // console.log(req.body);
  const values = [email, password];
  // console.log(values);
  const verifyUserStr = 'SELECT * FROM users WHERE user_email = $1 AND user_password = $2;';
  pgClient.query(verifyUserStr, values, (err, result) => {
    if (err) res.status(500).json({ error: 'error' });
    else if (result.rows.length === 0) res.status(400).json({ error: 'Incorrect email or password' });
    else res.status(200).json(result.rows[0]);
  });
}

module.exports = { createUser, verifyUser };
