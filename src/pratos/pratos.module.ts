import { Module } from '@nestjs/common';
import { PratosService } from './pratos.service';
import { PratosController } from './pratos.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PratosController],
  providers: [PratosService, PrismaService],
})
export class PratosModule {}
