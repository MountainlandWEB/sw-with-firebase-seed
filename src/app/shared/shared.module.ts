import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ForceComponent } from "app/shared/force.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [ ForceComponent ],
  exports: [
    CommonModule,
    FormsModule,
    ForceComponent
  ]
})
export class SharedModule {

}