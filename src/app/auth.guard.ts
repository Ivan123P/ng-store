import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './admin/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public canActivate(): boolean {
    if (this.loginService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/admin/login']);
    }
  }

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

}
