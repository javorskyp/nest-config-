import { Injectable } from "@nestjs/common";

const parts = [
      { id: 1, title: 'Front Rim', price: 500 },
      { id: 2, title: 'Rear Rim', price: 800 },
    ];


@Injectable()
export class PartsService {
  getAll(){
    return parts;
      
  }

  getById(id: number) {
    return parts.find(x => x.id === id)
  }

}