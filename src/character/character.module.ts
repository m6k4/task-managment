import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { MongooseModule } from '@nestjs/mongoose'
import { CharacterSchema } from './character.model';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Character', schema: CharacterSchema}])
  ],
  controllers: [CharacterController],
  providers: [CharacterService]
})
export class CharacterModule {}
