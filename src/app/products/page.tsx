type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
}


export default async function Product() {

  const response = await fetch('https://api.origamid.online/produtos', {
    next: {
      revalidate: 5,
    },
  });
  const data = await response.json() as Produto[];


  return (
    <div>
      <h1>Lista de Produtos </h1>
      {
        data.map((produto) =>
          <ul key={produto.id} className="produto">
            <li>Nome: {produto.nome}</li>
            <li>Descrição: {produto.descricao}</li>
            <li>Preço: {produto.preco}</li>
            <li>Quantidade: {produto.estoque}</li>
            <li>Importado: {produto.importado ? 'Importado' : 'Nacional'}</li>

          </ul>

        )
      }


    </div>
  );
}