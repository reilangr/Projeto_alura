
// const filmes = [
//   {titulo: "O Homem que Mudou o Jogo",
//     descricao: "Uma história inspiradora sobre como a análise de dados e um pensamento inovador podem transformar um time de baseball.",
//     link: "https://www.imdb.com/title/tt1210166/",
//     tags: "esportes, dados, estratégia"
// },
// {
//   titulo: "A Rede Social",
//   descricao: "A história da criação do Facebook, uma jornada épica sobre empreendedorismo, ambição e as complexidades da amizade.",
//   link: "https://www.imdb.com/title/tt1285016/",
//   tags: "tecnologia, empreendedorismo, redes sociais"
// },
// {
//   titulo: "O Lobo de Wall Street",
//   descricao: "Um retrato vívido da ambição desenfreada e das consequências de perseguir o sucesso a qualquer custo.",
//   link: "https://www.imdb.com/title/tt0995361/",
//   tags: "drama, biografia, crime"
// },
// {
//   titulo: "A Busca pela Felicidade",
//   descricao: "Uma história inspiradora sobre um pai solteiro que luta para criar um filho e construir uma vida melhor.",
//   link: "https://www.imdb.com/title/tt0454922/",
//   tags: "drama, biografia, família"
// },
// {
//   titulo: "Coco Antes de Chanel",
//   descricao: "A história da vida de Coco Chanel, uma jornada de empoderamento feminino e superação de obstáculos.",
//   link: "https://www.imdb.com/title/tt0468550/",
//   tags: "biografia, drama, moda"
// },
// {
//   titulo: "Steve Jobs",
//   descricao: "Um retrato biográfico do visionário fundador da Apple, explorando sua vida e legado.",
//   link: "https://www.imdb.com/title/tt2395427/",
//   tags: "biografia, drama, tecnologia"
// },
// {
//   titulo: "O Jogo da Imitação",
//   descricao: "A história real de Alan Turing, o matemático que ajudou a decifrar a máquina Enigma e a mudar o curso da Segunda Guerra Mundial.",
//   link: "https://www.imdb.com/title/tt2084970/",
//   tags: "drama, guerra, histórico"
// },
// {
//   titulo: "Startup",
//   descricao: "Uma série documental que acompanha a jornada de startups em busca de sucesso.",
//   link: "https://www.netflix.com/title/80117542",
//   tags: "documentário, negócios, empreendedorismo"
// },
// {
//   titulo: "O Show de Truman",
//   descricao: "Um clássico da ficção científica que levanta questões profundas sobre a identidade, a liberdade e a busca por autenticidade.",
//   link: "https://www.imdb.com/title/tt0120386/",
//   tags: "ficção científica, drama, filosofia"
// }
// ];




// ++++++++++++++++++++++++++++++++
const form = document.getElementById('cadastroForm');
const listaCadastros = document.getElementById('listaCadastros');
const mensagemVazio = document.createElement('p');
mensagemVazio.id = 'mensagem-vazio';
mensagemVazio.textContent = 'Nenhuma tarefa cadastrada.';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const tarefa = document.getElementById('tarefa').value;
  const descricao = document.getElementById('descricao').value;

  if (tarefa.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = `${tarefa} - ${descricao}`;
    listaCadastros.appendChild(li);
    listaCadastros.removeChild(mensagemVazio); // Remove a mensagem se houver itens
  } else {
    // Se a tarefa estiver vazia, mostra a mensagem
    listaCadastros.appendChild(mensagemVazio);
  }

  form.reset();
});

// Verifica se a lista está vazia ao carregar a página
if (listaCadastros.children.length === 0) {
  listaCadastros.appendChild(mensagemVazio);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ Impressão +++++++++++++++++++++++++++++++++++++++++++++++++++++
function imprimirLista() {
    // Cria um novo elemento div para conter a lista a ser impressa
    const divImpressao = document.createElement("div");
    divImpressao.style.display = "none"; // Esconde a div para não interferir na visualização
    divImpressao.appendChild(listaCadastros.cloneNode(true)); // Clona a lista para a nova div
  
    // Adiciona um título à div de impressão (opcional)
    const titulo = document.createElement("h2");
    titulo.textContent = "Lista de Tarefas";
    divImpressao.appendChild(titulo);
  
    // Adiciona a div ao corpo do documento
    document.body.appendChild(divImpressao);
  
    // Define estilos para a impressão (opcional)
    divImpressao.style.fontSize = "12pt";
    divImpressao.style.fontFamily = "Arial";
  
    // Imprime a div
    window.print();
  
    // Remove a div após a impressão
    document.body.removeChild(divImpressao);
  }

//++++++++++++++++++++++++++++++++++++++++ Mensagem motivacional ++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const mensagens = [
    "Você é capaz de mais do que imagina!",
    "Acredite em si mesmo e vá em frente!",
    "Cada dia é uma nova oportunidade.",
    "O sucesso vem com a persistência.",
    "Busquem o Conhecimento!",
    "Cuide da Saúde!",
    "Para tudo tem uma solução!",
    "Tenha Nobreza!",
    "Cuide do seus Pensamentos!",
    "Aumente sua frequência mental.",
    "Se Movimente! ",
    
    // Adicione mais mensagens aqui
  ];
  
  const mensagemElement = document.getElementById('mensagem-motivacional');
  
  function gerarMensagem() {
    const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
    mensagemElement.textContent = mensagens[indiceAleatorio];
  }
  
  // Chamar a função ao carregar a página
  window.onload = gerarMensagem;


  
// +++++++++++++++++++++++++++++++++++++++++++++++++ MENU +++++++++++++++++++++++++++++++++++

// Obtém todos os links do menu
const links = document.querySelectorAll('nav a');

// Função para verificar qual link está ativo e adicionar uma classe
function highlightActiveLink() {
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Chama a função ao carregar a página
highlightActiveLink();