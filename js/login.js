
function alertMensaje(mensaje, errorType, fade){
  $("#alertMensaje").removeClass()
  $("#alertMensaje").addClass("alert alert-" + errorType)
  $("#alertMensaje").text("!"+ mensaje)
  $("#alertMensaje").fadeIn(1000);
  if(fade){
    setTimeout(function() { 
      $('#alertMensaje').fadeOut(1000); 
  }, 5000);
  }
 
}


$("#login").submit(function (e) {
  e.preventDefault();
  const email = $("#inputEmail").val();
  const pass = $("#inputPassword").val();

  if (email === "glagos@hola.cl" && pass === "pikaxu") {
    location.href = "dashboard.html";
  } else {
    $("#inputEmail").val("");
    $("#inputPassword").val("");
    alertMensaje("Datos de login incorrectos!","danger",true);
  }
});

