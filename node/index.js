const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());

app.get('/', function(req, res) {
  fs.readFile('./data.json', 'utf8', (err, dataString) => {
    if (err) {
      console.log('File read failed:', err);
      return;
    }

    res.send({
      data: JSON.parse(dataString),
      code: 200,
      error: false,
    });
  });
});

app.listen(3000, function() {
  console.log('API listening in port 3000');
});
