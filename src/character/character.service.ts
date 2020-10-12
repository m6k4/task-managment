import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character } from './character.model';
import { CreateCharacterDto } from './dto/create-character.dto';
@Injectable()
export class CharacterService {

    constructor(@InjectModel('Character') private readonly characterModel: Model<Character>) {
    }

    async createCharacter(createDto: CreateCharacterDto) {
        console.log(process.env.MONGO_USER)
        const newCharacter = new this.characterModel(createDto);
         const result = await newCharacter.save();
         return result.id;
    }
    
}
