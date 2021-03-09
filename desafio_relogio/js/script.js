window.setInterval(function () {
  var hora_atual = new Date();

  var horas = hora_atual.getHours();
  var minutos = hora_atual.getMinutes();
  var segundos = hora_atual.getSeconds();

  function formt_time(time) {
    if (time >= 0 && time <= 9) {
      var formtted_time = time.toString();
      formtted_time = "0" + formtted_time;
    } else {
      var formtted_time = time.toString();
    }
    return formtted_time;
  }

  document.getElementById("relogio").innerHTML =
    formt_time(horas) + ":" + formt_time(minutos) + ":" + formt_time(segundos);
}, 1000);
