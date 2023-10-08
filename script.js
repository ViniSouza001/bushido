const setaHome = document.querySelectorAll(".seta-baixo")
var nextPage = 0
const home = document.querySelector('.home')
const divsEsquerdas = document.querySelector('.divs-esquerdas')
const divsDireitas = document.querySelector('.divs-direitas')

if (nextPage === 0) {
   // home.style.display = 'flex'
}

if (nextPage == 1) {

}

function abrirModal (element) {
   element.style.animation = 'abrir-modal 1.5s forwards'
   const paragrafoFilho = element.querySelector('#paragrafoFilho')
   paragrafoFilho.style.animation = 'fadeout 1s forwards'
   const conteudo = element.querySelector('.divs-modal')
   setTimeout(() => {
      conteudo.style.display = 'flex'
      conteudo.style.animation = 'fadein 1s forwards'
   }, 1200)
}

function changeNextPage () {
   nextPage++
   if (nextPage == 1) {
      home.style.animation = 'fadeout-up 1s'
      home.style.animationFillMode = 'both'
   }
}