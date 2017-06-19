import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service';
import { Character } from './character';
import { Observable } from "rxjs/Observable";

@Component({
	templateUrl: 'character-list.component.html',
	styleUrls: ['character-list.component.css']
})

export class CharacterListComponent implements OnInit {
	characters: Character[];
	charactersFilterBy: string;
	charactersSortBy: string;
	showDetails: boolean = true;
	errorMessage: string;

	constructor(private characterService: CharacterService) { }

	ngOnInit(): void {
		this.characterService.getCharacters()
			.subscribe(
				characters => this.characters = characters, 
				error => this.errorMessage = <any>error);
	}

	sortOptions: string[] = [
		'name',
		'gender',
		'birth_year'
	];

	sortSelection: number;

	reset(): void {
		this.charactersFilterBy = "";
		this.charactersSortBy = null;
	}

	selectCharacter(): void {

	}

	toggleDetails(): void {
		this.showDetails = !this.showDetails;
	}

	onForceStrengthClicked(message: string): void {
		console.log(message);
	}
}