const pgClient = require('../models/database');
const SQL = require('sql-template-strings');
const format = require('pg-format');

// function createUser(req, res) {
//   const { password, firstname, lastname, email, phonenumber} = req.body;
//   // query to check if user is in database
//   // if it doesn't exist, insert values into user table 
//   const createUserStr = '';
//   const createUserValues = '';
//   pgClient.query(format(newUserStr, newUserValues), (err, result) => {
//     if (err) res.status(400).send('error');
//     else res.send('New user has been created');
//   })
// }

function verifyRest(req, res) {
  const { email, password } = req.body;
  // console.log(req.body);
  const values = [email, password];
  // console.log(values);
  const verifyRestStr = 'SELECT * FROM restaurants WHERE rest_email = $1 AND rest_password = $2;';
  pgClient.query(verifyRestStr, values, (err, result) => {
    if (err) res.status(400).json({ error: 'Email or password is incorrect' });
    else res.status(200).json(result.rows[0]);
  })
}

function displayRests(req, res) {
  const displayRestsStr = 'SELECT * FROM restaurants;';
  pgClient.query(displayRestsStr, (err, result) => {
    if (err) res.status(400).json({ error: 'Could not retrieve restaurants' });
    else res.status(200).json(result.rows);
  });
}

function getRestMenu(req, res) {
  const { fkRestId } = req.params;
  const values = [fkRestId];
  const getMenuStr = 'SELECT * FROM menu_items WHERE fk_rest_id = $1;';
  pgClient.query(getMenuStr, values, (err, result) => {
    if (err) res.status(400).json({ error: 'Could not retrieve this menu' });
    else res.status(200).json(result.rows);
  });
}

module.exports = { verifyRest, displayRests, getRestMenu };
