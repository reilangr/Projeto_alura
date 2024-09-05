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


// ++++++++++++++++++++++++++++++++4343

const form = document.getElementById('cadastroForm');
const listaCadastros = document.getElementById('listaCadastros');
const data = new Date().toLocaleDateString(); // Obtém a data atual

function formatarData(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear().toString().substr(2);   
  
  
    return `${dia}/${mes}/${ano}`;
  }

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const tarefa = document.getElementById('tarefa').value;
    const descricao = document.getElementById('descricao').value;
    const data_fim = document.getElementById('data_fim').value;
    const dataCadastro = new Date().toLocaleDateString(); // Obtém a data de cadastro

    const cadastro = { tarefa, descricao,data_fim, dataCadastro };

    // Obter os dados já salvos no localStorage
    const cadastrosSalvos = JSON.parse(localStorage.getItem('cadastros')) || [];

    // Adicionar o novo cadastro aos dados salvos
    cadastrosSalvos.push(cadastro);

    // Salvar os dados atualizados no localStorage
    localStorage.setItem('cadastros', JSON.stringify(cadastrosSalvos));

    // Limpar o formulário
    form.reset();

    // Atualizar a lista na tela
    atualizarLista();
});

function atualizarLista() {
    const cadastrosSalvos = JSON.parse(localStorage.getItem('cadastros')) || [];

    listaCadastros.innerHTML = '';

    cadastrosSalvos.forEach(cadastro => {
        const li = document.createElement('li');
        li.textContent = `Início - ${formatarData(new Date(cadastro.dataCadastro))} - Tarefa: ${cadastro.tarefa} - 
                            Descrição: ${cadastro.descricao} - Conclusão: ${formatarData(new Date(cadastro.data_fim))}`;
        listaCadastros.appendChild(li);
    });
}

// function limparLista() {
//     localStorage.removeItem('cadastros');
//     atualizarLista();
//   }
  
//   btnLimpar.addEventListener('click', limparLista);
// Carregar a lista ao carregar a página
atualizarLista();