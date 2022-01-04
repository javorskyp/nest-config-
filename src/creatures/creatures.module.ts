import { Module } from "@nestjs/common";
import { CreaturesController } from "./creatures.controller";

@Module ({
  controllers: [CreaturesController],
})

export class CreaturesModule {}