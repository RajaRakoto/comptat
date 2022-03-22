import { Router } from '@angular/router';
import { DateService } from './../services/date.service';
import { UserService } from './../services/user.service';
import { CaisseService } from './../services/caisse.service';
import { MatDialog } from '@angular/material/dialog';
import { CaisseComponent } from './../dialog-box/caisse/caisse.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  caisse = 0;
  userType!: 'assist' | 'admin';
  today = '';

  constructor(
    private dialog: MatDialog,
    private caisseService: CaisseService,
    private userService: UserService,
    private dateService: DateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.caisseService.caisseAssistSubject.subscribe((caisse) => {
      this.caisse = caisse;
    });
    this.caisseService.emitCaisseAssist();

    this.userType = this.userService.currentUser.type;
    this.today = `${this.dateService.today}`;
  }

  onCaisse() {
    if (this.userType === 'admin') {
      this.dialog.open(CaisseComponent, {
        width: '450px',
        panelClass: 'dialog-box',
      });
    }
  }

  onLogout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
