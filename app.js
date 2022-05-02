const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from new app!');
})


























app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
 })