function calcularValorTotal(livros) {
  return livros.reduce((acc, cur) => acc + cur.preco, 0).toFixed(2)
}