import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Character } from "./character";

@Injectable()
export class CharacterService {

	private charactersUrl: string = 'assets/api/characters.json';

	private characters: Character[];

	constructor(private http: Http) { }

	getCharacters(): Observable<Character[]> {
		return this.http.get(this.charactersUrl)
			.map((response: Response) => <Character[]>response.json())
			.catch(this.handleError);
	}

	getCharacter(id: string): Observable<Character> {
		return this.getCharacters()
		.map((characters: Character[]) => characters.find(character => character.id == id));
	}

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}