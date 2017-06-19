import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {CharacterListComponent} from "app/characters/character-list.component";
import {CharacterDetailComponent} from "app/characters/character-detail.component";
import {CharacterFilterPipe} from "app/characters/character-filter.pipe";
import {CharacterListSortPipe} from "app/characters/character-list-sort.pipe";
import {CharacterDetailGuard} from "app/characters/character-guard.service";
import {CharacterService} from "app/characters/character.service";
import {SharedModule} from "app/shared/shared.module";
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppAuthGuard} from "../auth/app-auth-guard.service";

@NgModule({
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'characters',
        canActivate: [AppAuthGuard],
        component: CharacterListComponent },
      {
        path: 'character/:id',
        canActivate: [CharacterDetailGuard, AppAuthGuard],
        component: CharacterDetailComponent
      }
    ])
  ],
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterFilterPipe,
    CharacterListSortPipe
  ],
  providers: [
    CharacterService,
    CharacterDetailGuard
  ]
})
export class CharacterModule {

}
