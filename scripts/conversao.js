function converterTempo() {
  let valor = parseFloat(document.getElementById("valorTempo").value);
  let unidade = document.getElementById("unidade").value;

  if (isNaN(valor) || valor < 0) {
    document.getElementById("resultadoTempo").innerHTML = "Digite um valor válido!";
    return;
  }

  let segundos, minutos, horas, dias;

  switch (unidade) {
    case "segundos":
      segundos = valor;
      minutos = valor / 60;
      horas = valor / 3600;
      dias = valor / 86400;
      break;
    case "minutos":
      segundos = valor * 60;
      minutos = valor;
      horas = valor / 60;
      dias = valor / 1440;
      break;
    case "horas":
      segundos = valor * 3600;
      minutos = valor * 60;
      horas = valor;
      dias = valor / 24;
      break;
    case "dias":
      segundos = valor * 86400;
      minutos = valor * 1440;
      horas = valor * 24;
      dias = valor;
      break;
  }

  document.getElementById("resultadoTempo").innerHTML = `
    <strong>Resultado:</strong><br>
    ${segundos.toFixed(2)} segundos<br>
    ${minutos.toFixed(2)} minutos<br>
    ${horas.toFixed(2)} horas<br>
    ${dias.toFixed(4)} dias
  `;
}

function limparConversao() {
  document.getElementById("valorTempo").value = "";
  document.getElementById("unidade").value = "segundos";
  document.getElementById("resultadoTempo").innerHTML = "";
}
