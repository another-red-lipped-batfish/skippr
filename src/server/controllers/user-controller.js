const db = require('../models/database');

function createUser(req, res) {
  const { username, password, firstname, lastname, email, phonenumber} = req.body;

  const newUserStr = '';

}

function verifyUser(req, res) {

}



module.exports = { createUser, verifyUser };
