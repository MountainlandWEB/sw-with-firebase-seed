import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class AppAuthService {

  isAuthenticated: boolean = false;
  principal: String;

  constructor(private router: Router) {}

  loginWithEmailAndPassword(email: string, password: string) {
    console.log(`using ${email} and ${password} to authenticate`);
    console.log(`we'll let you come in for now!`);
    this.isAuthenticated = true;
    this.principal = 'Test';
    this.router.navigate(['/characters']);
  }

  logout() {
    console.log('logging out current user... see ya!');
    this.isAuthenticated = false;
    this.principal = '';
    this.router.navigate(['/home']);
  }

}
