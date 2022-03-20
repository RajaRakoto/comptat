import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

export class Caisse {
  constructor(
    public today: number,
    public assist: number,
    public admin: number
  ) {}
}

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.scss'],
})
export class CaisseComponent implements OnInit {
  caisse: Caisse = {
    today: 276000,
    assist: 379500,
    admin: 1761000,
  };

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onSubmit(payment: number) {
    this.dialog.closeAll();
  }
}
