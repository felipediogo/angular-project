import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService]
})

export class AppComponent implements OnInit {
  title = 'angular-project';
  showButtons = false;
  constructor(private router: Router, private loginService: LoginService) {

  }

  ngOnInit() {
    this.showButtons = this.loginService.isLogged();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
