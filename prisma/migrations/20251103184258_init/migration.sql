-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prato" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "imagem" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "vegetariano" BOOLEAN NOT NULL,
    "contemGluten" BOOLEAN NOT NULL,
    "contemLactose" BOOLEAN NOT NULL,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "Prato_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Prato" ADD CONSTRAINT "Prato_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
