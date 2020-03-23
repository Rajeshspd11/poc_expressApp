//core modules
const express = require('express');

//custom modules
const home = require('./routes/homeRoutes');
const admin = require('./routes/adminRoutes');
const index = require('./homePage');
const timeMiddleware = require('./middleware/timeMiddleware');
const details =require('./routes/detailsRoutes');

const app = express();


app.use('/', timeMiddleware);
app.use('/home', home);
app.use('/details', details);
app.use('/admin', admin);
app.use('/', index);

app.listen(3001);