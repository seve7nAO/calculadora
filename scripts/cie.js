function insert(num) {
  let display = document.getElementById('resultado');
  display.innerHTML += num;
}

function clean() {
  document.getElementById('resultado').innerHTML = "";
}

function back() {
  let display = document.getElementById('resultado');
  display.innerHTML = display.innerHTML.slice(0, -1);
}

function calcular() {
  let display = document.getElementById('resultado');
  try {
    display.innerHTML = eval(display.innerHTML);
  } catch (e) {
    display.innerHTML = "Erro";
  }
}

// Funções científicas
function funcao(funcaoMatematica, expoente = null) {
  let valor = document.getElementById('resultado').innerHTML;

  if (valor === "") return;

  try {
    let resultado;
    let numero = parseFloat(valor);

    if (funcaoMatematica === 'Math.pow') {
      resultado = Math.pow(numero, expoente);
    } else {
      resultado = eval(funcaoMatematica + '(' + numero + ')');
    }

    document.getElementById('resultado').innerHTML = resultado;
  } catch (e) {
    document.getElementById('resultado').innerHTML = "Erro";
  }
}
