const setaHome = document.querySelectorAll(".seta-baixo")
var nextPage = 0
const home = document.querySelector('.home')
const content1 = document.querySelector('.content')
const content2 = document.querySelector('.content2')
const divsEsquerdas = document.querySelector('.divs-esquerdas')
const divsDireitas = document.querySelector('.divs-direitas')
const setas = document.querySelectorAll('.setas')

const abrirModalEsquerdo = (element) => {
   element.classList.add('abrir-modal-esquerdo')
   disableArrows()

   const paragrafoFilho = element.querySelector('.paragrafoFilho')
   paragrafoFilho.classList.add('fadeout-paragrafo')
   const conteudo = element.querySelector('.divs-modal')
   setTimeout(() => {
      conteudo.classList.add('fadein-conteudo')
   }, 1200)

   const x = conteudo.querySelector('.fecharModalEsquerdo')

   x.addEventListener('click', () => {
      conteudo.classList.add('fadeout-conteudo')
      enableArrows()
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

function abrirModalDireito (element) {
   element.classList.add('abrir-modal-direito')
   disableArrows()
   const paragrafoFilho = element.querySelector('.paragrafoFilho')
   paragrafoFilho.classList.add('fadeout-paragrafo')
   const conteudo = element.querySelector('.divs-modal')
   setTimeout(() => {
      conteudo.classList.add('fadein-conteudo')
   }, 1200)

   const x = conteudo.querySelector('.fecharModalDireito')

   x.addEventListener('click', () => {
      conteudo.classList.add('fadeout-conteudo')
      enableArrows()
      setTimeout(() => {
         element.classList.add('fechar-modal-direito')
      }, 300);
      setTimeout(() => {
         paragrafoFilho.classList.remove('fadeout-paragrafo')
         paragrafoFilho.classList.add('fadein-paragrafo')
      }, 1000)
      setTimeout(() => {
         element.classList.remove("abrir-modal-direito")
         conteudo.classList.remove('fadein-conteudo')
         conteudo.classList.remove('fadeout-conteudo')
         element.classList.remove('fechar-modal-direito')
      }, 2000)
   })
}

function changePage () {
   nextPage++
   if (nextPage == 1) {
      limparClasses(home)
      limparClasses(content1)
      home.classList.add('fadeout-up');

      setTimeout(() => {
         home.style.display = 'none';

         content1.style.display = 'flex';
         content1.classList.add('fadein-up')
      }, 400)

   } else if (nextPage == 2) {
      limparClasses(content1)
      content1.classList.add('fadeout-up')

      setTimeout(() => {
         content1.style.display = 'none';
         content2.style.display = 'flex';
         limparClasses(content2)
         content2.classList.add('fadein-up')
      }, 400)
   }
}

function returnPage () {
   nextPage--

   if (nextPage == 1) {
      limparClasses(content2)
      content2.classList.add('fadeout-down')

      setTimeout(() => {
         content2.style.display = 'none'
         limparClasses(content1)
         content1.style.display = 'flex'
         content1.classList.add('fadein-down')
      }, 400)
   } else if (nextPage == 0) {
      limparClasses(content1)
      limparClasses(home)
      content1.classList.add('fadeout-down')

      setTimeout(() => {
         content1.style.display = 'none'
         home.style.display = 'flex'
         home.classList.add('fadein-down')
      }, 400)
   }
}

function limparClasses (element) {
   element.classList.remove('fadein-up')
   element.classList.remove('fadein-down')
   element.classList.remove('fadeout-up')
   element.classList.remove('fadeout-down')
}

function disableArrows () {
   setas.forEach((seta) => {
      seta.classList.remove('enabled')
      seta.classList.add('disabled')
   })
}

function enableArrows () {
   setTimeout(function () {
      setas.forEach((seta) => {
         seta.classList.remove('disabled')
         seta.classList.add('enabled')
      });
   }, 500); // Aguarde 100 milissegundos (ajuste o valor conforme necessário)
}
