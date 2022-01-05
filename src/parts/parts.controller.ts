import { Controller, Get, Param } from "@nestjs/common";
import { PartsService } from "./parts.service";

@Controller('parts')
export class PartsController {
  constructor(private partsService: PartsService) {
  }

  @Get('/rims')
  getParts () {
    return this.partsService.getAll()
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.partsService.getById(parseInt(id))
  }
}