type Props = {
    params: {
        id:string;         
    }
}

type Produto = {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    estoque: number;
    importado: boolean;
}

export default async function  ProdutoPage ({params}:Props) {

    const response = await fetch(`https://api.origamid.online/produtos/${params.id}`);
    const data = await response.json() as Produto; {/*as typeSCRIPT INDICA que data é um array de produto */ }

   
    return (
        <div>
            <h1>{data.nome}</h1>
            <h2>R$ {data.preco}</h2>
            <p>{data.descricao}</p>
        </div>
    )
}