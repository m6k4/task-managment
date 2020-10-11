import { Body, Controller, Post } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {

    constructor(private characterService: CharacterService){}

    @Post()
    createCharacter(@Body() createkDto: CreateCharacterDto) {
    
        return this.characterService.createCharacter(createkDto);
    }

}

