import { IsNumber } from "class-validator";

export class EditPartDto {
  @IsNumber({}, { message: 'Price only number please' })
  price: number;
}