import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email: string = '';
  public password: string = '';

  constructor(private logServ: LoginService, private router: Router) {

  }

  onSubmit(form: NgForm) {

    if (form.invalid) { return; }

    const { email, password } = form.value;

    this.logServ.logIn(email, password);

  }

}
