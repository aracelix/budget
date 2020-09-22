const express = require('express');
const app = express();
const transactions = require('./routes/transactions');

//Example of importing a router that groups subroutes together
app.use('/transactions', transactions);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});