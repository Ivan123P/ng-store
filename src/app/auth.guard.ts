import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from './admin/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public canActivate(): boolean {
    return this.loginService.isAuth;
  }

  constructor(
    private loginService: LoginService
  ) { }

}
