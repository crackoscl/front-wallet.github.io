(function () {
  if (localStorage.getItem("listaUsuarios")) {
    tablabody = $("#tablecontactos > tbody");
    datos = JSON.parse(localStorage.getItem("listaUsuarios"));
    $.each(datos, function (index, persona) {
      var row =
        "<tr>" +
        "<td>" +
        (index + 1) +
        "</td>" +
        "<td>" +
        persona.cuenta +
        "</td>" +
        "<td>" +
        persona.nombre +
        "</td>" +
        "<td>" +
        persona.email +
        "</td>" +
        "</tr>";
      tablabody.append(row);
    });
  } else {
    $("#errornotusers").fadeIn(1000);
  }
})();
