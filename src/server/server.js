const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./controllers/user-controller');
const orderController = require('./controllers/order-controller');
const restaurantController = require('./controllers/restaurant-controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/restaurants');
app.get('restaurants/:name', )
app.get('orders');

app.post('/login', userController.createUser);
app.post('/signup', userController.verifyUser);
app.post('/order');
app.post('/order/:id');




app.listen(3000);
