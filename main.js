const showNumber = document.getElementsByName('numeros');
const showOperation = document.getElementsByName('operaciones');
const clean = document.getElementById('borrar');
const equal = document.getElementById('igual');
let result = document.getElementById('visor');
let newOperation = 0;
let oldOperation = 0;
let operation = ""

//recorremos showNumber NUMEROS
showNumber.forEach(function (boton) {
  boton.addEventListener("click", function () {
    addNumber(boton);
  })
});

//recorremos showOperation OPERACIONES
showOperation.forEach(function (botonOp) {
  botonOp.addEventListener("click", function () {
    calculate();
    addOperation(botonOp);
    result.innerHTML = "";
  })
});
//boton C (borrar)
clean.addEventListener("click", function () {
  refresh();
  oldOperation = 0;
});

//boton igual
equal.addEventListener("click", function () {
  calculate()
});

//funcion para agregar los numeros
const addNumber = (boton) => {
  if (result.innerHTML.length < 9) {
    result.innerHTML += boton.innerHTML;
    newOperation = result.innerHTML;
  }
}

//funcion para agregar las operaciones
const addOperation = (botonOp) => {
  operation = botonOp.innerHTML;
}

//funcion para actualizar el visor
const refresh = () => {
  oldOperation = parseInt(newOperation);
  newOperation = 0;
  result.innerHTML = "";
}

//funcion para calcular el resultado
const calculate = () => {
  if (oldOperation == 0) {
    refresh();
  } else {
    if(newOperation == 0){
      result.innerHTML = oldOperation
    }else{
    switch (operation) {
      case "+":
        result.innerHTML = oldOperation + parseInt(newOperation);
        break;
      case "-":
        result.innerHTML = oldOperation - parseInt(newOperation);
        break;
      case "*":
        result.innerHTML = oldOperation * parseInt(newOperation);
        break;
      case "/":
        result.innerHTML = oldOperation / parseInt(newOperation);
        break;
      case "%":
        result.innerHTML = oldOperation * parseInt(newOperation) / 100;
      default:
        break;
    }
    }
    oldOperation = parseInt(result.innerHTML);
    newOperation = 0;
  }
}
