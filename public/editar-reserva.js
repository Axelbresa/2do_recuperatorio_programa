//const formReserva = document.querySelector('#formNuevaReserva');
const formReserva=document.querySelector("#formNuevaReserva");
const reservaId = formReserva.dataset.id;

// Aleternativa utilizando la captura del pathname
// const reservaId = window.location.pathname.split('/').pop();

const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const precio = document.querySelector("#precio").value;
  const hora = document.querySelector("#hora").value;
  const fecha = document.querySelector("#fecha").value;
  //const  cant_ticket = document.querySelector("# cant_ticket").value;
  const pelicula = document.querySelector("#pelicula").value;
  const duracion = document.querySelector("#duracion").value;
  const cantidad_personas = document.querySelector("#cantidad_personas").value;
  const telefono = document.querySelector("#telefono").value;
  const email = document.querySelector("#email").value;


document.addEventListener('DOMContentLoaded', async () => {
    // Traemos la reserva que se va a editar
    const response = await fetch(`/api/${reservaId}`);
    const data = await response.json();

    // Mostrar en el formulario los datos de la reserva que se quiere actualizar
    nombre.value = data.nombre;
    apellido.value = data.apellido;
    precio.value = data.precio;
    hora.value = data.hora;
    //cant_ticket.value = data.cant_ticket;
    pelicula.value = data.pelicula;
    cantidad_personas.value = data.cantidad_personas;
    duracion.value = data.duracion;
    telefono.value = data.telefono;
    email.value = data.email;
    fecha.value = dayjs(data.fecha).format('DD-MM-YYYY HH:mm');
});


formReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    reservaActualizada = {
        nombre: nombre.value,
        apellido: apellido.value,
        precio: precio.value,
        hora: hora.value,
        fecha: fecha.value,
        //cant_ticket: cant_ticket.value,
        pelicula: pelicula.value,
        cantidad_personas: cantidad_personas.value,
        duracion: duracion.value,
        telefono: telefono.value,
        email: email.value,
    };


    // Se envían los nuevos datos al servidor express
    const response = await fetch(`/api/${reservaId}`, {
        method: 'PUT',
        body: JSON.stringify(reservaActualizada),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const respToJson = await response.json();

    if (response.status !== 200) {
        return Swal.fire({
            title: 'Error',
            text: respToJson.message,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    };


    // Mostrar mensajes al usuario
    Swal.fire({
        title: 'Reserva actualizada',
        text: respToJson.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });

    

    setTimeout(() => {
        // Redireccionar al usuario
        window.location.href = "/"
    }, 2000);
});