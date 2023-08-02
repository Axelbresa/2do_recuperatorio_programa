// Imports
const cors = require('cors');
const express = require('express');

const path = require('path');

const app = express();

// Middlewares
// TODO: Implementar middlewares


const PORT = process.env.PORT || 3200;

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./src/routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
process.env.PORT 
// Starting the server
app.listen(process.env.PORT, function (req, res) {
    console.log("la app esta escuchando en http://localhost: " + PORT);
  });