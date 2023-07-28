const botoes = document.querySelectorAll('.btn')
botoes.forEach(botao => {
  botao.addEventListener('click', filtrarLivros)
})

function filtrarLivros() {
  let elementoBtn = document.getElementById(this.id)
  let categoria = elementoBtn.value
  let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
  exibirLivros(livrosFiltrados)

  if (categoria == 'disponivel') {
    const valorTotal = calcularValorTotal(livrosFiltrados)
    exibirValorTotalDosLivrosDisponiveis(valorTotal)
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
  sectionValorTotalLivrosDisponiveis.innerHTML = `
      <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
      </div>
    `
}
