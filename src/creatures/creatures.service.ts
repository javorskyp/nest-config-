import { Injectable } from "@nestjs/common";

@Injectable()
export class CreaturesService {
  getAll(){
    return [
      { id: 1, title: 'Front Rim', price: 500 },
      { id: 2, title: 'Rear Rim', price: 800 },
    ];
  }
}