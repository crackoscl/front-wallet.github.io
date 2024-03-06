(function () {
  if (localStorage.getItem("listaUsuarios")) {
    datos = JSON.parse(localStorage.getItem("listaUsuarios"));
    $.each(datos, function (index, persona) {
      $("#selectUsers").append(
        '<option value=" ' +
          persona.cuenta +
          "," +
          persona.nombre +
          "," +
          persona.email +
          ' ">' +
          persona.cuenta +
          " - " +
          persona.nombre +
          "</option>"
      );
    });
  }
  
  function verSaldo() {
    if (localStorage.getItem("saldo")) {
      const saldo = localStorage.getItem("saldo");
      const formattedNumber = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
      }).format(saldo);
      $("h1").text("Saldo : " + formattedNumber);}
  }
  
  verSaldo();
  
  $("#sendAmount").submit(function (e) {
    const monto = parseInt($("#monto").val());
    const select = $('#selectUsers').val()
    const saldo = parseInt(localStorage.getItem("saldo"));

    e.preventDefault();
    if (monto <= 0){
      alertMensaje("Debe ingresar un monto valido","danger",true); 
    }

    else if(monto > saldo){
      alertMensaje("No tienes saldo suficiente","danger",true);
    }

    else{
      data = select.split(',')
      localStorage.setItem("saldo", saldo - monto);
      const date = new Date();
      const trs = [{
        cuenta : data[0],
        email: data[2],
        nombre:data[1],
        tipo:'transferencia',
        fecha: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
        monto: monto
      }]
    
      if (localStorage.getItem('transaciones') === null) {
        localStorage.setItem('transaciones',JSON.stringify(trs))
    
      }else{
        datos = JSON.parse(localStorage.getItem('transaciones'))
        datos.push({
          cuenta : data[0],
          email: data[2],
          nombre:data[1],
          tipo:'transferencia',
          fecha: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
          monto: monto
        })
        localStorage.setItem('transaciones',JSON.stringify(datos))
      }
      alertMensaje("Envio de dinero existoso.","success",true); 
      $("#monto").val("");
      $("h1").text("");
      verSaldo();
    }

  });
  

})();
