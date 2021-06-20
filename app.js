const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);