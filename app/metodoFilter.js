// armazenando todos os botões que tenham a classe .btn na pagina
const botoes = document.querySelectorAll('.btn')

//percorrer os botoes e adicionar o evento de click, chamando a função de filtrarLivros
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// criando função de filtrar os livros
function filtrarLivros(){

    // pega o btn e seleciona o id dele armazenando dentro da variavel elementobtn
    let elementoBtn = document.getElementById(this.id)

    // pegando o valor desses botoes e armazenando dentro de categoria
    let categoria = elementoBtn.value

    
    
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)

    //chama a função para exibir na tela os livros dentro do array livrosfiltrados
    exibirOsLivrosNaTela(livrosFiltrados)
    // condicional para verificar se o livro é disponivel, se for chama a funcao de exibir os livros disponiveis na section valor total de livros
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirTotalDisponiveisNaTela(valorTotal)
    }
}
//filtrando os livros por categoria, utilizando a categoria dentro do objeto do livro, se for igual a categoria do valor do botão, armazena dentro dos livros filtrados, criando um novo array
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria
    )
}
// verifica a categoria do value do botao, se for disponivel, o metodo de filter é utilizado filtrando os livros que tem  a quantidade maior que 0, agora se não for a categoria disponivel, segue o metodo de filtro padrao
function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

//função para inserir a section de total de livros disponiveis, se for o filtro com categoria disponivel

function exibirTotalDisponiveisNaTela(valorTotal){
   
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `<section id="valor_total_livros_disponiveis">
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">R$${valorTotal}</span></p>
    </div>
  </section>`
}