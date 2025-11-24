import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PratosService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.prato.findMany({
      include: { categoria: true },
    });
  }

  findById(id: number) {
    return this.prisma.prato.findUnique({
      where: { id },
      include: { categoria: true },
    });
  }

  findByCategoria(categoriaId: number) {
    return this.prisma.prato.findMany({
      where: { categoriaId },
      include: { categoria: true },
    });
  }

  searchByNome(nome: string) {
    return this.prisma.prato.findMany({
      where: {
        nome: { contains: nome, mode: 'insensitive' },
      },
      include: { categoria: true },
    });
  }
}
