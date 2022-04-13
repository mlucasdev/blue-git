const express = require('express');
const port = 3001;
const app = express();

app.get('/', (req, res) => {
  console.log('Hello World');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
