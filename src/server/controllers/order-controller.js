const pgClient = require('../models/database');

function displayOrders(req, res) {

}

function submitOrder(req, res) {
  const {} = req.body;
  const createOrderStr = '';
  const values = [];
  pgClient.query(format(createOrderStr, values), (err, result) => {
    if (err) res.status(400).json({ error: 'Unable to submit order '});
    else res.status(200).json(result.rows[0]);
  });
}

module.exports = { displayOrders, submitOrder };
