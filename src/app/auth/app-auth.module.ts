import {NgModule} from "@angular/core";
import {AppAuthGuard} from "../auth/app-auth-guard.service";
import {AppAuthService} from "./app-auth.service";

@NgModule({
  providers: [
    AppAuthService,
    AppAuthGuard
  ]
})
export class AppAuthModule {

}
