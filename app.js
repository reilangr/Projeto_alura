// function pesquisar(){
//     let section = document.getElementById("resultados-pesquisa")
// console.log(section);

// let resultados = ""

// for (let dado of dados){
//     resultados += `
// <div class="item-resultado">
//                 <h2>
//                     <a href="#">${dado.titulo}</a>
//                 </h2>
//                     <p class="descricao-meta">${dado.descricao}</p>
//                         <a href="${dado.link}" target="_blank">Veja Mais</a>

//             </div>
// `

// }
// section.innerHTML = resultados
// }



const mensagens = [
    "Você é capaz de mais do que imagina!",
    "Acredite em si mesmo e vá em frente!",
    "Cada dia é uma nova oportunidade.",
    "O sucesso vem com a persistência.",
    // Adicione mais mensagens aqui
  ];
  
  const mensagemElement = document.getElementById('mensagem-motivacional');
  
  function gerarMensagem() {
    const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
    mensagemElement.textContent = mensagens[indiceAleatorio];
  }
  
  // Chamar a função ao carregar a página
  window.onload = gerarMensagem;
