
import * as mongoose from 'mongoose';

export const CharacterSchema = mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
});

export interface Character {
    id: string;
    name: string;
    breed: string;

}

export enum Breeds{
    HUMAN = 'HUMAN',
    UNDEAD = 'UNDEAD',
}