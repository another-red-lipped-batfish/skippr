const pgClient = require('../models/database');

function displayOrders(req, res) {

}

function submitOrder(req, res) {
  const { userId, restId, menuItems } = req.body;
  const idValues = [userId, restId];
  const createOrderStr = 'INSERT INTO orders (order_ready, fk_user_id, fk_rest_id) VALUES (false, (SELECT user_id from users WHERE user_id = $1 ), (SELECT rest_id from restaurants WHERE     rest_id = $2 )) RETURNING order_id;';
  pgClient.query(createOrderStr, idValues, (err, result) => {
    if (err) res.status(400).json({ error: 'Unable to submit order' });
    else {
      const orderId = result.rows[0].order_id;
      Promise.all(menuItems.map((item) => {
        const itemValues = [orderId, item];
        const insertItemStr = 'INSERT INTO order_items (fk_orders, fk_menu_item) VALUES ($1, (SELECT menu_item_id from menu_items WHERE menu_item_id = $2)) RETURNING order_items.order_item_id AS order_item_id;';
        return pgClient.query(insertItemStr, itemValues);
      }))
        .then(() => res.status(200).json({
          message: 'Your order was submitted successfully',
          orderId,
        }))
        .catch(() => res.status(400).json({ error: 'Unable to submit order. Please try again.' }));
    }
  });
}

module.exports = { displayOrders, submitOrder };
