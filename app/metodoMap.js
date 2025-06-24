//recebe os livros como parametro e cria uma constante de desconto, que faz
function aplicarDesconto(livros){
    const desconto = 0.5
    // cria uma nova lista, buscando todos os livros e armazenando na constante, editando os preços e criando novos valores com o desconto para esse novo array.
    const livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}