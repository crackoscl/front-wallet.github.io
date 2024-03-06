

function verSaldo() {
  if (localStorage.getItem("saldo")) {
    const saldo = localStorage.getItem("saldo");
    const formattedNumber = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(saldo);
    $("h1").text("Saldo : " + formattedNumber);
  }
}

verSaldo();

$("#addAmount").submit(function (e) {
  const monto = parseInt($("#monto").val());
  const saldo = localStorage.getItem("saldo");
  e.preventDefault();

  if (monto > 0) {
    localStorage.setItem("saldo", parseInt(saldo) + parseInt(monto));

    const date = new Date();
    const trs = [
      {
        cuenta: "5809010",
        email: "glagos@hola.cl",
        nombre: "Gilbert Lagos",
        tipo: "deposito",
        fecha:
          date.getDate() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getFullYear(),
        monto: monto,
      },
    ];

    if (localStorage.getItem("transaciones") === null) {
      localStorage.setItem("transaciones", JSON.stringify(trs));
    } else {
      datos = JSON.parse(localStorage.getItem("transaciones"));
      datos.push({
        cuenta: "5809010",
        email: "glagos@hola.cl",
        nombre: "Gilbert Lagos",
        tipo: "deposito",
        fecha:
          date.getDate() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getFullYear(),
        monto: monto,
      });
      localStorage.setItem("transaciones", JSON.stringify(datos));
      alertMensaje("Deposito relizado con exito.","success",true); 
    }
    $("#monto").val("");
    $("h1").text("");
    verSaldo();
   
  } else {
    alertMensaje("Monto debe ser mayor a 0.","danger",true);
  }
});
