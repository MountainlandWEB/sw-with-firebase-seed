import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import {AppAuthService} from "../auth/app-auth.service";

@Injectable()
export class CharacterDetailGuard implements CanActivate {

  constructor(private router: Router, private authService: AppAuthService) { }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot): boolean {
    if (activatedRouteSnapshot.url[1].path == 'bad') {
      alert('you are bad');
      this.router.navigate(['/characters']);
      return false;
    }
    else {
      console.log('something')
      return true;
    }
  }

}
