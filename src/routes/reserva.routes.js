// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const {
    lista,
    crearreserva,
    crearUsuarios,
    listadoReserva,
    renderEditar,
    obtenerUnaReserva,
    actualizarReserva,
    EliminarReserva
  } = require("../controllers/reserva.controllers");

const router = require('express').Router();


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Vista para todas las reservas
//router.get('/lista-reservas',lista )
router.get('/',lista )


// Formulario para crear una reserva
//router.get('/nueva-reserva', crearreserva)
router.get('/crear', crearreserva)


// Formulario para editar una reserva
//router.get('/editar-reserva/:id', renderEditar )
router.get('/editar/:id', renderEditar )


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/:id', listadoReserva);
 
// Crear una reserva
router.post('/api/',crearUsuarios);

//obtener una reserva
router.get("/api/:id", obtenerUnaReserva);
 

// Actualizar una reserva
router.put('/api/:id', actualizarReserva);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id',EliminarReserva);

 module.exports = router;