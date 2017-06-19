import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from "app/characters/character";
import { CharacterService } from "app/characters/character.service";

@Component({
  moduleId: module.id,
  selector: 'character-detail',
  styleUrls: ['./character-detail.component.css'],
  templateUrl: './character-detail.component.html'
})

export class CharacterDetailComponent implements OnInit {
  character: Character;
  errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.getCharacter(id);
  }

  getCharacter(id: string) {
    this.characterService.getCharacter(id).subscribe(
      character => this.character = character,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/characters']);
  }

}