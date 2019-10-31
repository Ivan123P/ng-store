import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private isError: boolean = false;

  public loginForm: FormGroup | null = null;
  public name: FormControl | null = null;
  public password: FormControl | null = null;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.name = new FormControl('');
    this.password = new FormControl('');

    this.loginForm = new FormGroup({
      name: this.name,
      password: this.password
    });
  }

  public checkAuth(): any {
    if (this.loginService.checkUser(this.loginForm.value)) {
      this.router.navigate(['/admin/home/products']);
    } else {
      this.showError();
    }
  }

  private showError() {
    this.isError = true;
  }
}
