var entradaTexto = document.querySelector('.entrada-textarea')
var textoRecebido = entradaTexto.value
var criptografiaBotao = document.querySelector('.button-cripto')

function criptografa_texto(texto_recebido){
  textoCripto = texto_recebido
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')
}

function descriptografa_texto(texto_recebido){
  textoCripto = texto_recebido
  .replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u')
}

function mostra_texto(){
  var img = document.querySelector('.img-container')
  var copy = document.querySelector('.button-copy')
  var texto = document.querySelector('.container-texto')
  document.querySelector('.container-texto').innerHTML = textoCripto
  img.style.visibility = 'hidden'
  copy.style.visibility = 'inherit'
  texto.style.display = 'block'
}

function criptografar() {
  var textoRecebido = entradaTexto.value.toLowerCase()
  criptografa_texto(textoRecebido)
  mostra_texto()
  return
}

function descriptografar() {
  var textoRecebido = entradaTexto.value.toLowerCase()
  descriptografa_texto(textoRecebido)
  mostra_texto()
  return
}

function copiar() {
  var copy = navigator.clipboard.writeText(textoCripto)
  alert('Texto copiado: ' + textoCripto)
  clear()
  entradaTexto.select()
  entradaTexto.setSelectionRange(0, 999999)
}

function clear() {
  var img = document.querySelector('.img-container')
  var copy = document.querySelector('.button-copy')
  var texto = document.querySelector('.container-texto')
  document.querySelector('.container-texto').innerHTML = textoCripto
  img.style.visibility = 'visible'
  copy.style.visibility = 'hidden'
  texto.style.display = 'none'
  document.querySelector('.container-texto').innerHTML = ''
}