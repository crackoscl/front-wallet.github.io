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
      $("h1").append("Saldo : " + formattedNumber);}
  }
  
  verSaldo();
  
  $("#sendAmount").submit(function (e) {
    const monto = parseInt($("#monto").val());
    const select = $('#selectUsers').val()
    const saldo = parseInt(localStorage.getItem("saldo"));

    e.preventDefault();
    if (monto <= 0){
      $("#sendMoneyalert").text("! debe ingresar un monto valido")
      $("#sendMoneyalert").fadeIn(1000);
      setTimeout(function() { 
          $('#sendMoneyalert').fadeOut(1000); 
      }, 5000);
    }

    else if(monto > saldo){
      $("#sendMoneyalert").text("! no tienes saldo suficiente")
      $("#sendMoneyalert").fadeIn(1000);
      setTimeout(function() { 
          $('#sendMoneyalert').fadeOut(1000); 
      }, 5000);
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
      $("#monto").val("");
      $("h1").text("");
      verSaldo();
    }

  });
  

})();
