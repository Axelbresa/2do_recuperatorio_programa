const formCrearReserva = document.querySelector("#formNuevaReserva");



formCrearReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const precio = document.querySelector("#precio").value;
  const hora = document.querySelector("#hora").value;
  const fecha = document.querySelector("#fecha").value;
  //const cant_ticket = document.querySelector("#cant_ticket").value;
  const pelicula = document.querySelector("#pelicula").value;
  const duracion = document.querySelector("#duracion").value;
  const cantidad_personas = document.querySelector("#cantidad_personas").value;
  const telefono = document.querySelector("#telefono").value;
  const email = document.querySelector("#email").value;

  const reserva = {
    nombre,
    apellido,
    precio,
    hora, 
    fecha,
    pelicula,
    duracion,
    cantidad_personas,
    telefono,
    email
  };

  const response = await fetch("/api/", {
    method: "POST",
    body: JSON.stringify(reserva),
    headers: {
      "Content-Type": "application/json", // Cuando se envían datos JSON al servidor
    },
  });

  const data = await response.json();

  alert(data.message);
  window.location.href = "/";
});
