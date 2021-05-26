const express = require("express");
const app = express();
const port = 3000;

app.get("/", (require, response) => {
  response.send(" data: { nombre: miguel, apellido: juan }");
});

app.listen(port, () => {
  console.log(`Imprimiento mi pueto de salida http://localhost:${port}`);
});
