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

router.post("/usuarios", function (request, response) {
  const usuario = request.body;
  console.log("usuario", usuario);
  const longitud = usuarios.length + 1;

  const dataInfo = {
    id: longitud,
    nombre: usuario.name,
    apellido: usuario.apellido,
  };

  // Destructurin
  // const dataInfo = {
  //   id: longitud,
  //   ...usuario
  // }

  usuarios.push(dataInfo);
  response.json(usuarios);
});

//  ----- Fin POST ----

//  ----- Inicio PATCH ----


router.patch("/usuarios", function (request, response) {
  const usuario = request.body;
  const userData = usuarios.map((data) => {
    if (data.id === usuario.id) {
      data.nombre = usuario.nombre;
      data.apellido = usuario.apellido;
      return data;
    }
    return data;
  });
  response.json(userData);
});

//  ----- Fin PATCH ----


//  ----- Inicio PUT----

router.put("/usuarios/:id", function (request, response) {
  const usuarioId = request.params.id
  const usuario = request.body;
  const userData = usuarios.map((data) => {
    if (data.id === Number(usuarioId)) {
      data.id = usuario.id;
      data.nombre = usuario.nombre;
      data.apellido = usuario.apellido;
      return data;
    }
    return data;
  });
  response.json(userData);
});

//  ----- Inicio PUT----


//  ----- Inicio Delete----


router.delete("/usuarios/:id", function(request, response) {
  const usuarioId = request.params.id;
})



app.listen(port, () => {
  console.log(`Imprimiento mi pueto de salida http://localhost:${port}`);
});

app.use(router);
