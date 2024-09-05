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

