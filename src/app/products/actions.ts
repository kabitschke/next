// app/produtos/actions.ts
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type Produto = {
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export async function addProduto(produto: Produto) {
  try {
    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });

    if (!response.ok) {
      throw new Error('Erro ao adicionar o produto.');
    }

    // Revalida a rota '/produtos'
    revalidatePath('/product');

    // Redireciona para a página de produtos
    redirect('/product');
  } catch (error) {
    console.error("Erro:", error);
  }
}
