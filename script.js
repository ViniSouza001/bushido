const setaHome = document.querySelectorAll(".seta-baixo")
var nextPage = 0
const form = document.querySelector('form')
const home = document.querySelector('.home')
const divsEsquerdas = document.querySelector('.divs-esquerdas')
const divsDireitas = document.querySelector('.divs-direitas')

if (nextPage === 0) {
   // home.style.display = 'flex'
}

const abrirModalEsquerdo = (element) => {
   element.classList.add('abrir-modal-esquerdo')
   const paragrafoFilho = element.querySelector('.paragrafoFilho')
   paragrafoFilho.classList.add('fadeout-paragrafo')
   const conteudo = element.querySelector('.divs-modal')
   setTimeout(() => {
      conteudo.classList.add('fadein-conteudo')
   }, 1200)

   const x = conteudo.querySelector('.fecharModal')
   x.addEventListener('click', () => {
      conteudo.classList.add('fadeout-conteudo')
      setTimeout(() => {
         element.classList.add('fechar-modal-esquerdo')
      }, 300);
      setTimeout(() => {
         paragrafoFilho.classList.remove('fadeout-paragrafo')
         paragrafoFilho.classList.add('fadein-paragrafo')
      }, 1000)
      setTimeout(() => {
         element.classList.remove("abrir-modal-esquerdo")
         conteudo.classList.remove('fadein-conteudo')
         conteudo.classList.remove('fadeout-conteudo')
         element.classList.remove('fechar-modal-esquerdo')
      }, 2000)
   })
}

// function fecharModalEsquerdo (element) {
//    console.log(element)
//    element.style.animation = 'fechar-modal-esquerdo 1s forward'
// }

function abrirModalDireito (element) {
   element.style.animation = 'abrir-modal-direito 1.5s forwards'
   const paragrafoFilho = element.querySelector('.paragrafoFilho')
   paragrafoFilho.style.animation = 'fadeout .5s forwards'
   const conteudo = element.querySelector('.divs-modal')
   setTimeout(() => {
      conteudo.style.display = 'flex'
      conteudo.style.animation = 'fadein 1s forwards'
   }, 1200)
}

function changeNextPage (value) {
   nextPage = nextPage + value
   if (nextPage == 1) {
      home.style.animation = 'fadeout-up 1s'
      home.style.animationFillMode = 'both'
   }
}