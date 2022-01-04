import { Controller } from "@nestjs/common";

export class CreaturesControllers {
  getCreatures () {
    return [
      { id: 1, title: 'Front Rim', price: 500 },
      { id: 2, title: 'Rear Rim', price: 800 },
    ];
  }
}