const express = require('express');
const app = express();
const portNumber = 3000;
const clipboardy = require('clipboardy');
const serveIndex = require('serve-index');

app.use(express.static('src'));
app.use(express.static('node_modules'));
app.use(serveIndex('src'));

app.listen(portNumber, () => {
  const url = `http://localhost:${portNumber}`;
  clipboardy.writeSync(url);
  console.log(`Express web server started: ${url}`);
});
