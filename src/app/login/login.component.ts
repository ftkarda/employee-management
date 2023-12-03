import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotifService } from '../services/notif.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private notifService: NotifService) { }

  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/employee-list']);
    } else {
      this.notifService.notifErrorAlert('Invalid username or password');
    }
  }
}