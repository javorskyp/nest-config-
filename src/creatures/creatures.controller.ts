import { Controller, Get } from "@nestjs/common";
import { CreaturesService } from "./creatures.service";

@Controller('creatures')
export class CreaturesController {
  private creaturesService;
  constructor(creaturesService: CreaturesService) {
    this.creaturesService = creaturesService;
  }

  @Get('/rims')
  getCreatures () {
    return this.creaturesService.getAll()
  }
}