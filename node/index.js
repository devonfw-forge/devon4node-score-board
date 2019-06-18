const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

app.post('/update', function(req, res) {
  fs.writeFile('./data.json', JSON.stringify(req.body), (err) => {
    if (err) {
      console.log('Error writing file', err);
      res.send({
        data: err,
        code: 500,
        error: true,
      });
    } else {
      console.log('Successfully updated file');
      res.send({
        data: 'ok',
        code: 200,
        error: false,
      });
    }
  });
});

app.listen(3000, function() {
  console.log('API listening in port 3000');
});
