import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

declare var VANTA: any;

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

  ngOnInit(): void {
    VANTA.WAVES({
      el: '#vanta-waves',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.0,
      minWidth: 100.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });
  }

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
