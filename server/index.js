const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use('/product', proxy('http://localhost:3001'));
app.use('/carousel', proxy('http://localhost:3002'));
app.use('/questions', proxy('http://localhost:3003'));
app.use('/reviews', proxy('http://localhost:3004'));

app.get('/:index([0-9]|[0-9][0-9])', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`serving files at http://localhost:${PORT}`);
});

