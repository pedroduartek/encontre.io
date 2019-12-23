import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: User;
  model: any = {};

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success('logged in succesfully');
        this.router.navigate(['/home']);
      },
      error => {
        this.alertify.error('Failed to login');
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.error('Logged out');
    this.router.navigate(['/home']);
  }
}
