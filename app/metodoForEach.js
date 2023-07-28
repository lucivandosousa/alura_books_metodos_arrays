const sectionLivros = document.getElementById('livros')
const sectionValorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirLivros(listaLivros) {

  // cria os elementos vazios
  sectionLivros.innerHTML = ''
  sectionValorTotalLivrosDisponiveis.innerHTML = ''
  
  // iteração para criar os elementos e exibir em tela
  listaLivros.forEach(livro => {

    // verifica a propriedade quantidade e inclui as classes de acordo com esse valor
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    
    // cria os elementos para adiconar na seção
    sectionLivros.innerHTML += `
      <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="Capa do livro O Retorno do Cangaceiro JavaScript+" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
    ` 
  })
}