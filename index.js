const { response, request } = require("express");
const express = require("express");
const bodyParser = require("body-parser"); 
const router = express.Router();
const port = 3000;
const app = express();
const usuarios = require("./usuarios");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Prueba de que funcina la ruta
app.get("/", (require, response) => {
  response.send("Hola la ruta funciona");
});

// Obtener todos los usuarios
app.get("/usuarios", (require, response) => {
  response.json(usuarios);
});

// obtener un usuario por su id
app.get("/usuarios/:id", (require, response) => {
  const usurioId = require.params.id;
  const userData = usuarios.find((data) => {
    if (data.id == usurioId) {
      return data;
    }
  });
  if (!userData) {
    response.status(500).send("No existe el usuario con ese id!");
  }
  response.json(userData);
});

// --------- FIn get -------



// ----- POST ----

router.post("/usuarios", function(request, response ){
    const usuario = request.body
    usuarios.push(usuario)
    response.json(usuarios)
})


//  ----- Fin POST ----

app.listen(port, () => {
  console.log(`Imprimiento mi pueto de salida http://localhost:${port}`);
});


app.use(router)