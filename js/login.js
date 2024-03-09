function alertMensaje(mensaje, errorType, fade) {
  $("#alertMensaje").removeClass();
  $("#alertMensaje").addClass("alert alert-" + errorType);
  $("#alertMensaje").text("!" + mensaje);
  $("#alertMensaje").fadeIn(1000);
  if (fade) {
    setTimeout(function () {
      $("#alertMensaje").fadeOut(1000);
    }, 5000);
  }
}

$("#login-register").submit(function (e) {
  e.preventDefault();

  const email = $("#inputEmail").val();
  const pass = $("#inputPassword").val();
  const botonPresionado = $(document.activeElement).text().trim();
  if (localStorage.getItem("usuarios") === null) {
    localStorage.setItem("usuarios", JSON.stringify([]));
  }
  
  if (botonPresionado === "Login") {
    datos = JSON.parse(localStorage.getItem("usuarios"));
  
    if(datos.some(e => e.email === email)){
      $.each(datos, function (index, persona) {
        if (email === persona.email && pass === persona.password) {
          location.href = "dashboard.html";
        } else {
          $("#inputEmail").val("");
          $("#inputPassword").val("");
          alertMensaje("Datos de login incorrectos!", "danger", true);
        }
      });
    }
    else{
      $("#inputEmail").val("");
      $("#inputPassword").val("");
      alertMensaje("Usuario no existe", "danger", true);
    }

       
  } else if (botonPresionado === "Registrar") {
  
    if (localStorage.getItem("usuarios") !== null) {
      datos = JSON.parse(localStorage.getItem("usuarios"));
      datos.push({
        email: email,
        password: pass,
      });
      
      localStorage.setItem("usuarios", JSON.stringify(datos));
      alertMensaje("Usuario Agregado con exito.", "success", true);
      $("#inputEmail").val("");
      $("#inputPassword").val("");
    }
   
  }
});
