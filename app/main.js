let livros = []
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

async function getLivrosAPI() {
  const response = await fetch(endPointAPI)
  livros = await response.json()

  let livrosComDesconto = aplicarDesconto(livros)
  
  exibirLivros(livrosComDesconto)
}

getLivrosAPI()
