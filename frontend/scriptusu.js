function guardar() {
  event.preventDefault();

  let dni = document.getElementById("dni").value;
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let correo = document.getElementById("correo").value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    "dni": dni,
    "nombre": nombre,
    "apellidos": apellidos,
    "email": correo
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("https://desarrolloseguro.netlify.app/.netlify/functions/usuarios", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.message === "Usuario agregado exitosamente") {
        alert("✅ Usuario guardado correctamente!");
      } else {
        alert("❌ Error: " + result.message);
      }
    })
    .catch((error) => {
      console.error("❌ Error en la petición:", error);
      alert("❌ Error de conexión: " + error.message);
    });
}

function listar() {
  event.preventDefault();
  let ndoc = document.getElementById("numdoc").value;

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch(`https://desarrolloseguro.netlify.app/.netlify/functions/usuarios?iden=${ndoc}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      document.getElementById("rta").innerHTML = JSON.stringify(result);
    })
    .catch((error) => {
      console.error("❌ Error en la petición:", error);
      alert("❌ Error de conexión: " + error.message);
    });
}