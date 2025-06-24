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

    //filtrando os livros por categoria, utilizando a categoria dentro do objeto do livro, se for igual a categoria do valor do botão, armazena dentro dos livros filtrados, criando um novo array
    let livrosFiltrados = livros.filter(livro =>
        livro.categoria == categoria
    )

    //chama a função para exibir na tela os livros dentro do array livrosfiltrados
    exibirOsLivrosNaTela(livrosFiltrados)
}


