import AtualizarPage from "@/components/atualizar";

type Acao = {
  nome: string;
  preco: number;
  atualizada: string;

}

export default async function AcoesPage() {

  const response = await fetch('https://api.origamid.online/acoes/lua', {
    //cache: 'no-store',
    next: {
      //revalidate: 0,
      tags: ['acoes'],
    }

  });

  const acao = await response.json() as Acao;


  return (
    <main>
      <h1>Ações</h1>
      <AtualizarPage />
      <h2>Nome: {acao.nome}</h2>
      <p>Preço: {acao.preco}</p>
      <p>Atualizada: {acao.atualizada}</p>
    </main>
  );
}