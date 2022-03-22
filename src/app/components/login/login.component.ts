import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private toast: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onLogin(ID: string, password: string) {
    const connected = this.userService.login(ID, password);

    if (!connected) {
      this.toast.open('Incorrect !', 'ok', {
        duration: 5000,
        panelClass: 'toast-warn',
      });
    } else {
      this.router.navigate(['/home']);
    }
  }
}
