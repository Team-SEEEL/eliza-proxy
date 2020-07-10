const app = require('./app');

app.listen(process.env.PORT, () => {
  console.log(`serving files at http://localhost:${process.env.PORT}`);
});

