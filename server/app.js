const express = require('express');
const path = require('path');
// const proxy = require('express-http-proxy');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use('/products', createProxyMiddleware({ target: 'http://ec2-54-176-165-31.us-west-1.compute.amazonaws.com/', changeOrigin: true }));
app.use('/carousel', createProxyMiddleware({ target: 'http://ec2-54-177-202-87.us-west-1.compute.amazonaws.com', changeOrigin: true }));
app.use('/questions', createProxyMiddleware({ target: 'http://ec2-54-219-98-209.us-west-1.compute.amazonaws.com', changeOrigin: true }));
app.use('/reviews', createProxyMiddleware({ target: 'http://ec2-54-215-97-198.us-west-1.compute.amazonaws.com/', changeOrigin: true }));


// app.use('/products', proxy('http://localhost:3001'));
// app.use('/carousel', proxy('http://localhost:3002'));
// app.use('/questions', proxy('http://localhost:3003'));
// app.use('/reviews', proxy('http://localhost:3000'));

app.get('/:index([0-9]|[0-9][0-9])', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;