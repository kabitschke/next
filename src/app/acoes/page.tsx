export default async function AcoesPage() {

  const response = await fetch('https://api.origamid.online/acoes/lua');
  const acao = (await response.json()) as {
    simbolo: string;
    atualizada: string;
  };
  return (
    <div>
      <h1>{acao.simbolo}</h1>
      <h2>{acao.atualizada}</h2>

    </div>
  );
}