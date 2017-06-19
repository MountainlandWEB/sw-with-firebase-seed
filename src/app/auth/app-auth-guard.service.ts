import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import {AppAuthService} from "../auth/app-auth.service";

@Injectable()
export class AppAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AppAuthService) { }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot): boolean {
    if (this.authService.isAuthenticated == false) {
      console.log(`you're really, really bad... you're not authenticated yet!`);
      this.router.navigate(['/home']);
      return false;
    } else {
      console.log(`looks like you're good to go! have fun! consume this app responsibly!`);
      return true;
    }
  }

}
