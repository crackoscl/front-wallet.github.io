$("#addUserForm").submit(function (e) {
  const cuenta = $("#inputCuenta").val();
  const email = $("#inputEmail").val();
  const nombre = $("#inputNombre").val();

  e.preventDefault();
  const lst = [
    {
      cuenta: cuenta,
      email: email,
      nombre: nombre,
    },
  ];

  if (localStorage.getItem("listaUsuarios") === null) {
    localStorage.setItem("listaUsuarios", JSON.stringify(lst));
  } else {
    datos = JSON.parse(localStorage.getItem("listaUsuarios"));
    datos.push({
      cuenta: cuenta,
      email: email,
      nombre: nombre,
    });
    localStorage.setItem("listaUsuarios", JSON.stringify(datos));
  }

  $("#inputCuenta").val("");
  $("#inputEmail").val("");
  $("#inputNombre").val("");
});
