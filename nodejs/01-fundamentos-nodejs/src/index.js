const express = require('express')

const app = express();

//Midleware
app.use(express.json());

/**
 * GET - Buscar
 * POST - Inserir
 * PUT - Alterar
 * PATCH - Alterar uma informação especifica
 * DELETE - Deletar
 * */

/**
 * Tipos de parâmetros
 * 
 * Route Params 
 * Query Params
 * Body Params
 */

app.get("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"])
});

app.post("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
});

app.put("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
});

//localhost:3333
app.listen(3333);