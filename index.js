const express = require("express");
const app = express();
const port = 300;

const datas = [
  {
    id: 1,
    nombre: "miguel",
    apellido: "rendon",
  },
  {
    id: 2,
    nombre: "miguel",
    apellido: "rendon",
  },
];
// Get
 
app.get("/", (require, response) => {
  response.send(" data: { nombre: miguel, apellido: juan }");
});

app.get("/usuarios/:id", (require, response) => {
  const usurioId = require.params.id;

  const userData = datas.find((data) => {
    console.log("data", data);
    if(data.id == usurioId){
        return data;
    }
  });
  if(!userData){
    response.status(500).send('Something broke!');
  }
  console.log("userData", userData);
  console.log("usurioId", usurioId);
//   response.send(
//     `el usuario numero del usuario que mando por parametros es =  ${usurioId} `
//   );
response.json(userData)
});

app.post("/usuarios", function (require, response) {
  console.log("require.body", require.body);
  response.send("Creando Mi primer Post");
});

app.listen(port, () => {
  console.log(`Imprimiento mi pueto de salida http://localhost:${port}`);
});
