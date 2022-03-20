import { Component, OnInit } from '@angular/core';
import { DEPENSE_DATA } from './depense.service';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss'],
})
export class DepenseComponent implements OnInit {
  headers = ['heure', 'type', 'motif', 'montant'];
  footers = ['24 h', 'Total', 0];
  depenses = DEPENSE_DATA;

  constructor() {}

  ngOnInit(): void {
    this.totalDepense();
  }

  totalDepense() {
    for (let i = 0; i < this.depenses.length; i++) {
      this.footers[2] = +this.footers[2] + this.depenses[i].montant;
    }
  }
}
