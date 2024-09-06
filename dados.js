
// let dados = [
//     {titulo:"Elon Musk",
//         descricao: "Elon Musk é um empreendedor visionário sul-africano, naturalizado canadense e estadunidense, conhecido por liderar empresas que revolucionam diversos setores. Fundador da SpaceX, Tesla, Neuralink e The Boring Company, entre outras, Musk é responsável por avanços significativos em áreas como exploração espacial, veículos elétricos, inteligência artificial e infraestrutura. Sua ambição de transformar o mundo e colonizar Marte o tornaram uma das figuras mais influentes e controversas do século XXI.",
//         link: "https://pt.wikipedia.org/wiki/Elon_Musk"

// },
// {
//     titulo: "Bill Gates",
//     descricao: "Bill Gates é um empresário, filantropo e programador de computador americano. Ele é o co-fundador da Microsoft Corporation, que se tornou uma das empresas de software mais valiosas do mundo. Gates é conhecido por sua riqueza e por suas atividades filantrópicas através da Fundação Bill e Melinda Gates.",
//     link: "https://pt.wikipedia.org/wiki/Bill_Gates"
// },


// {
//     titulo: "Steve Jobs",
//     descricao: "Steve Jobs foi um empresário e inventor americano. Ele foi co-fundador e CEO da Apple Inc. Jobs é amplamente considerado uma das figuras mais influentes da indústria da tecnologia, sendo responsável por revolucionar os mercados de computadores pessoais, música, telefonia móvel e animação.",
//     link: "https://pt.wikipedia.org/wiki/Steve_Jobs"
// },
// ]


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