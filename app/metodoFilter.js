const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    let elementoBtn = document.getElementById(this.id)
    let categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro =>
        livro.categoria == categoria
    )

    exibirOsLivrosNaTela(livrosFiltrados)
}


