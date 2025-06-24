// cria uma constante que pega o elemento que será usado na página, para exibir os livros do array
const elementoParaInserirLivros = document.getElementById('livros')


// criando a função para exibir os dados dos livros

function exibirOsLivrosNaTela(listadeLivros){
    //limpa o conteudo anterior
    elementoParaInserirLivros.innerHTML = ''
    listadeLivros.forEach(livro => {
        // verifica se o livro é disponivel de acordo com a quantidade existente dentro do objeto do livro, usando uma condição ternária
        // se for maior que 0, a classe da imagem vai ser a normal, se for < 0 que zero é adicionado a classe indisponivel que modifica a imagem
        let disponivel = livro.quantidade > 0 ? 'livro__imagens' : 'livro_imagens indisponivel'
        // let disponivel = verificarDisponivel(livro)
        //inserindo no elemento os codigos de html utilizando váriaveis para os dados dos livros
        elementoParaInserirLivros.innerHTML += `<div class="livro">
      <img class="${disponivel}" src="${livro.imagem}" alt="${livro.alt}/>
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
    })
}

/*function verificarDisponivel(livro){
    if(livro.quantidade > 0){
        return 'livro__imagens'
    }else{
        return 'livro_imagens indisponivel'
    }
}*/
