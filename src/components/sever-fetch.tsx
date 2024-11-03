type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
}

export default async function SeverFetch() {
  const response = await fetch('https://api.origamid.online/produtos');
  const data = await response.json() as Produto[]; {/*as typeSCRIPT INDICA que data é um array de produto */ }
  console.log(data);

  return (
    <div className="">
      {data.map((produto) =>
        <ul key={produto.id} className="produto">
          <li><span style={{ fontWeight: 'bold' }}>Item:</span> {produto.nome}</li>
          <li><span style={{ fontWeight: 'bold' }}>Descrição:</span> {produto.descricao}</li>
          <li><span style={{ fontWeight: 'bold' }}>Preço:</span> R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} </li>
          <li><span style={{ fontWeight: 'bold' }}>Quantidade:</span> {produto.estoque}</li>
          <li><span style={{ fontWeight: 'bold' }}>Importado:</span> {produto.importado ? 'Importado' : 'Nacional'}</li>
        </ul>

      )}


    </div>

  );
} 