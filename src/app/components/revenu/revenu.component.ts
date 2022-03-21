import { RevenuService } from './../../services/revenu.service';
import { Component, OnInit } from '@angular/core';
import { DailyRevenu } from 'src/app/class/dailyRevenu';

@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.scss'],
})
export class RevenuComponent implements OnInit {
  headers = ['heure', 'type', 'source', 'montant'];
  revenuToday!: DailyRevenu;

  constructor(private revenuService: RevenuService) {}

  ngOnInit(): void {
    this.revenuToday = this.revenuService.revenuToday;
  }
}
