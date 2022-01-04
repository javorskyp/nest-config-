import { Controller, Get } from "@nestjs/common";

@Controller('creatures')
export class CreaturesController {

  @Get('/rims')
  getCreatures () {
    return [
      { id: 1, title: 'Front Rim', price: 500 },
      { id: 2, title: 'Rear Rim', price: 800 },
    ];
  }
}