const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.send('Hello from new app!');
})


























app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
 })