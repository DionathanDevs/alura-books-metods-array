// criando array para armazenar os livros em forma de lista

let livros = []

// criando  uma constante com o endpoint get, pegando dados de livros em um .json

const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

// chamando função criada para buscar os dados da variavel com endpoint

getBuscarLivrosDaApi()

// funcao assincrona
async function getBuscarLivrosDaApi() {

    // constante de resposta ao retorno do endpoint, utilizando fetch e await para esperar o retorno de todos os dados

    const res = await fetch(endPointApi)

    // armazenando e convertendo a resposta do fetch dentro do array livros, esperando todos os dados retornados com await
    livros = await res.json()

    // criando variavel de livros e aplicando desconto com a função

    let livrosComDesconto = aplicarDesconto(livros)

    // chamando função para exibir os livros após desconto na tela

    exibirOsLivrosNaTela(livrosComDesconto)
}

