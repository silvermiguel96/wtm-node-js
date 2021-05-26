const express = require("express");
const app = express();
const port = 3000;

// Get
app.get("/", (require, response) => {
  response.send(" data: { nombre: miguel, apellido: juan }");
});

app.get("/usuarios/:id", (require, response) => {
    const usurioId = require.params.id;
    console.log('usurioId', usurioId);
    response.send(`el usuario numero del usuario que mando por parametros es =  ${usurioId} `)
  });


app.post("/usuarios", function (require, response){
    console.log('require.body', require.body);
    response.send('Creando Mi primer Post');
})

app.listen(port, () => {
  console.log(`Imprimiento mi pueto de salida http://localhost:${port}`);
});
