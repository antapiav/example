const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/example'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/example/index.html'));
  response.json({ info: 'Bienvenido api practitioner' });//res.sendFile(path.join(__dirname, 'angular-build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);