const elementoParaInserirLivros = document.getElementById('livros')

function exibirOsLivrosNaTela(listadeLivros){
    elementoParaInserirLivros.innerHTML = ''
    listadeLivros.forEach(livro => {
        let disponivel = livro.quantidade > 0 ? 'livro__imagens' : 'livro_imagens indisponivel'
        // let disponivel = verificarDisponivel(livro)
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
