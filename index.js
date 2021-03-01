const bodyParser = require('body-parser')
const express = require('express');
const appRouters = require('./routes');
const errorHandler = require('./middlewares/errorHandlers');
const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.APP_HOST;


const mongoose = require('./db')();
const db = mongoose.connection;
db.once('open', function() {
    console.log("Open MongoDB")
})
app.use(cors())

app.use((req, res, next) => {
  res.set('Access-Control-Expose-Headers', 'Token');
  next()
});

app.use(bodyParser.json())

app.use('/', appRouters);
// app.use(errorHandler.bodyParser);


// Error Middleware
// app.use(errorHandler.genericErrorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${host}:${port}`)
});