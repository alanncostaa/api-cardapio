import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco...');

  // 🔹 Categorias
  const categorias = await prisma.categoria.createMany({
    data: [
      { nome: 'Massas' },
      { nome: 'Bebidas' },
      { nome: 'Sobremesas' },
      { nome: 'Lanches' },
      { nome: 'Saladas' },
    ],
  });

  console.log(`✅ ${categorias.count} categorias criadas.`);

  // 🔹 Obter IDs de categoria
  const catMassas = await prisma.categoria.findFirst({ where: { nome: 'Massas' } });
  const catBebidas = await prisma.categoria.findFirst({ where: { nome: 'Bebidas' } });
  const catSobremesas = await prisma.categoria.findFirst({ where: { nome: 'Sobremesas' } });
  const catLanches = await prisma.categoria.findFirst({ where: { nome: 'Lanches' } });
  const catSaladas = await prisma.categoria.findFirst({ where: { nome: 'Saladas' } });

  // 🔹 Pratos
  const pratos = [
    {
      nome: 'Lasanha à Bolonhesa',
      valor: 32.9,
      imagem: 'https://www.receiteria.com.br/wp-content/uploads/lasanha-bolonhesa.jpg',
      descricao: 'Massa com camadas de molho bolonhesa, queijo e presunto gratinado.',
      vegetariano: false,
      contemGluten: true,
      contemLactose: true,
      categoriaId: catMassas!.id,
    },
    {
      nome: 'Espaguete ao Pesto',
      valor: 27.5,
      imagem: 'https://www.receiteria.com.br/wp-content/uploads/espaguete-ao-pesto.jpg',
      descricao: 'Massa italiana com molho pesto de manjericão e parmesão.',
      vegetariano: true,
      contemGluten: true,
      contemLactose: true,
      categoriaId: catMassas!.id,
    },
    {
      nome: 'Suco Natural de Laranja',
      valor: 9.9,
      imagem: 'https://www.receiteria.com.br/wp-content/uploads/suco-de-laranja-natural.jpg',
      descricao: 'Suco natural feito com laranjas frescas, sem adição de açúcar.',
      vegetariano: true,
      contemGluten: false,
      contemLactose: false,
      categoriaId: catBebidas!.id,
    },
    {
      nome: 'Refrigerante Lata',
      valor: 6.5,
      imagem: 'https://www.receiteria.com.br/wp-content/uploads/refrigerante.jpg',
      descricao: 'Lata de refrigerante tradicional (Coca-Cola, Guaraná ou Fanta).',
      vegetariano: true,
      contemGluten: false,
      contemLactose: false,
      categoriaId: catBebidas!.id,
    },
    {
      nome: 'Cheeseburger Clássico',
      valor: 24.9,
      imagem: 'https://www.receiteria.com.br/wp-content/uploads/cheeseburger-caseiro.jpg',
      descricao: 'Pão, hambúrguer artesanal, queijo, alface, tomate e maionese especial.',
      vegetariano: false,
      contemGluten: true,
      contemLactose: true,
      categoriaId: catLanches!.id,
    },
    {
      nome: 'Salada Caesar',
      valor: 19.9,
      imagem: 'https://www.receiteria.com.br/wp-content/uploads/salada-caesar.jpg',
      descricao: 'Alface americana, frango grelhado, croutons e molho caesar cremoso.',
      vegetariano: false,
      contemGluten: true,
      contemLactose: true,
      categoriaId: catSaladas!.id,
    },
    {
      nome: 'Brownie com Sorvete',
      valor: 18.9,
      imagem: 'https://www.receiteria.com.br/wp-content/uploads/brownie-com-sorvete.jpg',
      descricao: 'Brownie de chocolate servido com sorvete de creme e calda quente.',
      vegetariano: true,
      contemGluten: true,
      contemLactose: true,
      categoriaId: catSobremesas!.id,
    },
    {
      nome: 'Açaí Tradicional',
      valor: 15.9,
      imagem: 'https://www.receiteria.com.br/wp-content/uploads/acai-tradicional.jpg',
      descricao: 'Tigela de açaí natural com granola e banana.',
      vegetariano: true,
      contemGluten: true,
      contemLactose: false,
      categoriaId: catSobremesas!.id,
    },
  ];

  for (const prato of pratos) {
    await prisma.prato.create({ data: prato });
  }

  console.log(`${pratos.length} pratos criados com sucesso.`);
  console.log('Banco de dados populado!');
}

main()
  .catch((e) => {
    console.error('Erro ao popular banco:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
