import { DepenseService } from './../../services/depense.service';
import { Component, OnInit } from '@angular/core';
import { DailyDepense } from 'src/app/class/dailyDepense';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss'],
})
export class DepenseComponent implements OnInit {
  headers = ['heure', 'type', 'motif', 'montant'];
  dailyDepense!: DailyDepense;

  constructor(private depenseService: DepenseService) {}

  ngOnInit(): void {
    this.dailyDepense = this.depenseService.depenseToday;
  }
}
