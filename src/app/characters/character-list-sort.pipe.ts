import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'characterListSort'})
export class CharacterListSortPipe implements PipeTransform {
    transform (characters: any[], sortBy: string ) : any[] {
        sortBy = sortBy ? sortBy.toLocaleLowerCase() : null;
        return sortBy ? characters.sort((characterA: any, characterB: any) =>
            characterA[sortBy].localeCompare(characterB[sortBy])) : characters;
    } 
}