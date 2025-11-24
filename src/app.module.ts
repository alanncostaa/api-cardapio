import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PratosModule } from './pratos/pratos.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [PratosModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
