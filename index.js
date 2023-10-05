const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

//CORS handling
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

//SERVER initialization
app.listen(3000, () => console.log('Server started on port 3000'))
