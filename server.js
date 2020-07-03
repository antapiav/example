const express = require('express');

const app = express();

app.use(express.static('./dist/example'));

app.get('/*', function (req, res) {
  response.json({ info: 'Bienvenido api practitioner' });//res.sendFile(path.join(__dirname, 'angular-build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);