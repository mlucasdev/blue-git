const express = require("express");
const cors = require("cors");
const route = require("./src/routes/paletas.routes.js");

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/paletas", route);

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});