(function () {
  if (
    localStorage.getItem("transaciones") != null &&
    JSON.parse(localStorage.getItem("transaciones")).length != 0
  ) {
    tablabody = $("#transactions > tbody");
    datos = JSON.parse(localStorage.getItem("transaciones"));
    $.each(datos, function (index, persona) {
      const simbolo = persona.tipo === "deposito" ? "+ " : "- ";
      var row =
        "<tr>" +
        "<td>" +
        (index + 1) +
        "</td>" +
        "<td>" +
        persona.fecha +
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
        "<td>" +
        simbolo +
        new Intl.NumberFormat("es-CL", {
          style: "currency",
          currency: "CLP",
        }).format(persona.monto) +
        "</td>" +
        "<td>" +
        persona.tipo +
        "</td>" +
        "</tr>";
      tablabody.append(row);
    });
  } else {
    $("#errortrans").fadeIn(1000);
  }
})();
