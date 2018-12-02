require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const db = require('./models/database');
const userController = require('./controllers/user-controller');
const orderController = require('./controllers/order-controller');
const restaurantController = require('./controllers/restaurant-controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/restaurants', restaurantController.displayRests);
app.get('/restaurants/:fkRestId', restaurantController.getRestMenu);
app.get('/orders', orderController.displayOrders);

app.post('/user/login', userController.verifyUser);
app.post('/restaurant/login', restaurantController.verifyRest);
app.post('/signup', userController.createUser);
app.post('/order', orderController.submitOrder);
app.post('/order/:id');




app.listen(3000);
