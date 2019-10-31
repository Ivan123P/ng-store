import { Injectable } from '@angular/core';

const user = {
  name: 'admin',
  password: 'admin'
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isAuth: boolean = false;

  constructor() { }

  public checkUser(formValue): boolean {
    if (formValue.name === user.name && formValue.password === user.password) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }

    return this.isAuth;
  }

  public logout(): void {
    this.isAuth = false;
  }
}
