function aplicarDesconto(listaLivros) {
  const desconto = 0.10

  let livrosComDesconto = listaLivros.map((livro)=>{
    return {...livro, preco: livro.preco - (livro.preco * desconto), teste: "teste"}
  })
  return livrosComDesconto
}