'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // num = 1011
  //       0123

  var suma = 0
  for(let i=0; i<num.length; i++){
    let posicion = num.length - 1 - i
    suma += num[i] * Math.pow(2, posicion)
  }
  return suma
}

function DecimalABinario(num) {
  // tu codigo aca
  // num = 250

  var concat = []
  while(num > 0){
    concat.unshift(Math.floor(num%2))
    num = Math.floor(num/2)
  }
  return concat.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}