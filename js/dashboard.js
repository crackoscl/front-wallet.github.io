(function () {
  function formattedNumber(number) {
    const formatter = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(number);
    return formatter;
  }

  if (localStorage.getItem("saldo")) {
    const saldo = localStorage.getItem("saldo");
    displaySaldo = $("#saldo").find(".card-title");
    console.log(formattedNumber(saldo));
    displaySaldo.text(formattedNumber(saldo));
  }

  if (
    localStorage.getItem("transaciones") != null &&
    JSON.parse(localStorage.getItem("transaciones")).length != 0
  ) {

    displayDepositos = $("#depositos").find(".card-title");
    displayTransferencias = $("#transferencias").find(".card-title");
    datos = JSON.parse(localStorage.getItem("transaciones"));
    var depositos = 0;
    var transferencias = 0;



    $.each(datos, function (index, persona) {
        if (persona.tipo === "deposito") {
          depositos += parseInt(persona.monto);
        } else {
          transferencias += parseInt(persona.monto);
        }
    });

    tablabody = $("#ultimastrans > tbody");
    const limite = 5
    datos.reverse()
    $.each(datos, function (index, persona) {
      const simbolo = persona.tipo === "deposito" ? "+ " : "- ";
     
      if (limite > index){
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
      }
    });

    displayDepositos.text(formattedNumber(depositos));
    displayTransferencias.text(formattedNumber(transferencias));
}
else{
    displayDepositos.text("0")
    displayTransferencias.text("0")
    $("#errortrans").fadeIn(1000);
}
})();
