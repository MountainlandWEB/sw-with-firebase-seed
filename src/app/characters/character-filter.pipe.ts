import { Pipe, PipeTransform } from '@angular/core';
import { Character } from './character';

@Pipe({name: 'characterListFilter'})
export class CharacterFilterPipe implements PipeTransform {
    transform (characters: Character[], filterBy: string ) : Character[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? characters.filter((character: any) =>
            character.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : characters;
    } 
}

