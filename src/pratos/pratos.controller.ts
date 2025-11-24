import { Controller, Get, Param, Query } from '@nestjs/common';
import { PratosService } from './pratos.service';

@Controller('pratos')
export class PratosController {
  constructor(private readonly pratosService: PratosService) {}

  @Get()
  findAll(
    @Query('search') search?: string,
    @Query('categoriaId') categoriaId?: string,
  ) {
    if (search) {
      return this.pratosService.searchByNome(search);
    }
    if (categoriaId) {
      return this.pratosService.findByCategoria(+categoriaId);
    }
    return this.pratosService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.pratosService.findById(+id);
  }
}
