import { Body, Post, Controller, Get, Param } from "@nestjs/common";
import { CreatePartDto } from "./dtos/create-parts.dto";
import { PartsService } from "./parts.service";

@Controller('parts')
export class PartsController {
  constructor(private partsService: PartsService) {
  }

  @Get()
  getParts () {
    return this.partsService.getAll()
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.partsService.getById(parseInt(id))
  }

  @Post()
  addParts(@Body() body: CreatePartDto ) {
  return this.partsService.add(body.title, body.price)
  }
}