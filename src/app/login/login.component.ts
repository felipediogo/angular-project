import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) { }
  username: string;
  password: string;

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  login(): void {
    // if (this.username == 'admin' && this.password == 'admin') {
    // } else {
    if (this.username.trim() == '') {
      alert('Username cannot be empty');
    } else if (this.password.trim() == '') {
      alert('password cannot be empty');
    } else {
      let response = this.loginService.login(this.username, this.password);
      if (response.error) {
        alert(response.error);
      } else {
        this.router.navigate(["dragons"]);
      }
    }
  }
}
