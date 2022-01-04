import { Controller, Get } from "@nestjs/common";
import { PartsService } from "./parts.service";

@Controller('parts')
export class PartsController {
  constructor(private partsService: PartsService) {
  }

  @Get('/rims')
  getParts () {
    return this.partsService.getAll()
  }
}