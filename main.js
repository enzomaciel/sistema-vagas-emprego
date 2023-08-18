let op;

let vagas = [];
function menu() {
    return "Sistema de vagas de emprego\n"+
    "1 - Listar Vagas Disponiveis\n"+
    "2 - Criar uma nova Vaga\n"+
    "3 - Visualizar uma vaga\n"+
    "4 - Inscrever um candidato em uma vaga\n"+
    "5 - Excluir uma vaga\n"+
    "6 - Sair";
}
function cadastrarVaga(params) {
    let nome = prompt("Digite o nome da vaga");
    let descricao = prompt("Digite a descrição da vaga");
    let data = prompt("Digite a data limite da vaga");
    let confirmar = prompt("Digite confirmar se deseja confirmar o cadastro") === "confirmar"? true:false;
    if(confirmar){
        let vaga = {};
        vaga.nome = nome;
        vaga.descricao = descricao;
        vaga.data = data;
        vaga.qntCanditados = 0;
        vagas.push(vaga);
        alert("Usuario cadastrado");
    }else{
        alert("Não confirmado");
    }   
}
function visualizarVaga(elemento,indice,array) {
    alert("Posição do indice " + (indice + 1) + "| Nome da vaga " + elemento.nome + "| Numero de canditados " + elemento.qntCanditados);
}
function buscarVaga(vagas,buscar) {
        alert("Vaga encontrada");
        var ele = vagas[buscar];
        alert("Indice da vaga: " + (buscar + 1) + 
        "\nNome da Vaga: " + ele.nome + 
        "\nDescrição da vaga: " + ele.descricao + 
        "\nData limite da vaga: " + ele.data + 
        "\nQuantidade de candidatos: " + ele.qntCanditados);
}
function adiciocarParticipante() {
    let canditato  = prompt("Digite o nome do candidato");
    let buscar = prompt("Digite o indice da vaga");
    buscar = buscar -1 ;
    vagas[buscar].qntCanditados =+ 1;
    alert("Numero de canditados " + vagas[buscar].qntCanditados)
    alert("Adicionando o participante com sucesso " + canditato);
}
function deletarVaga(buscar) {
    vagas.splice(buscar-1);
    alert("Vaga deletada com sucesso")
}
do {
    op = prompt(menu());
    switch (op) {
        case '1':
            vagas.forEach(visualizarVaga);
            break;
        case '2':
            cadastrarVaga();
            break;  
        case '3':
            let buscar = prompt("Digite o indice que deseja buscar");
            buscar = buscar -1;
            buscarVaga(vagas,buscar);
            break; 
        case '4':
            adiciocarParticipante();
            break; 
        case '5':
            let del = prompt("Digte o indice para deletar a vaga")
            deletarVaga(del);
            break; 
        case '6':
            alert("Saindo do programa")
            break;
        default:
            alert("Digitou errado");
            break;
    }
    
} while (op !== '6');